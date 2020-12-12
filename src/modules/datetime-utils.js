import i18n from '../i18n';

const DateTimeUtils = {
    getSecondsElapsedSince: getSecondsElapsedSince,
    parse: parse,
    liveStreamDateTimeDisplay: liveStreamDateTimeDisplay,
    shortServiceDateTimeDisplay: shortServiceDateTimeDisplay,
    longServiceDateDisplay: longServiceDateDisplay,
};

function getSecondsElapsedSince(sinceDateTime) {
    const sinceTime = new Date(sinceDateTime).getTime();
    const nowTime  = new Date().getTime();

    const secondsElapsed = (nowTime - sinceTime) / 1000;
    return Math.round(secondsElapsed);
}

function parse(hhmmss) {
    const invalidTime = {valid: false, hour: 0, minute: 0, second: 0};

    const time = hhmmss.split(":");
    if (time.length !== 3) {
      return invalidTime;
    }

    const hour = +time[0];
    const minute = +time[1];
    const second = +time[2];

    if (hour < 0 || minute < 0 || minute > 59 || second < 0 || second > 59) {
        return invalidTime;
    }

    return { valid: true, hour, minute, second };
}

function liveStreamDateTimeDisplay(datetime) {
    // datetime format: yyyy-mm-ddThh:mm:ssZ
    const date = new Date(datetime);

    const today = new Date();
    let tomorrow = new Date(today);
    tomorrow.setDate(today.getDate()+1);

    const isToday = isSameDay(date, today);
    const isTomorrow = isSameDay(date, tomorrow);

    const hourMinuteDisplay = getHourMinuteDisplay(date);

    if (isLanguageChinese()) {
        if (isToday) {
            return "今天住，" + hourMinuteDisplay;
        }

        if (isTomorrow) {
            return "明天住，" + hourMinuteDisplay;
        }

        const month = date.getMonth() + 1;
        const day = date.getDate();
        const monthDayDisplay = month + '月' + day + '日';

        return '住 ' + monthDayDisplay + '，' + hourMinuteDisplay;
    }

    const dateDisplay = "Live " +
        ((isToday || isTomorrow)
        ? (isToday ? "today" : "tomorrow") + ", " + hourMinuteDisplay
        : date.toLocaleDateString('en-us', {month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit'}));
    return dateDisplay;
}

function getHourMinuteDisplay(dateTime) {
    if (isLanguageChinese()) {
        const hour = dateTime.getHours();
        const hourDisplay = (hour < 12 ? '上午' : '') + hour;

        const minute = dateTime.getMinutes();
        const minuteDisplay = (minute < 10 ? '0' : '') + minute;

        return hourDisplay + ':' + minuteDisplay;
    }

    return dateTime.toLocaleTimeString('en-us', {hour: 'numeric', minute: '2-digit'});
}

function isSameDay(day1, day2) {
    const date1 = new Date(day1.getFullYear(), day1.getMonth(), day1.getDate());
    const date2 = new Date(day2.getFullYear(), day2.getMonth(), day2.getDate());

    return (date1.getTime() === date2.getTime());
}

function shortServiceDateTimeDisplay({datetime, showTimeToo}) {
    let dateTimeDisplay = dateDisplay(datetime, 'short');

    if (showTimeToo) {
        dateTimeDisplay = dateTimeDisplay + ' ' + getHourMinuteDisplay(new Date(datetime));
    }

    return dateTimeDisplay;
}

function longServiceDateDisplay(datetime) {
    return dateDisplay(datetime, 'long');
}

function dateDisplay(datetime, longOrShort) {
    // datetime format: yyyy-mm-dd or yyyy-mm-ddThh:mm:ssZ

    var reJustDate = /^\d{4}[-/]\d{1,2}[-/]\d{1,2}$/;
    if (reJustDate.exec(datetime)) {
        datetime += "T07:00:00Z";
    }

    const date = new Date(datetime);
    const weekday = date.getDay();
    const notSunday = weekday !== 0;

    if (isLanguageChinese()) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        let dateDisplay = year + '年' + month + '月' + day + '日';
        if (notSunday) {
            dateDisplay += ' (';
            dateDisplay += getWeekdayZhZf(weekday);
            dateDisplay += ')';
        }
        return dateDisplay;
    }

    const dateDisplay = notSunday
        ? date.toLocaleDateString('en-us', {weekday: longOrShort, year: 'numeric', month: longOrShort, day: 'numeric'})
        : date.toLocaleDateString('en-us', {year: 'numeric', month: longOrShort, day: 'numeric'});

    return dateDisplay;
}

const isLanguageChinese = () => (i18n.language === 'zh' || i18n.language === 'zf');

function getWeekdayZhZf(weekday) {
    switch (weekday) {
        case 0:
            return '星期天';
        case 1:
            return '星期一';
        case 2:
            return '星期二';
        case 3:
            return '星期三';
        case 4:
            return '星期四';
        case 5:
            return '星期五';
        case 6:
            return '星期六';
        default:
            console.error('Invalid weekday', weekday);
            return '';
    }
}

export default DateTimeUtils;
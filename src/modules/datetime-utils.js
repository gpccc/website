const DateTimeUtils = {
    parse: parse,
    shortDateDisplay: shortDateDisplay,
    longDateDisplay: longDateDisplay,
};

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

function shortDateDisplay (datetime) {
    return dateDisplay(datetime, 'short');
}

function longDateDisplay(datetime) {
    return dateDisplay(datetime, 'long');
}

function dateDisplay(datetime, longOrShortMonth) {
    // datetime format: yyyy-mm-dd or yyyy-mm-ddThh:mm:ssZ

    var reJustDate = /^\d{4}[-/]\d{1,2}[-/]\d{1,2}$/;
    if (reJustDate.exec(datetime)) {
        datetime += "T07:00:00Z";
    }

    const date = new Date(datetime)
        .toLocaleDateString('en-us', {year: 'numeric', month: longOrShortMonth, day: 'numeric'});
    return date;
}

export default DateTimeUtils;
const TimeUtils = {
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

function shortDateDisplay (yyyymmdd) {
    return dateDisplay(yyyymmdd, 'short');
}

function longDateDisplay(yyyymmdd) {
    return dateDisplay(yyyymmdd, 'long');
}

function dateDisplay(yyyymmdd, longOrShortMonth) {
    const date = new Date(yyyymmdd + "T07:00:00Z")
        .toLocaleDateString('en-us', {year: 'numeric', month: longOrShortMonth, day: 'numeric'});
    return date;
}


export default TimeUtils;
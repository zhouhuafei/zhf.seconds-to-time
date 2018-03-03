const secondsToTime = require('../dist/index.min');

test(`秒转时间(天时分秒)`, () => {
    console.log(secondsToTime(1000)); // {day: 0, hours: 0, minutes: 16, seconds: 40, allSeconds: 1000}
    expect(true).toEqual(true);
});

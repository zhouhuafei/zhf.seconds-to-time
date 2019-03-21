(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else if (window) { // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('secondsToTime', function () {
    /**
     * @description 秒转时间(天时分秒)
     * @param {Number} seconds - 秒数
     * */
    function secondsToTime(seconds = 0) {
        // 天
        const nowDay = Math.floor(seconds / 3600 / 24);
        // 时
        const nowHours = Math.floor(seconds / 3600 % 24);
        // 分
        const nowMinutes = Math.floor(seconds % 3600 / 60);
        // 秒
        const nowSeconds = Math.floor(seconds % 60);
        return {
            day: nowDay,
            hours: nowHours,
            dayMergeToHours: nowDay * 24 + nowHours,
            minutes: nowMinutes,
            seconds: nowSeconds,
            allSeconds: seconds,
        };
    }

    return secondsToTime;
});

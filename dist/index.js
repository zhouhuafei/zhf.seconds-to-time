'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else if (window) {
        // window - browser canon
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
    function secondsToTime() {
        var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        // 天
        var nowDay = Math.floor(seconds / 3600 / 24);
        // 时
        var nowHours = Math.floor(seconds / 3600 % 24);
        // 分
        var nowMinutes = Math.floor(seconds % 3600 / 60);
        // 秒
        var nowSeconds = Math.floor(seconds % 60);
        return { day: nowDay, hours: nowHours, minutes: nowMinutes, seconds: nowSeconds, allSeconds: seconds };
    }

    return secondsToTime;
});
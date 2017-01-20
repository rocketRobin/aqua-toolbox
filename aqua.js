/*!
 * 欢迎使用 aqua toolbox！
 * Author　　：姜佰亮
 * 描述   　 ：业务无关、dom无关、js实用函数集
 * 依赖     ：
 * 版本　 　 ：V1.0.0
 */
/**
 * aqua 对象
 */
var aqua = (function () {
    "use strict";
    var aqua = {
        /**
         * 判断一个对象是否是Json对象
         * @param {any} obj
         * @returns {bool}
         */
        isJson: function (obj) {
            return typeof (obj) === "object" &&
                Object.prototype.toString.call(obj).toLowerCase() === "[object object]" &&
                !obj.length;
        },
        /**
         * 日期作差值运算
         * @param {Date} date 日期对象
         * @param {number} diff 差值（毫秒）
         * @returns {Data} 作差之后的日期对象
         */
        diffDate: function (date, diff) {
            return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()) +
                diff);
        },
        /**
         * 将 Date 转化为指定格式的String
         * @param {Date} date 源日期对象
         * @param {string} pattern 匹配模式
         * @returns {string} 格式化结果
         */
        fmtDate: function (date, pattern) {
            return pattern
                .replace(/yyyy/, date.getFullYear().toString())
                .replace(/MM/, aqua.fillZero((date.getMonth() + 1).toString(), 'l', 2))
                .replace(/dd/, aqua.fillZero(date.getDate().toString(), 'l', 2))
                .replace(/hh/, aqua.fillZero(date.getHours().toString(), 'l', 2))
                .replace(/mm/, aqua.fillZero(date.getMinutes().toString(), 'l', 2))
                .replace(/ss/, aqua.fillZero(date.getSeconds().toString(), 'l', 2))
                .replace(/S/, date.getMilliseconds().toString());
        },
        /**
         * 补零函数
         *
         * @param {string} src 源数字
         * @param {string} direction 方向 l r
         * @param {number} digit 补零后的总位数
         * @returns {string} 结果
         */
        fillZero: function (src, direction, digit) {
            var count = digit - src.length;
            var os = new Array(count + 1).join('0');
            if (direction !== 'r') {
                return os + src;
            }
            return src + os;
        }
    };
    return aqua;
})();

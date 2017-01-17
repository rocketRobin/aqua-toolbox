/*!
 * 欢迎使用 aqua toolbox！
 * Author　　：姜佰亮
 * 描述   　 ：业务无关、dom无关、js实用函数集
 * 依赖     ：
 * 版本　 　 ：V1.0.0
 */
var aqua = (
    function() {
        "use strict";
        var aqua = {
            // 判断一个对象是否是Json对象
            // [obj:Json|Any] 源对象
            isJson: function(obj) {
                return typeof(obj) === "object" &&
                    Object.prototype.toString.call(obj).toLowerCase() === "[object object]" &&
                    !obj.length;
            },

            // 日期作差值运算
            // [date:Date] 源日期对象
            // [diff:Number] 差值毫秒数 例如：-24*60*60*1000
            diffDate: function(date, diff) {
                return new Date(
                    Date.UTC(
                        date.getUTCFullYear(),
                        date.getUTCMonth(),
                        date.getUTCDate(),
                        date.getUTCHours(),
                        date.getUTCMinutes(),
                        date.getUTCSeconds()
                    ) +
                    diff
                );
            },

            // 将 Date 转化为指定格式的String
            // [date:Date] 源日期对象
            // [pattern:String] 匹配模式
            // aqua.fmtDate("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
            fmtDate: function(date, pattern) {
                return pattern
                    .replace(/yyyy/, date.getFullYear())
                    .replace(/MM/, aqua.fillZero(date.getMonth() + 1, 'l', 2))
                    .replace(/dd/, aqua.fillZero(date.getDate(), 'l', 2))
                    .replace(/hh/, aqua.fillZero(date.getHours(), 'l', 2))
                    .replace(/mm/, aqua.fillZero(date.getMinutes(), 'l', 2))
                    .replace(/ss/, aqua.fillZero(date.getSeconds(), 'l', 2))
                    .replace(/S/, date.getMilliseconds());
            },

            // 补零函数 
            //[src:String|Number] 源数字
            //[direction:'l','r'] 方向 left right
            //[digit:Number] 字符总数
            fillZero: function(src, direction, digit) {
                src = src + '';
                var count = digit - src.length;
                var os = new Array(count + 1).join('0');
                if (direction !== 'r') {
                    return os + src;
                }
                return src + os;
            }
        };
        return aqua;
    }
)();
/*!
 * mbox 
 * 作者　　　：姜佰亮
 * 创建日期　：2017年1月9日14:50:00
 * 描述   　 ：用于后台传向页面的消息盒子相关内容:后端要求Json序列化实现了IInformable接口的类的实例
 *            Html 标签支持div nspan 标签中必须含有 mbox属性，取值大于0
 *            例如： < div id="xxx" mbox="1" >
 * 依赖     ：依赖于jQuery
 * 版本　 　 ：V1.0.0
 */


/*
examples

<div mbox="1"></div>

mbox.setWithColor("qwerty","#FFFFFF",1);
mbox.set("qwerty","info",1);

mbox.reset(1);
mbox.reset();
*/
/// <reference path="../lib/jquery-3.1.1.js" />

var mbox = (function() {
    "use strict";
    var allboxes = $("[mbox]");
    allboxes.css({
        "color": "#FFFFFF",
        "font-size": "14px",
        "font-weight": "bold",
        "line-height": "14px",
        "padding": "2px",
        "font-family": "Microsoft yahei', '微软雅黑', Tahoma, Verdana, Arial, sans-serif",
        "text-shadow": "0 -1px 0 rgba(0, 0, 0, 0.25)",
        "vertical-align": "baseline",
        "white-space": "nowrap",
        "text-indent": "0px",
        "text-align": "center"
    })
    allboxes.hide();
    var box = {
        //设置指定position的消息盒子
        'set': function(message, level, position) {
            mbox.reset(position);
            box.setWithColor(message, box.color[level], position);
        },

        // 使用指定CSS背景颜色显示
        'setWithColor': function(message, color, position) {
            mbox.reset(position);
            var target = $("[mbox=" + position + "]");
            target.css("background-color", color);
            target.html(message).show();
        },

        //重置消息盒子，如果不传参数，重置所有消息盒子
        'reset': function(position) {
            if (position === undefined || isNaN(position)) {
                allboxes.empty().hide();
            } else {
                var target = $("[mbox=" + position + "]");
                target.empty().hide();
            }
        },
        // 默认颜色（这是一个json对象）
        'color': {
            'success': "#1B9AF7",
            'info': "#4AA14A",
            'warning': "#ED710C",
            'error': "#D9534F"
        }
    };
    return box;
})();

// 工具方法
var SUBJ = SUBJ || {};
SUBJ.Util = function(){ };
/**
 * @public
 * 从浏览器的地址栏获取参数
 */
SUBJ.Util.getValueFromHrefByKey = function (key) {
    //测试数据，实际情况是用window.location.href得到URL
    var sHref = window.location.href;
    //取出不带＃的URL
    sHref = sHref.split('#')[0];
    var args = sHref.split("?");
    var retval = "";
    /*参数为空*/
    if(args[0] == sHref){
        return retval; /*无需做任何处理*/
    }
    var str = args[1];
    args = str.split("&");
    for(var i = 0; i < args.length; i++ ) {
        str = args[i];
        var arg = str.split("=");
        if(arg.length <= 1) continue;
        if(arg[0] == key) retval = arg[1];
    }
    //if(!retval){
    //    //alert('url中的' + key + '参数为空');
    //    console.log('url中的' + key + '参数为空');
    //}
    return retval;
};

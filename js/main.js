
$(function(){

     var headerObj = $('.js_header_wrap');
     var returnTopObj = $('.js_return_top');
     var contentWrapObj = $('.js_content_wrap');
     var winH = $(window).height();//     var contentBgColorArr = ['#70b1b9' , '#2bc29d' , '#d049c5' ,'#ebdb53'];
     var contentBgColorArr = ['rgba(100,100,100,0.3)' , 'rgba(100,20,20,0.3)',
         'rgba(100,100,0,0.3)' , 'rgba(0,100,100,0.3)' ,'rgba(0,200,100,0.3)'];

    var contentListArr=['语文','数学','外语','文综','理综'];
    contentListArr.forEach(function(value , index){
      console.log('val : ' + value);
      var content = "<section class='js_common_content'><h1>content " + (index+1) + value +"</h1></section>";
      contentWrapObj.append(content);
      $('.js_common_content').eq(index).css({
            'background-color' :  contentBgColorArr[index],
            'height' : winH + 'px'
      });
    });

     // 创建headerManager单例
     SUBJ.HeaderManager.getInstance();

     $(window).on('scroll' , function(){
        var winScrollTop = $(window).scrollTop();
         winScrollTop > winH?returnTopObj.show():returnTopObj.hide();
     });

     // 绑定returnTop的点击事件
    returnTopObj.on('click' , function(){
        var currentScrollTop = $(window).scrollTop();
        var timer = null;
        timer = setInterval(function(){
            currentScrollTop = (currentScrollTop / 1.3 ).toFixed(2); // 设置滚动条缓冲
            if( currentScrollTop < 1 ){
                currentScrollTop = Math.floor(currentScrollTop); //向下取整，最终为0
            }
            if( currentScrollTop <=0 ){
                clearInterval(timer);
            }
            $(window).scrollTop( currentScrollTop ); // 重置滚动条高度，返回顶部
        } , 30);
    });

 });


# headerManager
页面滑动/滚动，js控制header的呈现
## 在浏览器地址栏中加上参数 ?headerStatus=0 ，显示第1种header,默认不加
![image](https://github.com/xiaojiandong/headerManager/blob/master/img/headerStatus%3D0.png)
## 在浏览器地址栏中加上参数 ?headerStatus=1，显示第2种header
![image](https://github.com/xiaojiandong/headerManager/blob/master/img/headerStatus%3D1.png)
## 页面滚动，或调试为手机模式，滑动页面，则header部分隐藏，页面静止时，header显示
## 首屏中，header始终显示，returnTop始终隐藏，超出首屏，returnTop显示，点击回到顶部
![image](https://github.com/xiaojiandong/headerManager/blob/master/img/return-top.png)
## headerManager.js单例，控制header隐藏，显示的逻辑
```js
SUBJ.HeaderManager.prototype = {
  DELAY_SHOW_HEADER_TIME : 1000, // 页面静止时，延迟显示header的等待时间
  showHeaderTimeRemain : 0, // 延迟时间
  isOnScroll : false, // 页面是否在滚动/滑动
  isHeaderShow : true, // header是否显示
  DEVICE_HEIGHT : $(window).height(), // 设备物理的height

   init : function(){
     this.initHeaderStatus();
     //this.resetHeaderShowTimeRemain();
     this.initWindowScroll();
     this.initOnTouchMoveEvent();
     this.initDelayShow(); // 始终保持滚动/滑动窗口后，延迟显示header
   },
   // 初始化header的逻辑
   initHeaderStatus:function(){
   },
   
   // 窗口滚动的逻辑
   initWindowScroll:function(){
   },
   
   // 窗口滑动的逻辑
   initOnTouchMoveEvent : function(){
   }
   // todo 其他逻辑处理
   ...
  } 
```

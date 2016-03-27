
// 声明空对象
var SUBJ = SUBJ || {};

SUBJ.HeaderManager = function(){
    this.init();
};

SUBJ.HeaderManager.instance = null;

SUBJ.HeaderManager.getInstance = function(){
  if(!SUBJ.HeaderManager.instance){
      SUBJ.HeaderManager.instance = new SUBJ.HeaderManager();
  }
  return SUBJ.HeaderManager.instance;
};

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

    /**
     * @public
     * 显示header
     */
    showHeader : function(){
        if( !this.isHeaderShow ){ // header已经显示，则不再重复显示
            $('.js_header_wrap').show();
            $('.js_header_wrap').addClass('show-animation');
            this.isHeaderShow = true;
        }
    },

    /**
     *@public
     * 隐藏header
     */
    hideHeader : function(){
        if(this.isHeaderShow){ // header已经显示，则隐藏
            $('.js_header_wrap').hide();
            this.isHeaderShow = false;
        }
    },

    /**
     * 初始化header状态
     */
    initHeaderStatus : function(){
        this.showHeader();
        if(SUBJ.Util.getValueFromHrefByKey('headerStatus')==1){
          $('.header-share').show();
          $('.header-app').hide();
        }else{
            $('.header-share').hide();
            $('.header-app').show();
        }
    },

    /**
     * @private
     * 初始化窗口滚动
     */
    initWindowScroll : function(){
      var that = this;
      $(window).on('scroll' , function(){
         that.onWindowScroll();
      });
    },

    /**
     * @private
     * 初始化窗口滑动
     */
    initOnTouchMoveEvent : function(){
      var that = this;
      document.addEventListener('touchstart' , touch , true);
      document.addEventListener('touchmove' , touch , true);
      document.addEventListener('touchend' , touch , true);
      // 处理touch的3种事件类型
      function touch( event ){
        var event = event || window.event;
        switch ( event.type ){
            case 'touchstart' : // 手指开始接触窗口屏幕
                break;
            case 'touchend' : // 手指移开屏幕，则isOnScroll = false
                that.isOnScroll = false;
                break;
            case 'touchmove' : // 手指正在窗口屏幕滑动
                that.onWindowScroll();
                break;
        }
      }
    },

    /**
     * 处理延迟显示，
     * 此时窗口静止
     */
    initDelayShow : function(){
     var that = this;
     var INTERVAL_TIME = 500;
     setInterval(function(){
      that.showHeaderTimeRemain -= INTERVAL_TIME; // 距离显示header的时间
       if(that.showHeaderTimeRemain <= 0){
          that.showHeader();
          that.isOnScroll = false;
       }
     } , INTERVAL_TIME);
    },

    /**
     * 重置窗口显示延迟
     * 窗口静止
     */
    resetHeaderShowTimeRemain : function(){
        this.showHeaderTimeRemain = this.DELAY_SHOW_HEADER_TIME;
        this.isOnScroll = false;
    },

    /**
     * 执行touchmove和initWindowScroll方法时，通用逻辑
     * 即，窗口滚动/滑动时，隐藏header
     */
    onWindowScroll : function(){
      var that = this;
      //that.resetHeaderShowTimeRemain(); // 重置窗口显示延迟
      that.isOnScroll = true; // 窗口正在滚动
      var currentScrollTop = $(window).scrollTop(); // 滚动条高度
      currentScrollTop > that.DEVICE_HEIGHT?that.hideHeader():that.showHeader();
//      console.log('窗口正在滚动/滑动，隐藏header');
    }

};
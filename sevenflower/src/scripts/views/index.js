var Vue = require('../lib/vue.js');
var Swiper = require('../lib/swiper.js');

new Vue({
  el: '#m-index',
  data: {
    list: []
  },

  mounted: function () {
    fetch('/api/indexlist').then(response => response.json())
    .then(res => {  
      this.list = res;
      
    })
    .catch(e => console.log("Oops, error", e));
  }
});


//banner
var mySwiper = new Swiper('#banner', {
		autoplay: 5000,//可选选项，自动滑动
		initialSlide :0,//初始索引
		direction : 'horizontal',//滑动方向水平|垂直vertical
		speed:300,//滑动速度，滑动开始到结束的时间
		autoplayDisableOnInteraction : false,//手滑后自动播放不停止
		autoplayStopOnLast : false,//如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）
		grabCursor : true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
		setWrapperSize :true,//开启这个设定会在Wrapper上添加等于slides相加的宽高，在对flexbox布局的支持不是很好的浏览器中可能需要用到
		virtualTranslate : false,//true：Swiper不会移动
		roundLengths : true,//true将slide的宽和高取整(四舍五入)以防止某些分辨率的屏幕上文字或边界(border)模糊。
		autoHeight: true,//true时，wrapper和container会随着当前slide的高度而发生变化
	    pagination : '.swiper-pagination',//分页
	    paginationHide :false,//true隐藏分页器
	    paginationType : 'bullets',//分页器样式类型:‘bullets’  圆点（默认）‘fraction’  分式 ‘progress’  进度条‘custom’ 自定义
	    paginationClickable :true,//true时，点击分页器的指示点分页器会控制Swiper切换
		lazyLoading : true,//true开启图片延迟加载
		lazyLoadingInPrevNext : true,//将延迟加载应用到最接近的slide的图片（前一个和后一个slide）。
		lazyLoadingInPrevNextAmount : 2,//默认为1，提前1个slide加载图片，例如切换到第三个slide时加载第四个slide里面的图片。
		loop : true,//循环
		freeMode : false
	});//mySwiper end



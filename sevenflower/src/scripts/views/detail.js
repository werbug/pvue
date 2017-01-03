var Vue = require('../lib/vue.js');
//var $ = require('../lib/zepto.min.js');
var Swiper = require('../lib/swiper.js');
var IScroll = require('../lib/iscroll-probe.js');

new Vue({
	el:'#m-list',
	data: {
		swiper: null,
		Index: 0,
		nIndex:0,
		nav: ['全部','生日' ,'爱情','祝福','玫瑰'],
		listtl: ['综合','价格','销量','新品'],
		list: []
	},
	methods:{
		changeTab: function(index){
			this.swiper.slideTo(index);
			this.Index = index;
		},
		changeNav: function(index){
			this.swiper.slideTo(index);
			this.nIndex = index;
		}
	},
	mounted: function () {
	    fetch('/api/list').then(response => response.json())
	    .then(res => {
	      var that = this;
	      that.list = res;
	      that.swiper = new Swiper('#index-swiper', {
	        loop: false,
	        onSlideChangeStart: function(swiper){
	          that.Index = swiper.activeIndex;
	        }
	      });
	      setTimeout(function () {
	        var myScroll = new IScroll('#index-scroll', {
	            probeType: 3,
	            mouseWheel: true
	        });
	
	        var scrollHeight = 35;
	
	        myScroll.scrollBy(0, -scrollHeight);
	
	        var head = $('.head img'),
	            topImgHasClass = head.hasClass('up');
	        var foot = $('.foot img'),
	            bottomImgHasClass = head.hasClass('down');
	        myScroll.on('scroll', function () {
	            var y = this.y,
	                maxY = this.maxScrollY - y;
	            if (y >= 0) {
	                !topImgHasClass && head.addClass('up');
	                return '';
	            }
	            if (maxY >= 0) {
	                !bottomImgHasClass && foot.addClass('down');
	                return '';
	            }
	        });
	
	        myScroll.on('scrollEnd', function () {
	            if (this.y >= -scrollHeight && this.y < 0) {
	                myScroll.scrollTo(0, -scrollHeight);
	                head.removeClass('up');
	            } else if (this.y >= 0) {
	                head.attr('src', '/images/ajax-loader.gif');
	                //TODO ajax下拉刷新数据
	
	                setTimeout(function () {
	                    myScroll.scrollTo(0, -scrollHeight);
	                    head.removeClass('up');
	                    head.attr('src', '/images/arrow.png');
	                }, 100);
	            }
	
	            var maxY = this.maxScrollY - this.y;
	            if (maxY > -scrollHeight && maxY < 0) {
	                var self = this;
	                myScroll.scrollTo(0, self.maxScrollY + scrollHeight);
	                foot.removeClass('down')
	            } else if (maxY >= 0) {
	                foot.attr('src', '/images/ajax-loader.gif');
	                //TODO ajax上拉加载数据
	                var self = this;
	
	                fetch('/api/listmore')
	                .then(response => response.json())
	                .then(res => {
	                  that.list = that.list.concat(res);
	
	                  myScroll.refresh();
	
	                  myScroll.scrollTo(0, self.y + scrollHeight);
	                  foot.removeClass('down');
	                  foot.attr('src', '/images/arrow.png');
	                })
	
	
	            }
	        })
	      }, 1000);
	    })
	    .catch(e => console.log("Oops, error", e));
	  }
});

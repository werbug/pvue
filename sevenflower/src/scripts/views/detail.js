var Vue = require('../lib/vue.js');
var Swiper = require('../lib/swiper.js');

new Vue({
	el:'#m-list',
	swiper: null,
	navIndex: 0,
	data: {
		nav: ['生日' ,'爱情','祝福','玫瑰'],
		listtl: ['综合','价格','销量','新品'],
		list: []
	},
	methods:{
		changeTab: function(index){
			this.swiper.slideTo(index);
			this.navIndex = index;
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
	          that.navIndex = swiper.activeIndex;
	        }
	      });
	    })
	    .catch(e => console.log("Oops, error", e));
	  }
});

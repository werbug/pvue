var Vue = require('../lib/vue.js');
var Swiper = require('../lib/swiper.js');

new Vue({
  el: '#m-index',
  data: {
    swiper: null,

    navIndex: 0,

    nav: ['足球现场', '足球生活', '足球美女'],

    list: []
  },

  methods: {
    changeTab: function (index) {
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

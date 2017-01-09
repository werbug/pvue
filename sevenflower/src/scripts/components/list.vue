<template>
	<div class="m-list" id="m-list">
	  <div class="l-section">
	  	<div class="l-nav">
		  	<ul>
		  		<li v-for="(item, index) in nav" @click="changeNav(index)"><b :class="{active: index==nIndex}">{{item}}</b></li>
		  	</ul>
		  </div>
	    <ul id="list">
	    	<li class="yo-ico" @click="changeTab(index)" :class="{active: index==Index}" v-for="(item, index) in listtl">{{item}}&nbsp;&#xe65e;</li>
	    </ul>
	    <div class="swiper-container" id="index-swiper">
	      <div class="swiper-wrapper">
	        <div class="swiper-slide" id="index-scroll">
	        	<div class="scroll-contair">
		        	<div class="head hide">
			          <img src="/images/arrow.png" width="40" height="40"/>
			          <span>下拉刷新...</span>
			        </div>
					    <ul id="shoplist">
					    	<li v-for="item in list">
					    		<router-link :to="'/detail'">
					    			<a><img :src="item.imgSrc"/></a>
					    		</router-link>
					    		<p>{{item.tip}}</p>
					    		<p>{{item.title}}</p>
					    		<ul class="buy">
					    			<li>{{item.price}}</li>
					    			<li class="yo-ico">&#xe611;</li>
					    			<li>购买</li>
					    		</ul>
					    	</li>
					    </ul>
					    <div class="foot hide">
			          <img src="/images/arrow.png" width="40" height="40"/>
			          <span>上拉加载更多...</span>
			        </div>
		        </div>
				  </div>
				  <div class="swiper-slide">slider2</div>
	        <div class="swiper-slide">slider3</div>
	        <div class="swiper-slide">slider4</div>
				</div>
	    </div>
	  </div>
	</div>
</template>

<script>
	var common = require('../utils/util.common.js');
	module.exports = {
		data: function() {
			return {
				swiper: null,
				Index: 0,
				nIndex:0,
				nav: ['全部','生日' ,'爱情','祝福','玫瑰'],
				listtl: ['综合','价格','销量','新品'],
				list: []
			}	
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
		      	common.isAllLoaded('index-scroll ul',function(){
		      		common.scroll(that);
		      	})
		        
		      }, 1000);
		    })
		    .catch(e => console.log("Oops, error", e));
		  }
	}
</script>
<template>
	<div id="m-details">
	<header>
		<router-link :to="'/'">
			<span class="yo-ico">&#xe640;</span>			
		</router-link>
		<a href="javascript:;" class="details_h_a">产品详情</a>
	</header>
	<section>
		<div id="bannerdetails" class="swiper-container">
			<!-- 内容 -->
			<div class="swiper-wrapper">
	
				<!--<div class="swiper-slide" v-for="item in ban">
					<img :src="item" alt="" class="swiper-lazy" />
				</div>-->
				<div class="swiper-slide swiper-lazy" data-background="/images/0720984201.jpg">	
					<div class="swiper-lazy-preloader"></div>
				</div>
				<div class="swiper-slide swiper-lazy" data-background="/images/0720984202.jpg">	
					<div class="swiper-lazy-preloader"></div>
				</div>
	
				<div class="swiper-slide swiper-lazy" data-background="/images/0720984203.jpg">	
					<div class="swiper-lazy-preloader"></div>
				</div>
	
				<div class="swiper-slide swiper-lazy" data-background="/images/0720984204.jpg">	
					<div class="swiper-lazy-preloader"></div>
				</div>
	
			</div>
	
			<!-- 分页 -->
			<div class="swiper-pagination"></div>
		</div><!--banner end-->
	
		<div id="con">
			<article>
				<ul>
					<li><span>名称:</span><b>{{introduce.name}}</b></li>
					<li><span>编号:</span><b>{{introduce.num}}</b></li>
					<li><span>价格:</span><del>{{introduce.price}}</del></li>
					<li><img src='/images/zhe_ico.png' alt="" /><strong>{{introduce.discount}}</strong></li>
					<li>新用户下单立减20元</li>
				</ul>
				<a href="javascript:;">加入购物车</a>
				<a href="javascript:;">立即购买</a>
				<div>
					<img src="/images/pro_tel.png" alt="" />
					<span>24小时热线：400-685-1177</span>
					<i>拨打咨询</i>
				</div>
			</article>
			<div id="information">
				<ul>
					<li v-for="item in information">
						<span>{{item.title}}</span>
						<p>{{item.content}}</p>					
					</li>
				</ul>
			</div><!--information end-->
			<article class="details_img">
				<figure>
					<img :src="item" alt="" v-for="item in details_img"/>
					
				</figure>
			</article>
			<article class="details_comment">
				<summary>评论</summary>
				<figure v-for="item in details_comment">
					<img :src="item.detailslogo" alt="" />
					<figcaption>
						<div>
							<span></span>
							<b>{{item.name}}</b>
						</div>
						<p>{{item.comment}}</p>
					</figcaption>
				</figure>
				
				<div class="details_comment_bottom">
					最近已有<span>21067</span>人评论
				</div>
				<div class="details_comment_help">
					<a href="javascript:;">帮助中心</a>
					<a href="javascript:;">配送服务</a>
				</div>
				
			</article>
		</div><!--#con end -->
		
	</section>
	<footer>
		<div>
			<ul>
				<li><img src="/images/pro_zixun.png" alt="" /><span>客服</span></li>
				<li><img src="/images/pro_cart.png" alt="" /><span>购物车</span></li>
				<li><img src="/images/pro_tel.png" alt="" /><span>电话咨询</span></li>
			</ul>
		</div>
		<div class="details_button">
			<b>加入购物车</b>
			<b>立即购买</b>
		</div>
	</footer>
</div>


</template>
<script>
var common =require('../utils/util.common.js');

module.exports = {
	data:function(){
		return {
			det:[],
			ban:null,
			introduce:[],
			information:null,
			details_img:null,
			details_comment:null,
			
			
		}
	},
	
	mounted:function(){
		common.mySwiper('bannerdetails');
	/*	var mySwiper = new Swiper('.swiper-container',{
			autoplay : 1000,
			autoplayDisableOnInteraction : false,
			})
			$('#btn1').click(function(){
			mySwiper.params.autoplay=200;
		})*/
		console.log(bannerdetails);
		fetch('/api/details').then(response => response.json())
		.then(res => {
			//console.log(res);
			//console.log(this.$route.params.id)
			this.det = res[this.$route.params.id];
			this.ban = this.det.ban;
			this.introduce = this.det.introduce;
			this.information = this.det.information;
			this.details_img = this.det.details_img;
			this.details_comment = this.det.details_comment;			
			
		})
		.catch(e => console.log("details error",e));
		
	}
	
	
	
}//module end
/*export default {
	data() {
		return {
			loading: false,
			post: null,
			error: null
		}
	},
	created() {
		// 组件创建完后获取数据，
		// 此时 data 已经被 observed 了
		this.fetchData()
	},
	watch: {
		// 如果路由有变化，会再次执行该方法
		'$route': 'fetchData'
	},
	methods: {
		fetchData() {
			this.error = this.post = null
			this.loading = true
				// replace getPost with your data fetching util / API wrapper
			getPost(this.$route.params.id, (err, post) => {
				this.loading = false
				if(err) {
					this.error = err.toString()
				} else {
					this.post = post
				}
			})
		}
	},
	mounted:function(){
		common.mySwiper();
		fetch('/api/details'+$route.params.id).then(response => response.json())
		.then(res => {
			console.log(res);
			
		})
		.catch(e => console.log("details error",e));
		
	}*/
		
//}
</script>
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
	
				<div class="swiper-slide swiper-lazy" data-background="/images/slide1.jpg">
					<img src="images/slide1.jpg" />
					<!-- 延迟加载 -->
					<div class="swiper-lazy-preloader"></div>
				</div>
				<div class="swiper-slide swiper-lazy" data-background="/images/slide2.jpg">
	
					<div class="swiper-lazy-preloader"></div>
				</div>
	
				<div class="swiper-slide swiper-lazy" data-background="/images/slide3.jpg">
	
					<div class="swiper-lazy-preloader"></div>
				</div>
	
				<div class="swiper-slide swiper-lazy" data-background="/images/slide4.jpg">
	
					<div class="swiper-lazy-preloader"></div>
				</div>
	
			</div>
	
			<!-- 分页 -->
			<div class="swiper-pagination"></div>
		</div><!--banner end-->
	
		<div id="con">
			<article>
				<ul>
					<li><span>名称:</span><b v-html="det.introduce"></b></li>
					<li><span>编号:</span><b>072098</b></li>
					<li><span>价格:</span><del>¥308</del></li>
					<li><img src='/images/zhe_ico.png' alt="" /><strong>¥288</strong></li>
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
					<li>
						<span>材料：</span>
						<p>9支红玫瑰</p>					
					</li>
					<li>
						<span>包装：</span>
						<p>粉色卷边纸多层精美包装</p>					
					</li>
					<li>
						<span>花语：</span>
						<p>对你最初的印象，久久难以忘怀。First impression of you is most lasting.</p>					
					</li>
					<li>
						<span>场合：</span>
						<p>生日,恋情,祝福,探望,道歉,接待</p>					
					</li>
				</ul>
			</div><!--information end-->
			<article class="details_img">
				<figure>
					<img src="/images/0720984201.jpg" alt="" />
					<img src="/images/0720984202.jpg" alt="" />
					<img src="/images/0720984203.jpg" alt="" />
					<img src="/images/0720984204.jpg" alt="" />
				</figure>
			</article>
			<article class="details_comment">
				<summary>评论</summary>
				<figure>
					<img src="/images/detailslogo.png" alt="" />
					<figcaption>
						<div>
							<span></span>
							<b>于</b>
						</div>
						<p>地址改了好几次，也送到了，很满意</p>
					</figcaption>
				</figure>
				<figure>
					<img src="/images/detailslogo.png" alt="" />
					<figcaption>
						<div>
							<span></span>
							<b>于</b>
						</div>
						<p>地址改了好几次，也送到了，很满意</p>
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
			
		}
	},
	mounted:function(){
		common.mySwiper('bannerdetails');
		fetch('/api/details').then(response => response.json())
		.then(res => {
			console.log(res);
			
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
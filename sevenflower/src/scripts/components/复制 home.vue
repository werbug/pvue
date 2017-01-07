<template id="">
	<div id = "contentWrapper">
		<div id="banner" class="swiper-container">
			<!-- 内容 -->
		    <div class="swiper-wrapper">
	
			    <div class="swiper-slide swiper-lazy" data-background="/images/m_banner1.jpg">
			    	
			    	<!-- 延迟加载 -->
			    	<div class="swiper-lazy-preloader"></div>
			    </div>
			    <div class="swiper-slide swiper-lazy" data-background="/images/m_banner2.jpg">
					
			    	<div class="swiper-lazy-preloader"></div>
			    </div>
				
				<div class="swiper-slide swiper-lazy" data-background="/images/m_banner3.jpg">
					
			    	<div class="swiper-lazy-preloader"></div>
			    </div>
				
				<div class="swiper-slide swiper-lazy" data-background="/images/m_banner4.jpg">
					
			    	<div class="swiper-lazy-preloader"></div>
			   </div>
			   
		    </div>
		    
			<!-- 分页 -->
		    <div class="swiper-pagination"></div>
		</div><!--banner end-->
		<nav>
			<ul>
				<li>
					<img alt="" src="./images/nav_cake.png" />
					<p>蛋糕</p>
				</li>
				<li>
					<img alt="" src="./images/nav_flower.png" />
					<p>鲜花</p>
				</li>
				<li>
					<img alt="" src="./images/nav_lmzh.png" />
					<p>浪漫组合</p>
				</li>
				<li>
					<img alt="" src="./images/nav_more.png" />
					<p>更多</p>
				</li>
			</ul>
			
			<div class="navlistwrapper">
				<div>
					<i class="yo-ico">&#xe601;</i>
					<b>订单去哪了</b>
				</div>
				<div>
					<i class="yo-ico">&#xe681;</i>
					<b>400-658-1777</b>
				</div>
				<div>
					<i class="yo-ico">&#xe602;</i>
					<b>在线咨询</b>
				</div>
				<div>
					<i class="yo-ico">&#xe617;</i>
					<b>QQ:138010778</b>
				</div>
			</div>
			
		</nav>
		
		<section>
			<div class="content_title">
				<span>A</span>
				<b>热卖推荐</b>
				<strong>更多>></strong>
			</div>
			
			<ul>
				<li v-for="item in list">
					<i><img :src="item.imgSrc" /></i>
					<b>{{item.title}}</b>
					<p>{{item.info}}</p>
					<div>
						<strong>{{item.price}}</strong>
						<i class="yo-ico cart">&#xe600;</i>
						<span>购买</span>
					</div>
					
				</li>
			</ul>
					
		</section>
	</div><!--contentWrapper end-->
</template>
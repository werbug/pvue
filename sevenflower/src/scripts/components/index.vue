<template>
	<div class="m-index" id="m-index" v-bind:class="{asideActive:show}">
		<div id="main">
			<header>
				<ul>
					<li>
						<a href="#">七彩鲜花</a>
					</li>
					<li class="yo-ico" v-on:click="show = !show">&#xe60b;</li>
				</ul>
			</header>
			<div id="search">
				<a href="javascript:;">在线咨询</a>
				<form>
					<input type="search" placeholder="点击输入搜索内容"/>
					<i class="yo-ico">&#xe634;</i>
				</form>
				
			</div>
			<router-view></router-view>
			<footer>
				<ul>
					<li v-on:click="changeNav(i)" v-bind:class="{active:i == navIndex}" v-for="(fn,i) in footerNav">
						<router-link :to="fn.router">
							<i class="yo-ico" v-html="fn.ico"></i>
							<b>{{fn.title}}</b>
						</router-link>				
					</li>
					
				</ul>
			</footer>
			<div class="main_after" :class="{main_afterActive:show}" @click="show = !show"></div>
		</div><!--main end-->
		<aside>
			<div>
				<a href="javascript:;">登录</a>
				<span>登录后享受更多优惠</span>
			</div>
			<ul>
				<li><a href="javascript:;"><i class="yo-ico">&#xe603;</i>商品分类</a></li>
				<li><a href="javascript:;"><i class="yo-ico">&#xe618;</i>订单查询</a></li>
				<li><a href="javascript:;"><i class="yo-ico">&#xe606;</i>订单付款</a></li>
				<li><a href="javascript:;"><i class="yo-ico">&#xe634;</i>常见问题</a></li>
				<li><a href="javascript:;"><i class="yo-ico">&#xe612;</i>最新优惠</a></li>
				<li><a href="javascript:;"><i class="yo-ico">&#xe607;</i>我的七彩</a></li>
				<li><a href="javascript:;"><i class="yo-ico">&#xe629;</i>回到首页</a></li>
			</ul>
		</aside>
    </div><!--m-index end-->
	
</template>

<script>
	module.exports = {
		data: function() {
			return {
				navIndex: 0,
				footerNav: [{
					router: '/',
					ico: '&#xe629;',
					title: '首页'
				}, {
					router: '/page',
					ico: '&#xe610;',
					title: '分类'
				}, {
					router: '/page',
					ico: '&#xe600;',
					title: '购物车'
				}, {
					router: '/my',
					ico: '&#xe607;',
					title: '我的七彩'
				}, {
					router: '/help',
					ico: '&#xe67e;',
					title: '帮助中心'
				}],
				show:false
			}
		},
		methods: {
		
			changeNav: function(index) {
				this.navIndex = index;
			}
			
		}
	}
</script>
<template>
	<div id="m-my">
		<header>
			用户登录
		</header>
		<section>
			<nav>
				<a href="javascript:;" :class="{myHeaderAActive:myHAActive}" @click="myHAActive = !myHAActive">手机号+密码登录</a>
				<a href="javascript:;" :class="{myHeaderAActive:!myHAActive}" @click="myHAActive = !myHAActive">手机号+验证码登录</a>
			</nav>
			<input placeholder="请输入手机号" />
			<input placeholder="请输入密码" class="inputTwo" :class="{myInputActive:!myHAActive}"/>
			<article :class="{myArticleActive:myHAActive}">
				<input placeholder="请输入验证码" />
				<span>获取验证码</span>
			</article>
			<span>一个月内免登录</span>
			<div>登录</div>
			<b>免费注册</b>
			<strong>找回密码</strong>
		</section>

	</div>
</template>

<script>
	module.exports = {
		data: function() {
			return {
				myHAActive:true
			}
		},
		methods:{
			
		}
	}
</script>
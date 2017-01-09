<template>
	<div class="m-help" id="m-help">
	  <div class="h-section">
	    <ul class="help">
	    	<li v-for="item in list">
	    		<a href="">{{item.titel}}</a>
	    		<ul class="way">
	    			<li>{{item.name1}}</li>
	    			<li>{{item.name2}}</li>
	    			<li>{{item.name3}}</li>
	    		</ul>
	    	</li>
	    </ul>
	    <ul class="contact">
	    	<li>服务热线：400-234-1556</li>
	    	<li>客服QQ：13956780034</li>
	    </ul>
	  </div>
	</div>
</template>
<script>
	module.exports = {
		data: function(){
			return {
				list:[
					{
						titel:"购物指南",
						name1:"购物流程",
						name2:"会员介绍",
						name3:"联系客服"
					},
					{
						titel:"配送方式",
						name1:"送货上门",
						name2:"门店自取",
						name3:"配送范围"
					},
					{
						titel:"支付方式",
						name1:"在线支付",
						name2:"银行汇款",
						name3:"货到付款"
					},
					{
						titel:"服务支持",
						name1:"售后服务",
						name2:"退款说明",
						name3:"取消订单"
					},
					{
						titel:"关注我们",
						name1:"微信公众号",
						name2:"七彩鲜花APP",
						name3:"七夕特别提示"
					},
					{
						titel:"联系我们",
						name1:"联系我们",
						name2:"",
						name3:""
					}
				]
			}
		}
	}
</script>
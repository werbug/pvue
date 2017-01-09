<template>
	<div class="m-cart" id="m-cart">
	  <div class="d-section">
	    <ul class="cartab">
	    	<li v-for="item in cartlist">
	    		<ul class="cartlist">
	    			<li><img :src="item.imgSrc"/></li>
	    			<li>
	    				<p>名称：{{item.name}}</p>
		    			<p>数量：<b class="change">-</b><b>{{item.num}}</b><b class="change">+</b></p>
		    			<p>附加：</p>
		    			<p>价格：<span>{{item.price}}</span></p>
	    			</li>
	    			<li><button>删除商品</button></li>
	    		</ul>
	    	</li>
	    </ul>
	    <div class="total">应付总金额：<span>468元</span></div>
	    <div class="btn"><button>继续购物</button><button>下一步</button></div>
	  </div>
	</div>
</template>
<script>
	module.exports = {
		data: function(){
			return {
				cartlist:[
					{
						imgSrc:"/images/cart01.jpg",
						name: "守护爱情",
						num: "1",
						price: "388元"
					},
					{
						imgSrc:"/images/cart01.jpg",
						name: "守护爱情",
						num: "1",
						price: "388元"
					},
					{
						imgSrc:"/images/cart01.jpg",
						name: "守护爱情",
						num: "1",
						price: "388元"
					}
				]
			}
		}
	}
</script>



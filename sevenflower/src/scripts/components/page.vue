<template>
	<div class="m-classify">
		
		<div class="c-section">
			<ul>
				<li v-for="item in list">
					<router-link :to="item.router">
						<a href="" class="link">
							<img :src="item.img"/>
						</a>
						<b>{{item.title}}</b>
					</router-link>
				</li>
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
						router: '/list',
						img:"images/class_dg.png",
						title: "蛋糕"
					},
					{
						router: '/list',
						img:"images/class_xh.png",
						title: "鲜花"
					},
					{
						router: '/list',
						img:"images/class_lmzh.png",
						title: "浪漫组合"
					},
					{
						router: '/list',
						img:"images/class_hongjiu.png",
						title: "红酒"
					},
					{
						router: '/list',
						img:"images/class_qkl.png",
						title: "巧克力"
					},
					{
						router: '/list',
						img:"images/class_kt.png",
						title: "卡通花束"
					},
					{
						router: '/list',
						img:"images/class_mrwj.png",
						title: "毛绒玩具"
					},
					{
						router: '/list',
						img:"images/class_syhl.png",
						title: "商业花篮"
					},
					{
						router: '/list',
						img:"images/class_gl.png",
						title: "果篮"
					},
				]
			}
		}
	}
</script>
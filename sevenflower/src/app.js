require('./styles/usage/app.scss');

var layout = require('./scripts/tpls/layout.string')
var common = require('./scripts/utils/util.common.js');
//展示
common.render(layout);

//require('./scripts/views/index.js');

//组件
import index from "./scripts/components/index.vue";
import home from "./scripts/components/home.vue";
import cart from "./scripts/components/cart.vue";
import help from "./scripts/components/help.vue";
import my from "./scripts/components/my.vue";
import details from "./scripts/components/details.vue";
import classify from "./scripts/components/classify.vue";
import list from "./scripts/components/list.vue"
//vue router 2
const routes = [{
	path:'/',
	component:index,
	children:[{
		path:'/',
		component:home
	},{
		path:'/classify',
		component:classify
	},{
		path:'/cart',
		component:cart
	},{
		path:'/help',
		component:help
	},{
		path: '/list',
		component: list
	}]
	
},{
	path:'/my',
	component:my
},{
	path:'/details/:id',
	component:details
}];

const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
});

const app = new Vue({
	router
}).$mount('#app');

const store = new Vuex.Store({
	state:{
		count : 0
	},
	 mutations: {
	    increment (state,n) {
	      state.count += n
	    }
	  }
})
store.commit('increment',10)

console.log(store.state.count)

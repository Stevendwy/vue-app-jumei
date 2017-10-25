import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getter from './getter.js'
import cart from './mudules/cart'
//import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

//存放组件中信息的状态
const state = {
	navState:0,
	activityLit:[],
	goodsList:[],
	tabHidden:true,
	prodectInfo:{},
	selectTab:'首页'
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getter,
	modules:{
		cart
	}
})
//export default new Router({
//routes: [
//  {
//    path: '/',
//    name: 'Hello',
//    component: HelloWorld
//  }
//]
//})

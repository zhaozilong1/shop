import Vue from 'vue'
import Vuex from 'vuex';
import router from "../router/index.js";
Vue.use(Vuex)
let vue = new Vue({
	router
})
const state = {
	isFixedNav: false,
	isModal: false,
	isActivityWrapper: false,
	navList: [{
			nav_id: 1,
			navbanner: 'A',
			picturepath: '',
			navslogan: '',
			innerHTML: '首页'
		},
		{
			nav_id: 2,
			navbanner: 'B',
			picturepath: 'https://wetradefx.oss-cn-shanghai.aliyuncs.com/integralImg/navigationImg/car.png',
			navslogan: '尊享奢华，体验速度与激情',
			innerHTML: '豪车名表'
		},
		{
			nav_id: 3,
			navbanner: 'C',
			picturepath: 'https://wetradefx.oss-cn-shanghai.aliyuncs.com/integralImg/navigationImg/electron.png',
			navslogan: '科技改变生活，一切尽在掌握',
			innerHTML: '电子数码'
		},
		{
			nav_id: 4,
			navbanner: 'D',
			picturepath: 'https://wetradefx.oss-cn-shanghai.aliyuncs.com/integralImg/navigationImg/jewelry.png',
			navslogan: '让投资货真价实',
			innerHTML: '黄金珠宝'
		},
		{
			nav_id: 5,
			navbanner: 'E',
			picturepath: 'https://wetradefx.oss-cn-shanghai.aliyuncs.com/integralImg/navigationImg/luggage.png',
			navslogan: '箱伴自由的脚步',
			innerHTML: '箱包眼镜'
		},
		{
			nav_id: 6,
			navbanner: 'F',
			picturepath: 'https://wetradefx.oss-cn-shanghai.aliyuncs.com/integralImg/navigationImg/power.png',
			navslogan: '精选好物，高档享受',
			innerHTML: '品质生活'   
		},
		{
			nav_id: 7,
			navbanner: 'H',
			picturepath: 'https://wetradefx.oss-cn-shanghai.aliyuncs.com/integralImg/navigationImg/beauty.png',
			navslogan: '美如天成，妆点靓丽生活',
			innerHTML: '美妆香氛'
		},
		{
			nav_id: 8,
			navbanner: 'I',
			picturepath: 'https://wetradefx.oss-cn-shanghai.aliyuncs.com/integralImg/navigationImg/baby.png',
			navslogan: '来WeTrade众汇 让宝宝的生活更有品质',
			innerHTML: '母婴专区'
		},
		{
			nav_id: 16,
			navbanner: 'J',
			picturepath: 'https://wetradefx.oss-cn-shanghai.aliyuncs.com/integralImg/navigationImg/doubleSeventh.png',
			navslogan: '七夕的惊喜',
			innerHTML: '情人节专区'
		},
	]
}
const actions = {
	getSubNav1({ commit } ,e){
		commit("getSubNav", e)
	},
	handleScroll1({ commit }){
		console.log(1)
		commit("handleScroll")
	},
	login1({ commit }){
		commit("login")
	}
}
const mutations = {
	getSubNav(state,e) {
		console.log(vue)
		if(e == 1){
			vue.$router.push({
				path: '/main'
			})
		}else{
			vue.$router.push({
				path: '/subNav/' + e
			})
		}
	},
	handleScroll(state) {
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		console.log(1)
		if(scrollTop >= 300) {
			state.isFixedNav = true;
			console.log(2)
		} else {
			state.isFixedNav = false;
			console.log(3)
		}
	},
	login(state) {
		state.isModal = true
	},
	noLogin(state) {
		state.isModal = false
	},
	activityWrapper(state) {
		state.isActivityWrapper = true
	},
	noActivityWrapper(state) {
		state.isActivityWrapper = false
	}
}

const store = new Vuex.Store({
	state,
	actions,
	mutations
})
export default store;
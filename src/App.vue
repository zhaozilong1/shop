<template>
  <div id="app">
    <header-vue></header-vue>
    <!--<main-vue></main-vue>-->
    <!--<subnav-vue></subnav-vue>-->
    <router-view></router-view>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
	import HeaderVue from './components/header/header.vue'
	import FooterVue from './components/footer/footer.vue'
	import MainVue from './components/main/main.vue'
	import subNavVue from './components/subNav/subNav.vue'
export default {
  name: 'App',
  components:{
  	'header-vue':HeaderVue,
  	'footer-vue':FooterVue,
		'main-vue':MainVue,
		'subnav-vue':subNavVue
  }
}
</script>

<style>

</style>

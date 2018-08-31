<template>
	<div>
		<banner-vue></banner-vue>
		<index-vue></index-vue>
	</div>
</template>

<script>
	import BannerVue from './banner/banner.vue'
	import IndexVue from './index/index.vue'
	export default {
		components:{
			'banner-vue':BannerVue,
			'index-vue':IndexVue
		}
	}
</script>

<style>
</style>
<template>
	<div class="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="https://wetradefx.oss-cn-shanghai.aliyuncs.com/integralImg/bannerImg/homeBanner4.jpg" alt=""></div>
				<div class="swiper-slide"><img src="https://wetradefx.oss-cn-shanghai.aliyuncs.com/integralImg/bannerImg/homeBanner2.jpg" alt=""></div>
				<div class="swiper-slide"><img src="https://wetradefx.oss-cn-shanghai.aliyuncs.com/integralImg/bannerImg/homeBanner3.jpg" alt=""></div>
				<div class="swiper-slide"><img src="https://wetradefx.oss-cn-shanghai.aliyuncs.com/integralImg/bannerImg/homeBanner1.jpg" alt=""></div>
			</div>
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
	
		</div>
	</div>

</template>

<script>
	import Swiper from './js/swiper.js'
	export default {
		 mounted() {
		    var swiper = new Swiper('.banner .swiper-container', {
                        loop: true,
                        autoplay: 3000,
                        effect: 'fade',
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                    });
		 }
	}
</script>

<style scoped="scoped">
	.banner{
	    width: 100%;
	    height: 410px;
	    margin-bottom: 86px;
	    min-width: 1200px;
	}
	.banner .swiper-container {
	    width: 100%;
	    height: 410px;
	    min-width: 1200px;
	}
	.banner .swiper-container .swiper-wrapper .swiper-slide img{
	    width: 100%;
	    height: 100%;
	    min-width: 1200px;
	}
</style>
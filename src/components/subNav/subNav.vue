<template>
	<div class="subnav-wrapper">
		<h2><span>全部商品></span><span>豪车</span></h2>
		<div class="banner">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<!--<div class="swiper-slide"><img src="./img/pic_banner.png" alt=""></div>-->
				</div>
				<!-- 如果需要导航按钮 -->
				<!--<div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>-->
			</div>
		</div>
		<div class="subnav-main">
			<div class="subnav-title">
				<div class="subnav-title-top">
					<img src="" alt=""><span>豪车</span>
				</div>
				<div class="subnav-title-btm">
					超越急速，放飞自我
				</div>
			</div>
			<div class="main-header subnav-header">
				<span>排序 :</span>
				<span class="clieach">积分排序 <s class="s"></s></span>
			</div>
			<div class="main-body">
				<!--=========================-->
				<div style="text-align: center;padding: 200px 0;margin-bottom: 200px;">努力加载中...</div>
			</div>
			<div class="clearfix"></div>
		</div>

	</div>
</template>

<script>
</script>

<style>
.subnav-wrapper{
    width: 100%;
    background: #f4f4f4;
    padding-top: 28px;
    padding-bottom: 109px;
    font-size: 19px;
}
.subnav-wrapper h2{
    width: 1200px;
    height: 82px;
    line-height: 82px;
    margin: 0 auto;
    box-sizing: border-box;
}
.subnav-wrapper h2 span:last-child{
    color: #696969;
    padding-left: 30px;
}

.subnav-wrapper .banner{
    width: 1200px;
    height: 410px;
    margin: 0 auto;
    margin-bottom: 21px;
}

.swiper-slide img{
    width: 100%;
    height: 410px;
}
.swiper-button-prev{
    left: 10px;
}

.swiper-button-next{
    right: 10px;
}
.subnav-main{
    width: 1200px;
    background: white;
    margin: 0 auto;
    padding: 0 55px;
    box-sizing: border-box;
}


.subnav-title{
    width: 100%;
    height: 120px;
    text-align: center;
    padding-top: 32px;
    box-sizing: border-box;
}
.subnav-title .subnav-title-top span{
    font-size: 37px;
}
.subnav-title .subnav-title-top img{
    padding-right: 20px;
    /*vertical-align: middle;*/
}
.subnav-title .subnav-title-btm{
    font-size: 16px;
    color: #a2a2a2;
}



.subnav-wrapper .subnav-main .subnav-header{
    width: 100%;
    height: 69px;
    border-bottom: 1px dotted #eee;
    line-height: 69px;
}
.subnav-wrapper .subnav-main .subnav-header span{
    margin-right: 54px;
}
.subnav-wrapper .subnav-main .subnav-header span:last-child{
    color: #ed6c45;
    cursor: pointer;
}
.subnav-wrapper .subnav-main .subnav-header span:last-child .s{
    display: inline-block;
    width: 16px;
    height: 20px;
    position: relative;
}
.subnav-wrapper .subnav-main .subnav-header span:last-child .s:after{
    content:"";
    width:0;
    height: 0;
    border: 5px solid transparent;
    position: absolute;
    left: 0;
    top: 3px;
    border-bottom-color: #ed6c45;
}
.subnav-wrapper .subnav-main .subnav-header span:last-child .s:before{
    content:"";
    width:0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: #111;
    position: absolute;
    left: 0;
    top: 15px;
}
.subnav-wrapper .subnav-main .subnav-header span:last-child .ss:after{
    content:"";
    width:0;
    height: 0;
    border: 5px solid transparent;
    position: absolute;
    left: 0;
    top: 3px;
    border-bottom-color: #111;
}
.subnav-wrapper .subnav-main .subnav-header span:last-child .ss:before{
    content:"";
    width:0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: #ed6c45;
    position: absolute;
    left: 0;
    top: 15px;
}






.main-body{
    width: 100%;
    float: left;
}
.main-body .main-a{
    padding-top: 36px;
    width: 22%;
    margin-right: 4%;
    float: left;
    cursor: pointer;
    font-size: 19px;
}
.main-body .main-a:nth-child(4n){
    margin-right: 0;
}
.main-body .main-a .main-a-img
,.main-body .main-a .main-a-img img{
    width: 258px;
    height: 259px;
}

.main-body .main-a .main-a-txt{
    text-align: center;
}

.main-body .main-a .main-a-txt .main-a-txt-hot{
    padding-top: 15px;
    height: 24px;
}
.main-body .main-a .main-a-txt .main-a-txt-hot span{
    display: inline-block;
    width: 50px;
    height: 24px;
    background: #e84e2a;
    color: white;
    line-height: 24px;
    font-size: 18px;
}
.main-body .main-a .main-a-txt .main-a-txt-title{
    color: #111;
    font-weight: bold;
    padding-top: 8px;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
}
.main-body .main-a .main-a-txt .main-a-txt-jf{
    color: #ee6d46;
    padding-top: 12px;
}

.main-body .main-a .main-a-txt .main-a-txt-x{
    width: 200px;
    height: 1px;
    background: #d3d3d3;
    margin: 15px auto;
}
.main-a-txt-subTitle{
    color: #9e9e9e;
    padding-bottom: 32px;
}
</style>
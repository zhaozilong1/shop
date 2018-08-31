<template>
	<div class="">
		<div class="brand">
			<div class="brand-center">
				<h2 class="goods-title"><b>品牌旗舰店</b><span>来WeTrade众汇享受高品质生活</span></h2>
				<div class="brand-main">
					<div class="brand-main-left">
						<div class="brand-main-left-a" pId="1apple"><img src="./img/apple.png" alt=""></div>
						<div class="brand-main-left-a" pId="1dyson"><img src="./img/dyson.png" alt=""></div>
					</div>
					<div class="brand-main-right">
						<div class="brand-main-right-a" pId="1iwc"><img src="./img/iwc.png" alt=""></div>
						<div class="brand-main-right-a" pId="1icbc"><img src="./img/icbc.png" alt=""></div>
					</div>
				</div>
			</div>
		</div>
		<!--新款-->
		<div class="newStyle">
			<div class="newStyle-center">
				<h2 class="goods-title"><b>新款换不停</b><span>即刻兑换属于您的最新潮流</span></h2>
				<ul class="newStyle-main">
					<!--==========================-->
				</ul>
			</div>
		</div>
		<!--人气-->
		<div class="recommend">
			<div class="recommend-center">
				<h2 class="goods-title"><b>人气推荐</b><span>最好的礼品都在这里等您</span> <s></s></h2>
				<div class="recommend-main">
					<div class="recommend-main-left">
						<!--===================================-->
					</div>
					<div class="recommend-main-right">
						<!--================================-->
					</div>
				</div>
			</div>
		</div>
		<!--男士-->
		<div class="menZone">
			<div class="menZone-center">
				<h2 class="goods-title"><b>品牌旗舰店</b><span>尊享男士魅力</span><s></s></h2>
				<div class="menZone-main">
					<div class="menZone-main-top">
						<div class="menZone-main-top-a"><img src="./img/man.jpg" alt=""></div>
					</div>
					<div class="menZone-main-btm">
						<!--===================================================-->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
.brand
,.newStyle
,.recommend
,.menZone{
    width: 100%;
    min-width: 1200px;
}
.brand .brand-center
,.newStyle .newStyle-center
,.recommend .recommend-center
,.menZone .menZone-center{
    width: 1195px;
    margin: 0 auto;
}
.brand .brand-center h2
,.newStyle .newStyle-center h2
,.recommend .recommend-center h2
,.menZone .menZone-center h2{
    width: 100%;
    height: 76px;
}
.brand .brand-center h2 b
,.newStyle .newStyle-center h2 b
,.recommend .recommend-center h2 b
,.menZone .menZone-center h2 b{
    font-size: 39px;
    font-weight: bold;
    padding-left: 13px;
    padding-right: 22px;
}
.brand .brand-center h2 span
,.newStyle .newStyle-center h2 span
,.recommend .recommend-center h2 span
,.menZone .menZone-center h2 span{
    font-size: 19px;
}
.recommend .recommend-center h2 s
,.menZone .menZone-center h2 s{
    float: right;
    display: block;
    padding: 30px 50px 0 0;
    cursor: pointer;
}
.brand .brand-center .brand-main
,.newStyle .newStyle-center .newStyle-main
,.recommend .recommend-center .recommend-main {
    display: flex;
    padding-bottom: 92px;
}
.brand .brand-center .brand-main .brand-main-left{
    display: flex;
    justify-content: space-between;
    flex: 1;
}
.brand .brand-center .brand-main .brand-main-left-a{
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
    cursor: pointer;
    width: 384px;
    height: 385px;
}
.brand .brand-center .brand-main .brand-main-left-a:hover{
    box-shadow: 5px 5px 15px #eee;
    transform: translate(-5px,-5px);
}
.brand .brand-center .brand-main .brand-main-left .brand-main-left-a img{
    width: 384px;
    height: 385px;
}
.brand .brand-center .brand-main .brand-main-right-a{
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
    cursor: pointer;
    width: 350px;
    height: 182px;
}
.brand .brand-center .brand-main .brand-main-right-a:hover{
    box-shadow: 5px 5px 15px #eee;
    transform: translate(-5px,-5px);
}
.brand .brand-center .brand-main .brand-main-right .brand-main-right-a img{
    width: 350px;
    height: 182px;
}
.brand .brand-center .brand-main .brand-main-right{
    width: 350px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    margin-left: 40px;
}
.newStyle .newStyle-center .newStyle-main{
    justify-content: space-between;
 }
.newStyle .newStyle-center .newStyle-main .newStyle-main-a{
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
    cursor: pointer;
}
.newStyle .newStyle-center .newStyle-main .newStyle-main-a .newStyle-main-a-img{
    padding: 17px 18px 67px 19px;
}
.newStyle .newStyle-center .newStyle-main .newStyle-main-a .newStyle-main-a-img img{
    width: 209px;
    height: 211px;
}
.newStyle .newStyle-center .newStyle-main .newStyle-main-a .newStyle-main-a-txt{
    text-align: center;
}
.newStyle .newStyle-center .newStyle-main .newStyle-main-a .newStyle-main-a-txt h3{
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 27px;
}
.newStyle .newStyle-center .newStyle-main .newStyle-main-a .newStyle-main-a-txt p{
    font-size: 17px;
    color: #ed6d46;
    padding-bottom: 27px;
}
.newStyle .newStyle-center .newStyle-main .newStyle-main-a:hover{
    background: #f9f2ee;
}
.recommend{
    background: #f4e3db;
    padding-top: 88px;
    margin-bottom: 73px;
}
.recommend .recommend-center .recommend-main .recommend-main-left .recommend-main-left-a{
    margin-right: 13px;
    cursor: pointer;
}
.recommend .recommend-center .recommend-main .recommend-main-left .recommend-main-left-a .recommend-main-left-img{
    background: white;
}
.recommend .recommend-center .recommend-main .recommend-main-left .recommend-main-left-a:hover .recommend-main-left-img img{
    transform: scale(1.05);
}
.recommend .recommend-center .recommend-main .recommend-main-left .recommend-main-left-a .recommend-main-left-img
,.recommend .recommend-center .recommend-main .recommend-main-left .recommend-main-left-a .recommend-main-left-img img{
    width: 430px;
    height: 345px;
    overflow: hidden;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}
.recommend .recommend-center .recommend-main .recommend-main-left .recommend-main-left-a .recommend-main-left-img
,.recommend .recommend-center .recommend-main .recommend-main-right .recommend-main-right-top .recommend-main-right-a .recommend-main-right-img{
    margin-bottom: 3px;
}
.recommend .recommend-center .recommend-main .recommend-main-left .recommend-main-left-a .recommend-main-left-txt{
    width: 430px;
    padding-top: 32px;
    padding-bottom: 28px;
    text-align: center;
    background: white;
}
.recommend .recommend-center .recommend-main .recommend-main-left .recommend-main-left-a .recommend-main-left-txt img{
    padding-bottom: 8px;
}
.recommend .recommend-center .recommend-main .recommend-main-left .recommend-main-left-a .recommend-main-left-txt h3{
    font-size: 19px;
    font-weight: bold;
    color: #000;
    padding-bottom: 13px;
}
.recommend .recommend-center .recommend-main .recommend-main-left .recommend-main-left-a .recommend-main-left-txt p{
    font-size: 20px;
    color: #ed6d46;
}
.recommend .recommend-center .recommend-main .recommend-main-right{
    flex: 1;
}
.recommend .recommend-center .recommend-main .recommend-main-right .recommend-main-right-top{
    display: flex;
    justify-content: space-between;
}
.recommend .recommend-center .recommend-main .recommend-main-right .recommend-main-right-top:first-child{
    margin-bottom: 7px;
}
.recommend .recommend-center .recommend-main .recommend-main-right .recommend-main-right-top .recommend-main-right-a{
    cursor: pointer;
}
.recommend .recommend-center .recommend-main .recommend-main-right .recommend-main-right-top .recommend-main-right-a:hover .recommend-main-right-img img{
    transform: scale(1.05);
}
.recommend .recommend-center .recommend-main .recommend-main-right .recommend-main-right-top .recommend-main-right-a .recommend-main-right-img
,.recommend .recommend-center .recommend-main .recommend-main-right .recommend-main-right-top .recommend-main-right-a .recommend-main-right-img img{
    width: 243px;
    height: 180px;
    overflow: hidden;
    background: #fff;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}
.recommend .recommend-center .recommend-main .recommend-main-right .recommend-main-right-top .recommend-main-right-a .recommend-main-right-txt{
    width: 243px;
    padding-top: 16px;
    padding-bottom: 10px;
    background: white;
    text-align: center;
}
.recommend .recommend-center .recommend-main .recommend-main-right .recommend-main-right-top .recommend-main-right-a .recommend-main-right-txt h3{
    padding-bottom: 4px;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    color: #000;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
}
.recommend .recommend-center .recommend-main .recommend-main-right .recommend-main-right-top .recommend-main-right-a .recommend-main-right-txt p{
    font-size: 14px;
    color: #ed6d46;
}



.menZone .menZone-center .menZone-main .menZone-main-top .menZone-main-top-a{
    width: 100%;
    height: 384px;
    margin-bottom: 55px;
}
.menZone .menZone-center .menZone-main .menZone-main-top .menZone-main-top-a img{
    width: 100%;
    height: 100%;
}
.menZone .menZone-center .menZone-main .menZone-main-btm{
    display: flex;
    justify-content: space-between;
    padding-bottom: 80px;
}

.menZone .menZone-center .menZone-main .menZone-main-btm .menZone-main-btm-a{
    cursor: pointer;
}
.menZone .menZone-center .menZone-main .menZone-main-btm .menZone-main-btm-a:hover .menZone-main-btm-img img{
    transform: scale(1.05);
}
.menZone .menZone-center .menZone-main .menZone-main-btm .menZone-main-btm-a .menZone-main-btm-img
,.menZone .menZone-center .menZone-main .menZone-main-btm .menZone-main-btm-a .menZone-main-btm-img img{
    width: 278px;
    height: 278px;
    overflow: hidden;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
}
.menZone .menZone-center .menZone-main .menZone-main-btm .menZone-main-btm-a .menZone-main-btm-img{
    margin-bottom: 9px;
    background: #eee;
}

.menZone .menZone-center .menZone-main .menZone-main-btm .menZone-main-btm-a .menZone-main-btm-txt{
    text-align: center;
}
.menZone .menZone-center .menZone-main .menZone-main-btm .menZone-main-btm-a .menZone-main-btm-txt .menZone-main-btm-txt-hot{
    height: 24px;
}
.menZone .menZone-center .menZone-main .menZone-main-btm .menZone-main-btm-a .menZone-main-btm-txt .menZone-main-btm-txt-hot span{
    display: none;
    width: 50px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    color: #fff;
    font-size: 17px;
}
.menZone .menZone-center .menZone-main .menZone-main-btm .menZone-main-btm-a .menZone-main-btm-txt .menZone-main-btm-txt-hot span:nth-child(1){
    background: #e84e2a;
}
.menZone .menZone-center .menZone-main .menZone-main-btm .menZone-main-btm-a .menZone-main-btm-txt .menZone-main-btm-txt-hot span:nth-child(2){
    background: #ffa025;
}
.menZone .menZone-center .menZone-main .menZone-main-btm .menZone-main-btm-a .menZone-main-btm-txt .menZone-main-btm-txt-hot span.show{
    display: inline-block;
}
.menZone .menZone-center .menZone-main .menZone-main-btm .menZone-main-btm-a .menZone-main-btm-txt h3{
    font-size: 16px;
    white-space:nowrap;
    font-weight: bold;
    color: #000;
    padding: 5px 0 13px 0;
}
.menZone .menZone-center .menZone-main .menZone-main-btm .menZone-main-btm-a .menZone-main-btm-txt .menZone-main-btm-txt-jf{
    font-size: 14px;
    color: #ed6d47;
}
.menZone .menZone-center .menZone-main .menZone-main-btm .menZone-main-btm-a .menZone-main-btm-txt .menZone-main-btm-txt-x{
    width: 200px;
    height: 2px;
    background: #d3d3d3;
    margin: 15px auto;
}
.menZone .menZone-center .menZone-main .menZone-main-btm .menZone-main-btm-a .menZone-main-btm-txt .menZone-main-btm-txt-ry{
    color: #9e9e9e;
}
</style>
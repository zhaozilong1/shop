<template>
	<div class="">
		<div :class="{activityWrapper:true,show:$store.state.isActivityWrapper}">
			<div class="activity">
				<div class="activity-header">
					<h3>活动规则</h3><span><img src="./img/integral-x.png" class="activity-x" alt=""></span>
				</div>
				<div class="activity-body">
					<div>
						<h4>交易积分:</h4>
						<p>外汇货币对交易每一个标准手=1积分</p>
						<p>黄金交易每一个标准手=1.2积分</p>
						<p>原油交易每一个标准手=1.5积分</p>
						<p>白银交易每一个标准手=2积分</p>
					</div>
					<div>
						<h4>活动条款</h4>
						<p>* 客户无需报名，默认直接参加，不限制账户类型</p>
						<p>* 此活动仅限大中华区客户参加</p>
						<p>* 同名附加账户资金和手数合并统计</p>
						<p>* 换的奖品发放时间为申请后的20个工作日之内</p>
						<p>* 活动期间，客户可在积分后台随时进行兑换，兑换礼品之后，相应积分会减去</p>
						<p>* 手数以平仓为准，所计算订单的开仓时间从平台时间2月28日22:00开始计算</p>
						<p>* 指数产品不参与兑换</p>
						<p>* 豪车礼品的价格为裸车价格，不含税，牌照，4s店加价等其他额外费用</p>
						<p>* 由于积分产品为第三方（或官网）直接发货，本身为非现金额外回馈，无法进行退货服务。除商品本身存在质量问题以外，恕不允许换货。如所兑换的回馈项目本身有瑕疵时，签收本人可在签收日起的 7天内发送邮件至gift@WeTradefx.net，超过7天将不予受理。WeTrade众汇在换货过程中会全心全意协助沟通，但具体品牌商是否同意更换，我公司无法100%保证。请妥善保存物品的所有说明书和各项相关文件。</p>
						<p>* 本次活动最终解释权归WeTrade众汇所有</p>
					</div>
				</div>
			</div>
		</div>
		<div :class="{modal:true,show:$store.state.isModal}">
			<div class="modal-content">
				<div class="modal-header">
					<span>&times;</span>
					<h4 class="modal-title">登录积分商城</h4>
				</div>
				<div class="modal-body">
					<form action="" id="loginForm" style="position:relative;">
						<div id="loginaaaa" style="height:220px;width:110%;background-color:#fff;text-aligin:center;display:none;position:absolute;left:-5px;top:0;">
							正在努力登陆！
						</div>
						<div class="input-box">
							<span><img src="./img/button_me.png" alt=""></span>
							<input type="text" placeholder="账号" class="user" name="username" autocomplete="off">
						</div>
						<div class="input-box">
							<span><img src="./img/padd.png" alt=""></span>
							<input type="password" placeholder="密码" class="pass" name="password" autocomplete="off">
						</div>
						<div class="input-box verification-box">
							<input type="text" placeholder="验证码" class="verification" name="imagecode" autocomplete="off">
							<span id="valicode"><img src="http://192.168.1.36:8080/front/valicode" alt=""></span>
						</div>
					</form>
					<div class="login-box">
						<button type="button" class="login-btn" id="login-btn">登  录</button>
					</div>
				</div>
				<div class="modal-footer">
					<a href="http://crm.wetradefx.net/index/login/#/signup/client/" target="view_window">没有账号？点击注册</a>
				</div>
			</div>
		</div>
		<div :class="{fixedNav:true,top0:isFixedNav}">
			<div class="fixedNav-main">
				<div class="fixedNav-logo">
					<a href="http://www.wetradefx.net/" target="view_window"><img src="./img/logo.png" alt="" /></a>
				</div>
				<ul class="fixedNav-nav">
					<li v-for="item,index in navList" :nav_id="item.nav_id">{{item.innerHTML}}</li>
				</ul>
				<div class="fixedNav-right">
					<div class="fixedNav-input">
						<input type="search" class="input-search" placeholder="iPhone X">
					</div>
					<div class="search-img" id="fixedNav-search-img">
						<img src="./img/button_search.png" alt="">
					</div>
					<div class="personage-img">
						<img src="./img/button_me.png" id="personage-btn" alt="">
					</div>
					<div class="shopping-img">
						<a href="javascript:;" id="shopping2">
							<p>0</p><img src="./img/button_ShoppingCart.png" alt=""></a>
					</div>
				</div>
			</div>
		</div>
		<!--header信息-->
		<header>
			<div class="head">
				<div class="head-top">
					<div class="head-top-left">
						<a href="http://www.wetradefx.net/" target="view_window">WeTrade官网</a>
						<a href="http://www.wetradefx.net/cn/messages/announcement/" target="view_window">
							<span>
                               <img src="./img/xlb.gif" alt="" width="15" height="15" style="margin-right: 10px;" >
                           </span>
							<b>公告:wetrade众汇关...</b>
						</a>
					</div>
					<div class="head-top-right">
						<a href="javascript:;">登录</a>
						<a href="http://crm.wetradefx.net/index/login/#/signup/client/" id="zhuce" target="view_window">注册</a>
						<a href="javascript:;" id="geren" style="display:none;" target="view_window">我的账户</a>
						<a href="javascript:;" class="activity-btn" @click="">活动规则</a>
						<a href="javascript:;" id="remove-btn">退出</a>
					</div>
				</div>
			</div>
			<div class="head-btm">
				<div class="head-btm-head">
					<div class="head-btm-logo">
						<a href="http://www.wetradefx.net/" target="view_window"><img src="./img/head-logo.png" alt=""></a>
					</div>
					<div class="head-btm-search">
						<input type="search" class="input-search" id="input-search" placeholder="iPhone X">
						<div class="search-img">
							<img src="./img/button_search.png" id="search-img-btn" alt="">
						</div>
						<div class="shopping-img">
							<p>0</p>
							<img src="./img/button_ShoppingCart.png" class="shopping-img-btn" id="shopping1" alt="">
						</div>
					</div>
				</div>
				<nav>
					<ul class="nav">
						<li v-for="item,index in navList" :nav_id="item.nav_id" @click="$store.dispatch('getSubNav1',item.nav_id)">{{item.innerHTML}}</li>
					</ul>
				</nav>
			</div>
		</header>
	</div>
</template>

<script>
	import { mapState,mapMutations } from 'vuex';
	export default {
		data(){
			return {
				isFixedNav:false
			}
		},
		mounted() {
			window.addEventListener('scroll',this.handleScroll);
		},
		mtehods:{
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				console.log(1)
				if(scrollTop >= 300) {
					this.isFixedNav = true;
					console.log(2)
				} else {
					this.isFixedNav = false;
					console.log(3)
				}
			}
		},
		computed: mapState([
				'isModal',
				'isActivityWrapper',
				'navList'
				])
	}
</script>

<style scoped="scoped">
	.activity {
		width: 1099px;
		height: 684px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background: url("./img/integral.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	
	.activity h3 {
		margin: 0;
		text-align: center;
		line-height: 120px;
		font-size: 19px;
		color: #ed6c45;
	}
	
	.activity span {
		position: absolute;
		right: 0;
		top: 0;
	}
	
	.activity span img {
		cursor: pointer;
	}
	
	.activity-body {
		padding: 8px 40px;
		display: flex;
		justify-content: space-between;
	}
	
	.activity-body>div {
		flex: 1;
	}
	
	.activity-body>div h4 {
		border-left: 8px solid #e96364;
		padding-left: 8px;
		margin-bottom: 25px;
		font-size: 19px;
	}
	
	.activity-body>div h5 {
		font-size: 19px;
	}
	
	.activity-body>div p {
		font-size: 16px;
		margin-bottom: 5px;
	}
	
	.nbsp {
		height: 30px;
	}
	
	.modal,
	.integral-wrapper,
	.activityWrapper {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .5);
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 1000000;
		display: none;
	}
	
	.modal .modal-content {
		width: 603px;
		height: 500px;
		background-image: url("./img/login-b.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	#remove-btn{
		display: none;
	}
	.modal .modal-content .modal-header {
		height: 100px;
	}
	
	.modal .modal-content .modal-header h4 {
		text-align: center;
		line-height: 100px;
		font-size: 19px;
	}
	
	.modal .modal-content .modal-header span {
		display: block;
		position: absolute;
		top: 0;
		right: 30px;
		font-size: 19px;
		cursor: pointer;
	}
	
	.modal .modal-content .modal-body {
		padding: 0 50px;
	}
	
	.modal .modal-content .modal-body .input-box {
		width: 100%;
		height: 50px;
		border: 1px solid #111;
		margin-bottom: 30px;
	}
	
	.modal .modal-content .modal-body .verification-box {
		border: 0;
		display: flex;
	}
	
	.modal .modal-content .modal-body .input-box span {
		display: inline-block;
		width: 9%;
		height: 50px;
		text-align: center;
	}
	
	.modal .modal-content .modal-body .input-box span img {
		padding-top: 10px;
	}
	
	.modal .modal-content .modal-body .input-box span img:nth-child(1) {
		padding-top: 10px;
		height: 30px;
	}
	
	.modal .modal-content .modal-body .input-box .user,
	.modal .modal-content .modal-body .input-box .pass {
		box-sizing: border-box;
		float: right;
		width: 90%;
		height: 48px;
		outline: none;
		padding-left: 10px;
		font-size: 19px;
		border: 0;
	}
	
	.modal .modal-content .modal-body .input-box .verification {
		width: 50%;
		height: 50px;
		outline: none;
		padding-left: 10px;
		border: 1px solid #111;
		font-size: 19px;
	}
	
	.modal .modal-content .modal-body .verification-box span {
		display: block;
		margin-left: 50px;
	}
	
	.modal .modal-content .modal-body .verification-box span img {
		padding: 0;
		width: 100px;
		height: 50px;
	}
	
	.login-box {
		width: 100%;
		text-align: center;
	}
	
	.login-box .login-btn {
		width: 80%;
		height: 50px;
		background-image: url("./img/login-btn.png");
		background-repeat: no-repeat;
		background-size: 100%;
		outline: none;
		border: 0;
		font-size: 19px;
		color: white;
		cursor: pointer;
	}
	
	.modal .modal-content .modal-footer {
		width: 100%;
		text-align: center;
		margin-top: 30px;
		height: 60px;
		line-height: 60px;
	}
	
	.modal .modal-content .modal-footer a {
		text-decoration: underline;
	}
	
	.integral {
		width: 1100px;
		height: 684px;
		background: url("./img/integral.png") no-repeat;
		background-size: 100% 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		border-radius: 8px;
		overflow: hidden;
		transform: translate(-50%, -50%);
	}
	
	.integral-header {
		width: 100%;
		height: 120px;
		background: #f9ded7;
		text-align: center;
		font-size: 19px;
		font-weight: bold;
		line-height: 120px;
		color: #ec6c45;
	}
	
	.integral-header h3 {}
	
	.integral-header span img {
		position: absolute;
		right: 0;
		top: 0;
		cursor: pointer;
	}
	
	.integral-body {
		padding: 0 58px;
	}
	
	.integral-body table {
		width: 100%;
	}
	
	.integral-body table thead {
		width: 100%;
	}
	
	.integral-body table thead tr {
		width: 984px;
		height: 41px;
		padding-top: 21px;
		line-height: 41px;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #111;
		text-align: center;
	}
	
	.integral-body table thead tr th {
		flex: 1;
	}
	
	.integral-body table tbody {
		width: 100%;
	}
	
	.integral-body table tbody tr {
		width: 984px;
		height: 60px;
		line-height: 60px;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #111;
	}
	
	.integral-body table tbody tr td {
		flex: 1;
		text-align: center;
	}
	
	.integral-footer {}
	
	header {
		width: 100%;
		box-shadow: 0 5px 10px #eee;
		-moz-box-shadow: 0 5px 10px #eee;
		-webkit-box-shadow: 0 5px 10px #eee;
		min-width: 1200px;
	}
	
	header .head {
		width: 100%;
		height: 41px;
		background: #333;
		min-width: 1200px;
	}
	
	header .head .head-top {
		width: 1195px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
	}
	
	header .head .head-top .head-top-left {
		line-height: 41px;
	}
	
	header .head .head-top .head-top-left a {
		padding-left: 19px;
		padding-right: 34px;
		font-size: 19px;
		color: #c0c0c0;
	}
	
	header .head .head-top .head-top-left b {
		font-size: 19px;
		color: #ed6c45;
		text-decoration: underline;
		cursor: pointer;
	}
	
	header .head .head-top .head-top-right {
		padding-right: 38px;
	}
	
	header .head .head-top .head-top-right a {
		border-right: 1px solid #c0c0c0;
		font-size: 19px;
		color: #c0c0c0;
		padding: 0 6px;
	}
	
	header .head .head-top .head-top-right a:last-child {
		border-right: 0;
	}
	
	header .head .head-top .head-top-right a.activity-btn {
		border-right: 0;
	}
	
	header .head-btm {
		width: 1195px;
		height: 222px;
		margin: 0 auto;
	}
	
	header .head-btm .head-btm-head {
		display: flex;
		justify-content: center;
	}
	
	header .head-btm .head-btm-head .head-btm-logo a img {
		width: 95%;
	}
	
	header .head-btm .head-btm-head .head-btm-logo {
		padding-left: 375px;
		padding-top: 35px;
	}
	
	header .head-btm .head-btm-head .head-btm-jf {
		padding-top: 54px;
		padding-left: 24px;
	}
	
	header .head-btm .head-btm-head .head-btm-search {
		display: flex;
		padding-top: 76px;
		padding-left: 58px;
	}
	
	header .head-btm .head-btm-head .head-btm-search .input-search {
		width: 171px;
		height: 39px;
		border: 0;
		border-bottom: 1px solid #EE734D;
		margin-right: 5px;
		padding-left: 7px;
		outline: none;
	}
	
	header .head-btm .head-btm-head .head-btm-search .search-img {
		padding-top: 3px;
		padding-right: 15px;
		cursor: pointer;
	}
	
	header .head-btm .head-btm-head .head-btm-search .search-img img {
		width: 30px;
		height: 35px;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img {
		cursor: pointer;
		position: relative;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box {
		width: 420px;
		height: 418px;
		border: 2px solid #f0997e;
		position: absolute;
		right: 0;
		top: 50px;
		z-index: 1000;
		background: white;
		cursor: auto;
		display: none;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img p {
		position: absolute;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		text-align: center;
		line-height: 20px;
		right: -10px;
		top: -10px;
		background: #F07F74;
		color: white;
		z-index: 10;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box.active {
		display: block;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box:after {
		content: "";
		width: 12px;
		height: 12px;
		border-top: 2px solid #f0997e;
		border-left: 2px solid #f0997e;
		background: white;
		transform: rotate(45deg);
		position: absolute;
		right: 15px;
		top: -9px;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-top {
		width: 420px;
		height: 326px;
		overflow-y: scroll;
		padding: 20px;
		box-sizing: border-box;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-top .shopping-box-top-shop {
		width: 374px;
		height: 92px;
		display: flex;
		justify-content: space-between;
		padding-bottom: 28px;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-top .shopping-box-top-shop .shopping-box-top-shop-img,
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-top .shopping-box-top-shop .shopping-box-top-shop-img img {
		width: 92px;
		height: 92px;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-top .shopping-box-top-shop .shopping-box-top-shop-img {
		margin-right: 20px;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-top .shopping-box-top-shop .shopping-box-top-shop-txt {
		flex: 1;
		width: 100%;
		height: 92px;
		padding-top: 16px;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-top .shopping-box-top-shop .shopping-box-top-shop-txt .shopping-box-top-shop-txt-t {}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-top .shopping-box-top-shop .shopping-box-top-shop-txt .shopping-box-top-shop-txt-t span {
		font-size: 19px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: inline-block;
		width: 100px;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-top .shopping-box-top-shop .shopping-box-top-shop-txt .shopping-box-top-shop-txt-t span:nth-child(1) {}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-top .shopping-box-top-shop .shopping-box-top-shop-txt .shopping-box-top-shop-txt-t span:nth-child(2) {
		float: right;
		display: inline-block;
		width: 20px;
		height: 20px;
		color: #ed6c45;
		cursor: pointer;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-top .shopping-box-top-shop .shopping-box-top-shop-txt .shopping-box-top-shop-txt-t span:nth-child(2) img {
		width: 10px;
		height: 10px;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-top .shopping-box-top-shop .shopping-box-top-shop-txt .shopping-box-top-shop-txt-t span:nth-child(3) {
		float: right;
		margin-right: 20px;
		color: #ed6c45;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-top .shopping-box-top-shop .shopping-box-top-shop-txt .shopping-box-top-shop-txt-b {
		padding-top: 25px;
		color: #9c9c9c;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-btm {
		width: 420px;
		height: 90px;
		border-top: 2px solid #f0997e;
		background: #faf2ef;
		line-height: 90px;
		text-align: center;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-btm span {
		font-size: 19px;
		margin-right: 83px;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-btm .btn {
		display: inline-block;
		width: 120px;
		height: 42px;
		background-image: url("./img/button_GoPay_normal.png");
		background-repeat: no-repeat;
		background-size: 100%;
		cursor: pointer;
		margin-top: 25px;
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img .shopping-box .shopping-box-btm .btn:hover {
		background-image: url("./img/button_GoPay_click.png");
	}
	
	header .head-btm .head-btm-head .head-btm-search .shopping-img img {
		width: 30px;
		height: 30px;
		padding-top: 5px;
	}
	
	header .head-btm nav ul.nav {
		display: flex;
		justify-content: space-between;
	}
	
	header .head-btm nav .nav li {
		text-align: center;
		font-weight: bold;
		padding-top: 48px;
		padding-bottom: 6px;
		font-size: 19px;
		cursor: pointer;
	}
	
	header .head-btm nav .nav li a:hover {
		text-decoration: none;
	}
	
	header .head-btm nav .nav li.active {
		border-bottom: 4px solid #ca5333;
		color: #ca5333;
	}
	
	header .head-btm nav .nav li.active a {
		color: #ca5333;
	}
	
	.fixedNav {
		position: fixed;
		top: -60px;
		left: 0;
		width: 100%;
		height: 60px!important;
		-webkit-transition: all 1s;
		-moz-transition: all 1s;
		-o-transition: all 1s;
		transition: all 1s;
		z-index: 100;
		background-color: #fff;
		box-shadow: 0 0 3px 0 rgba(0, 0, 0, .2);
		min-width: 1200px;
	}
	
	.fixedNav .fixedNav-main {
		width: 1195px;
		height: 100%;
		margin: 0 auto;
		position: relative;
		display: flex;
	}
	
	.fixedNav .fixedNav-main>div,
	.fixedNav .fixedNav-main>ul {
		padding-top: 10px;
	}
	
	.fixedNav .fixedNav-main .fixedNav-logo,
	.fixedNav .fixedNav-main .fixedNav-logo img {
		height: 30px;
	}
	
	.fixedNav .fixedNav-main .fixedNav-logo {}
	
	.fixedNav .fixedNav-main .fixedNav-nav {
		display: flex;
		flex: 1;
		height: 30px;
		justify-content: space-around;
	}
	
	.fixedNav .fixedNav-main .fixedNav-nav li {
		cursor: pointer;
		font-size: 19px;
		font-weight: bold;
	}
	
	.fixedNav .fixedNav-main .fixedNav-nav li a:hover {
		text-decoration: none;
	}
	
	.fixedNav .fixedNav-main .fixedNav-nav .active {
		border-bottom: 4px solid #ca5333;
		color: #ca5333;
	}
	
	.fixedNav .fixedNav-main .fixedNav-nav .active a {
		color: #ca5333;
	}
	
	.fixedNav .fixedNav-main .fixedNav-right {
		width: 200px;
		display: flex;
		justify-content: space-between;
	}
	
	.fixedNav .fixedNav-main .fixedNav-right>div,
	.fixedNav .fixedNav-main .fixedNav-right>div img {
		width: 20px;
		height: 22px;
		margin-left: 30px;
	}
	
	.fixedNav .fixedNav-main .fixedNav-right>div img {
		margin-left: 0;
	}
	
	.fixedNav .fixedNav-main .fixedNav-right .shopping-img {
		position: relative;
	}
	
	.fixedNav .fixedNav-main .fixedNav-right .shopping-img p {
		position: absolute;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		text-align: center;
		line-height: 20px;
		right: -10px;
		top: -10px;
		background: #F07F74;
		color: white;
		z-index: 10;
	}
	
	.fixedNav .fixedNav-main .fixedNav-right .fixedNav-input {
		display: none;
		width: 150px;
	}
	
	.fixedNav .fixedNav-main .fixedNav-right .fixedNav-input .input-search {
		width: 150px;
		height: 30px;
		border: 0;
		border-bottom: 1px solid #EE734D;
		margin-right: 5px;
		padding-left: 7px;
		outline: none;
	}
	
	.fixedNav .fixedNav-main .fixedNav-right .search-img,
	.fixedNav .fixedNav-main .fixedNav-right .personage-img,
	.fixedNav .fixedNav-main .fixedNav-right .shopping-img {
		cursor: pointer;
	}
	
	.fixedNav.top0 {
		top: 0;
	}
	
	.modal.show,
	.activityWrapper.show {
		display: block;
	}
</style>
<template>
	<div class="">
		<footer>
           <div class="ft-main">
               <div class="ft-main-left">
                   <h2 class="">关于我们</h2>
                   <p class="">WeTrade International Limited(简称:WeTrade众汇)，是一家英国的外汇经纪商，在英国、塞舌尔、中国分别设立有办事处，为全球交易者提供外汇、指数、原油、贵金属等五十余种金融衍生品交易。为欧洲，亚洲，非洲多个国家和地区提供零售和机构服务，提供多语言全天候服务。</p>
               </div>
               <div class="ft-main-center">
                   <h2 class="">关注我们</h2>
                   <div class="ft-main-center-top">
                       <p>官网：www.WeTradefx.net </p>
                       <p>积分商城客服：gift@WeTradefx.net</p>
                       <p>客服邮箱：chinasupport@WeTradefx.net</p>
                   </div>
                   <div class="ft-main-center-btm">
                       <p><img src="./img/bottom_7_WB.png" class="ft-main-center-btm-img" alt=""></p>
                       <p>
                           <img src="./img/bottom_7_KF.png" class="ft-main-center-btm-img" alt="">
                           <img src="./img/popup_7_KF.png" class="ft-main-center-btm-img2" alt="">
                       </p>
                       <p>
                           <img src="./img/bottom_7_WX.png" class="ft-main-center-btm-img" alt="">
                           <img src="./img/popup_7_WX.png" class="ft-main-center-btm-img2" alt="">
                       </p>
                   </div>
               </div>
               <div class="ft-main-right">
                   <h2 class=""><img src="./img/pic_wanrning.png" alt="">风险提示</h2>
                   <p>外汇保证金，差价合约及衍生工具属高风险投资，亏损风险想当巨大，因此投资者决定进行保证金投资前，请务必慎重考虑您的投资目标，经验程度，和对风险的承受能力。</p>
               </div>
           </div>
        </footer>
        <div class="footer-btm">Copyright &copy; 2017 WeTrade 众汇 版权所有</div>
	</div>
</template>

<script>
</script>

<style scoped>
	footer{
    border: 1px solid #EDEDED;
    box-shadow: 0 17px 10px -8px #EDEDED inset;
    box-sizing: border-box;
    background: #F3F3F3;
    padding: 60px 0 80px 0;
    width: 100%;
    min-width: 1200px;
}
footer .ft-main{
    width: 1195px;
    margin: 0 auto;
    display: flex;
}
footer .ft-main>div{
    flex: 1;
    padding: 0 32px;
    border-right: 2px solid #d5d5d5;
}
footer .ft-main>div h2{
    text-align: center;
    font-size:24px;
    font-weight: bold;
    color: #000;
    padding-bottom: 32px;
}
footer .ft-main .ft-main-left p{
    text-indent: 1em;
    font-size:19px;
}
footer .ft-main>div:last-child{
    border-right: 0;
}
footer .ft-main .ft-main-center .ft-main-center-top{
    text-align: center;
    margin-bottom: 30px;
}
footer .ft-main .ft-main-center .ft-main-center-btm{
    display: flex;
    justify-content: space-between;
}
footer .ft-main .ft-main-center .ft-main-center-btm p{
    width: 64px;
    height: 64px;
    position: relative;
}
footer .ft-main .ft-main-center .ft-main-center-btm p .ft-main-center-btm-img{
    width: 64px;
    height: 64px;
}
footer .ft-main .ft-main-center .ft-main-center-btm p .ft-main-center-btm-img2{
	width: 193px;height: 218px;	
    display: none;
    position: absolute;
    top: -350%;
    left: -100%;
}
footer .ft-main .ft-main-center .ft-main-center-btm p:hover .ft-main-center-btm-img2{
    display: block;
}
footer .ft-main .ft-main-right h2{
    color: #e52b2b;
}
footer .ft-main .ft-main-right h2 img{
    vertical-align: middle;
    margin-right: 15px;
}
footer .ft-main .ft-main-right p{
    color: #e52b2b;
    font-size:19px;
    text-indent: 1em;
}
.footer-btm{
    width: 100%;
    height: 75px;
    text-align: center;
    background: #111;
    color: #757575;
    line-height: 75px;
    min-width: 1200px;
}
</style>
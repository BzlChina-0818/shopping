<template>
   <div>
        <header class="header">
            <i class="icon iconfont icon-shezhi"></i>
            <span>我的717商城</span>
             <i class="icon iconfont icon-xiaoxi"></i>
        </header>
        <div class="top">
            <div class="img">
                <!-- <img src="../../assets/img/2.jpg" alt=""> -->
                <p>路飞</p>
            </div>
        </div>
        <div class="shop">
            <span>
                <i class="icon iconfont icon-douban"></i>
                我的店铺
            </span>
            <i class="icon iconfont icon-douban"></i>
        </div>
        <ul class="order">
            <li>
              <i class="icon iconfont icon-douban"></i>
                <span>待付款</span>
            </li>
            <li>
               <i class="icon iconfont icon-douban"></i>
                <span>待收货</span>
            </li>
            <li>
                <i class="icon iconfont icon-douban"></i>
                <span>代发货</span>
            </li>
            <li>
                <i class="icon iconfont icon-douban"></i>
                <span>售后</span>
            </li>
            <li>
                <i class="icon iconfont icon-wodedingdan"></i>
                <span>我的订单</span>
            </li>
        </ul>
        <ul class="list">
            <li>
                <p>
                   <i class="icon iconfont icon-yue"></i>
                    <span>账号余额</span>
                </p>
                <i class="icon iconfont icon-webicon213"></i>
            </li>
            <li>
                <p>
                    <i class="icon iconfont icon-dizhi"></i>
                    <span>地址管理</span>
                </p>
                <i class="icon iconfont icon-webicon213"></i>
            </li>
            <li>
                <p>
                    <i class="icon iconfont icon-kefu"></i>
                    <span>我的客服</span>
                </p>
                <i class="icon iconfont icon-webicon213"></i>
            </li>
        </ul>
    </div>
</template>

<script>
import {getCookie} from '../../until/decode'
export default {
    mounted(){
          let islogin =getCookie('token')
           if(islogin){
              
           }else{
                this.$router.push({name:"login",query:{url:"myperson"}})
           }
    }
}
</script>




<style scoped>
.header {
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
}
.top {
  height: 80px;
  width: 100%;
  /* background: url("../../img/未标题-3.png"); */
}
.shop {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  height: 80px;
  font-size: 20px;
  line-height: 80px;
  color: #fc4141;
}
.shop span i.icon {
  font-size: 55px;
}
.order {
  display: flex;
  justify-content: space-around;
  height: 60px;
}
.order li {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 30px;
}
.order li i.icon {
  font-size: 25px;
}
.list {
    display: flex;
    flex-direction: column;
}
.list li{
    display: flex;
    
    justify-content: space-between;
    padding: 0 10px;
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #eee;
}
.img{
    width:60px;
    margin:0 auto;
    padding-top: 10px;
    text-align: center;
}
.img img{
    width:80%;
    border-radius: 50%;
}
.img p{
    text-align: center;
    line-height: 20px;
    color:#fff;
}
</style>




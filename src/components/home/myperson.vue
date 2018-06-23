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
            <li @click="order">
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
                <p @click="adress">
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
    methods:{
       order(){
           this.$router.push({name:"order"})
       },
       adress(){
             this.$router.push({name:"adress"})
       }
    },
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
  height: .8rem;
  line-height: .8rem;
  display: flex;
  justify-content: space-between;
  padding: 0 .4rem;
  box-sizing: border-box;
  width: 100%;
}
.top {
  height: 1.6rem;
  width: 100%;
  /* background: url("../../img/未标题-3.png"); */
}
.shop {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 .2rem;
  box-sizing: border-box;
  height: 1.6rem;
  font-size: .4rem;
  line-height: 1.6rem;
  color: #fc4141;
}
.shop span i.icon {
  font-size: 1.1rem;
}
.order {
  display: flex;
  justify-content: space-around;
  height: 1.2rem;
}
.order li {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: .6rem;
}
.order li i.icon {
  font-size: .5rem;
}
.list {
    display: flex;
    flex-direction: column;
}
.list li{
    display: flex;
    width:100%;
    justify-content: space-between;
    padding: 0 .2rem;
    box-sizing: border-box;
    
    height: .9rem;
    line-height: .9rem;
    border-bottom: 1px solid #eee;
}
.list li p{
    width:100%; 
}
.img{
    width:1.2rem;
    margin:0 auto;
    padding-top: .2rem;
    text-align: center;
}
.img img{
    width:80%;
    border-radius: 50%;
}
.img p{
 
    text-align: center;
    line-height: .4rem;
    color:#fff;
}
</style>




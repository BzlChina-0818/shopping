<template>
    <div>
       <header class="header">
           <i class="icon iconfont icon-xiangzuo"></i>
           <span>我的订单</span>
           <i class="icon iconfont icon-xiaoxi"></i>
       </header>
       <nav>
           <ul >
               <li><router-link :to="{name:'all'}">全部</router-link> </li>
               <li><router-link :to="{name:'obligation'}">待付款 </router-link> </li>
               <li> <router-link :to="{name:'tosend'}">待发货 </router-link></li>
               <li><router-link :to="{name:'wait'}">待收货 </router-link></li>
               <li><router-link :to="{name:'after'}">售后 </router-link></li>
           </ul>
       </nav>
       <section>    
           <router-view></router-view>
       </section>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
        header{
            height:.9rem;
            line-height: .9rem;
            display: flex;
            padding: 0 .2rem;
            box-sizing: border-box;
            justify-content: space-between;
        }
        nav{
            height:.9rem;
            ul{
                width:100%;
                height:100%;
                display: flex;
                li{
                    flex:1;
                    line-height: .9rem;
                    text-align: center;
                }
            }
        }
</style>

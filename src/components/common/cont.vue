<template>

    <div>
        <!-- <router-link :to="{name:'detail',query:{data:shopcon}}"> -->
             <dl @click="todetail(shopcon)">     
                      <dt><img v-lazy="shopcon.imageurl
" alt=""></dt>
                      <dd>{{shopcon
.wname}}   <i class="icon iconfont icon-gouwuche" @click.stop="addshopinfo(shopcon)"></i> </dd>
                  </dl>          
              
        <!-- </router-link>        -->
         </div>         
     
</template>

<script>
import {getCookie} from '../../until/decode.js'
export default {
  props: {
    shopcon: {
      required: true,
      type: Object
    },
    ins:{
      type:Object
    }
  },
  methods:{
    todetail(shopcon){
        this.$router.push({name:'detail',query:{data:shopcon}})
    },
    addshopinfo(info){
        let token =  getCookie('token')
      this.$http.post('http://localhost:3200/api/shopinfo',{info,token}).then((res)=>{
        console.log(this.ins)
          this.ins.active('添加成功')
               console.log(res)
      }) 
             // console.log(info)
    } 
    }
};
</script>

<style lang="scss" scoped>
dl {
  flex: 1;
  display: flex;
  flex-direction: column;
  

  dd {
    overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -moz-box;
        -moz-line-clamp: 2;
        -moz-box-orient: vertical;
        padding-right:.4rem;
        box-sizing: border-box;
        height: 2rem;
        i.icon{
          font-size: .6rem;
        }
        
  }
  dt {
    width: 100%;
    img {
      width: 100%;
    }
  }
}

</style>

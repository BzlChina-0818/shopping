<template>
    <div class="classifywrap">
         <heads></heads>
         <div class="cont">
             <aside class="scroller" id="leftScroller"> 
                <ol class="list">
                    <li  class="curr" @click="renderlist('17951827')" >热门分类</li>      
                    <li   @click="renderlist('17951828')" class="">手机数码</li>          
                    <li   @click="renderlist('17951829')" class="">电脑办公 </li>   
                    <li   @click="renderlist('17951830')"  class="">电视影音</li>        
                    <li   @click="renderlist('17951831')" class="">空调冰洗</li> 
                    <li   @click="renderlist('17951832')" clasS="">厨房卫浴 </li>
                    <li   @click="renderlist('17951833')" class="">生活电器 </li>
                    <li   @click="renderlist('17951834')" class="">食品酒水 </li>
                    <li   @click="renderlist('17951835')" class="">美妆个护 </li>
                    <li   @click="renderlist('17951836')" class="">母婴玩具 </li>
                    <li   @click="renderlist('17951837')" class="">医疗保健 </li>
                    <li   @click="renderlist('17951838')" class="">服饰鞋帽 </li>
                    <li   @click="renderlist('17951839')" class="">运动户外 </li>
                    <li   @click="renderlist('17951840')" class="">箱包奢品 </li>
                    <li  class="">钟表首饰 </li>
                    <li  class="">住宅家具 </li>
                    <li  class="">家装建材 </li>
                    <li  class="">家居日用 </li>
                    <li  class="">床品家纺 </li>
                    <li  class="">汽车用品 </li>
                    <li  class="">黄金收藏 </li>
                    <li  class="">智能家居 </li>
                    <li  class="">金融理财 </li>
                    <li  class="">生活服务 </li>
               </ol>
             </aside>
            <div class="right">
            
                  <div v-for=" list in  shoplist " class="listcont">
                      <p>{{list.goodsTypeName}}</p>
                      <div class="imgcon">
                           <dl v-for="v in list.goodsTypeList">
                        <dt>
                            <img :src="v.goodsTypeImgUrl
" alt="">
                          
                            </dt>
                        <dd>{{v.goodsTypeName}}</dd>
                      </dl>
                      </div>
                     
                  </div>
            </div>
         </div>
         
    </div>
</template>

<script>
import heads from "../common/head";
 import {mapState,mapActions} from 'vuex'
export default {
    data(){
            return {
               arr :[],
               cid:'17951827'
            }
    },
    computed:{
        shoplist(){
         
            return   this.$store.state.capotorlist[this.cid]

    
        },
      //...mapState(['capotorlist'])
    },
   
  components: {
    heads
  },
  methods:{
      ...mapActions(['fetchList']),
      renderlist(code){ 
             this.cid = code
             this.fetchList(this.cid)
    //          this.$http.get(`http://localhost:3200/classify?cid=${this.cid}`).then((res)=>{
    //          this.arr =   res.secondLevelCategories
    //          //console.log(this.arr)
    //   })
      }
  },
  mounted(){
    //this.renderlist(this.cid)
     this.fetchList(this.cid)
     
  }
};
</script>

<style scoped lang="scss">

.scroller{
    flex-basis: 1.6rem;
    overflow-y: scroll;
}
.listcont{
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
   .imgcon{
       display: flex;
       flex-wrap:wrap;
        p{
        height:.8rem;
        line-height: .8rem;
        
    }
     dl{
        width:33%;
         dt{
             background: #ccc;
            margin: 0 .2rem;
             box-sizing: border-box;
            img{
                
                width:100%;
            }
         }
         dd{
           width: 100%;
           text-align: center;
         }
     }
   }
   
}
  .classifywrap{
      width:100%;
      height:100%;
      display:flex;
      flex-direction: column;
  }
  .cont{
      flex:1;
      display: flex;
      overflow: hidden;
      .scroller{
          
          .list{
              width:100%;
              li{
                  height:.8rem;
                  border-bottom: .02rem solid #ccc;
                  padding: 0 .1rem;
                  line-height: .8rem;
              }
          }
      }
  }
  .right{
      flex:1;
      overflow-y:scroll;
      
  }
</style>

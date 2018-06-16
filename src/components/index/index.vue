<template>
    <div class="wrap">
          
          <section class="section">
            <router-view></router-view>
          </section>
          <foots></foots>
    </div>
</template>

<script>
import foots from '../home/foots'
export default {
     data(){
         return{

         }
     },
     components:{
           foots
     },
     mounted(){

     }
}
</script>

<style lang="scss">
   
      .wrap{
          position: absolute;
          top:0;
          bottom:0;
          display: flex;
          width:100%;
          flex-direction: column;
          overflow: hidden;
         
          .section{
              flex:1;
              overflow-y: scroll;
          }
      }
</style>

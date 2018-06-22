<template>
    <div class="diglog" v-show="isActive"><slot></slot></div>
</template>

<script>
export default {
      data(){
          return{
              isActive:false
          }
          
      }
}
</script>

<style>
   .diglog{
      
       height:.9rem;
       line-height: .9rem;
       padding: 0 .3rem;
       position: fixed;
       top:50%;
       left:50%;
       transform: translate3d(-50%,-50%,0);
       background: lime;
       color:#fff;
   }
</style>


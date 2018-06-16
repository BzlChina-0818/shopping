<template>
     <div class="detailwrap">
          <section>
               <div class="topimg">
              <img :src="data.imageurl" alt="">
          </div>
          <div>{{data.jdPrice}}</div>
          <div>{{data.wname}}</div>
          </section>
         
           <footer class="footer">
         </footer> 
     </div>
    
</template>

<script>

export default {
    data(){
          return {
             data: this.$route.query.data
          }
    },
    mounted(){
        console.log(this.$route.query )
    }
  
}
</script>

<style lang="scss" scoped>
.detailwrap{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;

}
  .topimg{
      widows: 100% ;
      height:6rem;
      img{
          width:100%;
          height:100%;
      }
  }
  section{
      flex:1;
  }
.footer{
    width:100%;
    height:.9rem;
    background: lime;
}
</style>

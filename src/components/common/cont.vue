<template>
    <div>
        <router-link :to="{name:'detail',query:{data:shopcon}}">
             <dl>     
                      <dt><img v-lazy="shopcon.imageurl
" alt=""></dt>
                      <dd>{{shopcon
.wname}}</dd>
                  </dl>          
              
        </router-link>       
         </div>         
     
</template>

<script>
export default {
  props: {
    shopcon: {
      required: true,
      type: Object
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
        
  }
  dt {
    width: 100%;
    img {
      width: 100%;
    }
  }
}

</style>

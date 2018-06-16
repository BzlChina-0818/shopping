<template>
    <div>
        我的
    </div>
</template>

<script>
import {getCookie} from '../../until/decode'
export default {
    mounted(){
          let islogin =getCookie('token')
           if(islogin){
              // console.log(to)
              // next()
           }else{
                this.$router.push({name:"login",query:{url:"myperson"}})
           }
    }
}
</script>

<style>

</style>

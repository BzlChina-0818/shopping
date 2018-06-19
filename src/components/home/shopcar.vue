<template>
    <div>
        购物车1111
    </div>
</template>

<script>
import {getCookie} from '../../until/decode.js'
export default {
    
    data(){
        return {

        }
    },
    mounted(){
         this.$http.post('http://localhost:3200/api/goodlist',{token:getCookie('token')}).then((res)=>{
             if(res.code===10001){
               console.log('1')
             }else{
                 this.$router.push({name:"login",query:{url:"shopcar"}})
             }
            // console.log(res)
         })
    }
   
   
}
</script>

<style>

</style>

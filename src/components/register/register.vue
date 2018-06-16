<template>
    <div>
        <h1>注册</h1>
        <p>用户名:<input type="text" v-model="username" placeholder="请输入手机号"></p>
        <p>密码:<input type="password" v-model="password"></p>
        <p>确认密码:<input type="password" v-model="passwordr"></p>
        <button @click="goRegister">注册</button>

        
    </div>
    
</template>

<script>
export default {
    data(){
       return{
            username:'',
            password:'',
            passwordr:''
       }
    },
    methods:{
        goRegister(){
            let regular = /^1[3578]\d{9}/
            if(!regular.test(this.username)){
                 alert('请输入正确的手机号')
                 return 
            }
            if(!/\d{6,}/.test(this.password)){
                alert('至少有6位密码')
            }
           // if(username)
            if(!this.username||!this.password||!this.passwordr){
                alert('请补全信息')
                return 
            } 
             this.$http.post('http://localhost:3200/api/register',{
                 username:this.username,
                 password:this.password
             }).then((res)=>{
                 if(res.code===1){
                     this.$router.push({
                         name:'login'
                     })
                 }else{
                     alert('已经有该用户，请重新注册')
                 }
                 console.log(res)
             })   
        }
         
    }

}
</script>

<style lang="scss" scoped>

</style>

<template>
    <div class="loginwrap">
        <div class="top">

        </div>
       <div class="inp"><input type="text" placeholder="手机号/邮箱/会员名" v-model="username"></div>
       <div class="inp"><input  type="password" placeholder="请输入密码" v-model="password"></div>
       <div class="btn">
           <button @click="loginBtn">登录</button>
       </div>
       <div>短信验证码登录</div>
       <div><button @click="toregister">注册</button></div>
    </div>
</template>

<script>
import {setCookie} from '../../until/decode.js'
export default {
    data(){
        return {
            inputType:"text",
            istype:false,
            username:'',
            password:''
        }
    },
    methods:{
       loginBtn(){
        this.$http.post(`http://localhost:3200/api/login`,{username:this.username,password:this.password}).then((res)=>{
            if(res.code ===0){
                //console.log(res)
                setCookie('token',res.token)
            //      let  sessign = window.sessionStorage;
            //    let islogin = sessign.setItem('getlogin','1')
            console.log(this.$route.query)
                this.$router.push({name:this.$route.query.url||"page"})
            }else{
                alert('输入账号密码错误')
            }
        })
       },
       toregister(){
           console.log()
           this.$router.push({name:"register"})
       }
    },
    mounted(){

    }
};
</script>

<style  lang="scss" scoped>
.loginwrap {
  padding: 0 0.26rem;
  box-sizing: border-box;
}
.top{
    width: 2rem;
    height: 2rem;
    background: url(https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png) no-repeat;
    background-size: contain;
    margin: 1.25333333rem auto 0;
}
.inp {
  width: 100%;
  input {
    width: 100%;
    height: 0.6rem;
    outline: none;
    border: 0;
    border-bottom: 1px solid #ff5000;
  }
}
.btn {
  padding-top: 0.4rem;
}
button {
  width: 100%;
  height: 0.8rem;
  border-radius: 0.4rem;
  outline: none;
  border: 0;
  background: -webkit-linear-gradient(left, #ff9000, #ff5000) no-repeat;
  color: #fff;
  box-shadow: 0 0.08rem 0.16rem #f7c7b1;
}
.top {
  height: 2rem;
}
</style>

<template>
    <div class="addBox">
        <header class="header">
            <i class="icon iconfont icon-xiangzuo"  @click="backFn"></i>
            <span>收货地址</span>
            <span></span>
        </header>
         <section>
              <div class="inforBox" v-for="(msg,index) in info">
            <p>
                <span>{{msg.name}}</span>
                <span>{{msg.phone}}</span>
            </p>
            <p>{{msg.city}}{{msg.citys}}{{msg.area}}{{msg.address}}</p>
            <div class="select">
                <aside>
                    <input type="checkbox">
                    <span>默认地址</span>
                </aside>
                <aside>
                    <span @click="compile(index)">编辑</span>
                    <span @click="delectadress(index)">删除</span>
                </aside>
            </div>
        </div>
        </section> 
       
        <div class="footer">
            <button @click="newAdd">新增地址</button>
        </div>
    </div>

</template>
<script>
import axios from "axios";
import {getCookie} from "../../until/decode.js"
export default {
    data(){
        return{
            info:''
        }
    },
    created(){
         this.$http.post('http://localhost:3200/api/info',{
             token:getCookie('token')
         }).then((res)=>{
             this.info = res.msg
             console.log(res.msg)
              // console.log()
         })
    },
    methods:{
        backFn(){
            this.$router.push({name:"myperson"})
        },
        newAdd(){
            this.$router.push({name:"newadd"})
        },
        // compile(id){
        //      this.$http.post('http://localhost:3200/api/compile',{
        //             id 
        //      }).then((res)=>{

        //      })

        // },
        delectadress(id){
            console.log(id)
               this.$http.post('http://localhost:3200/api/delectadress',{
                     token:getCookie('token'),
                    id
             }).then((res)=>{
                console.log(res)
               this.info = res.msg
                //console.log(res.msg)
             })
        }

    },
     mounted(){
          let islogin =getCookie('token')
           if(islogin){
              
           }else{
                this.$router.push({name:"login",query:{url:"adress"}})
           }
    }
}
</script>
<style scoped>
.addBox{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
section{
    flex:1;
    overflow-y: scroll;
}
.header {
  height: 0.9rem;
  line-height: 0.9rem;
  padding: 0 .2rem;
  display: flex;
  justify-content: space-between;

}
.inforBox {
  padding: .2rem;

}
.inforBox p {
  line-height: .6rem;
  font-size: 0.4rem;
  color: #8c8c8c;
}
.inforBox p span {
  color: #333;
  font-size: .4rem;
}
.select{
    display: flex;
    justify-content: space-between;
    line-height: .8rem;
    font-size: .4rem;
}
.footer{
    height: 1.7rem;

}
.footer button{
    width:4.6rem;
    height: .97rem;
    background: #fc4141;
    color:#fff;
    text-align: center;
    line-height: .97rem;
    font-size: .3rem;
    margin:.5rem auto;
    display: block;
    border: none;
    outline: none;
    border-radius: 25px;
}

</style>





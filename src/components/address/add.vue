<template>
    <div class="addBox">
        <header class="header">
            <i class="icon iconfont icon-xiangzuo"  @click="backFn"></i>
            <span>收货地址</span>
            <span></span>
        </header>
        <div class="inforBox">
            <p>
                <span>路飞</span>
                <span>13344443344</span>
            </p>
            <p>北京市海淀区知春路</p>
            <div class="select">
                <aside>
                    <input type="checkbox">
                    <span>默认地址</span>
                </aside>
                <aside>
                    <span>编辑</span>
                    <span>删除</span>
                </aside>
            </div>
        </div>
        <div class="footer">
            <button @click="newAdd">新增地址</button>
        </div>
    </div>

</template>
<script>
import axios from "axios";
//import {getCookie} from "../../../utils/cookies"
export default {
    // beforeRouteEnter(to,from,next){
    //    axios.post("http://localhost:3000/getAddress",{token:getCookie("token")}).then(res=>{
    //        if(res.data.code==0){
    //            next({name:"login",params:{from: to.name}})
    //        }else{
    //            next()
    //        }
    //     });
    // },
    methods:{
        backFn(){
            this.$router.go(-1)
        },
        newAdd(){
            this.$router.push({name:"newadd"})
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
  flex:1;
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





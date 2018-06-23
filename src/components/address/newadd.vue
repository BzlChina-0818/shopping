<template>
    <div class="wraps">
       <header>
           <i class="icon iconfont icon-xiangzuo" @click="backFn"></i>
           <span>收货人</span>
           <span></span>
       </header>
       <section>
           <p>
                <label for="username">
                <input type="text" placeholder="收货人姓名" v-model="username">
            </label>
           </p>
          <p>
                <label for="number">
                <input type="number" placeholder="请输入手机号" v-model="phone">
                </label>
          </p>
          <p>
              <select id="city">
                  <option value="北京">北京</option>
                  <option value="上海">上海</option>
                  <option value="广东">广东</option>
              </select>
               <select id="citys">
                  <option value="北京">北京</option>
                  <option value="上海">上海</option>
                  <option value="广东">广东</option>
              </select>
          </p>
          <p>
              <select id="area">
                  <option value="海淀区">海淀区</option>
                  <option value="丰田区">丰台区</option>
                  <option value="朝阳区">朝阳区</option>
              </select>
          </p>
           <p>
               <input type="text" placeholder="详细地址" v-model="adress">
           </p>
           
       </section>
        <div class="footer">
            <button @click="store">保存</button>
        </div>
    </div>
</template>

<script>
import {getCookie} from '../../until/decode.js'
export default {
     data(){
                 return{
                     username:"",
                     phone:"",
                     adress:"",
                 }
        },
    methods:{
       
        backFn(){
            this.$router.push({name:"adress"})
        },
        store(){
            console.log()
            this.$http.post('http://localhost:3200/api/adress',{
                username:this.username,
                phone:this.phone,
                adress:this.adress,
                city:city.value,
                citys:citys.value,
                area:area.value,
                token:getCookie('token')

            }).then((res)=>{
                this.$router.go(-1)
                  console.log('1')
            })
            
        }
    }
};
</script>

<style lang="scss" scoped>
.wraps{
    width:100%;
    height:100%;
    background: #f3f3f3;
}
header {
  height: 0.9rem;
  line-height: 0.9rem;
  display: flex;
  padding: 0 0.2rem;
  justify-content: space-between;
}
section{
    p{
        height:1.2rem;
        padding: 0 .2rem;
        input{
            width: 100%;
            height: .9rem;
            outline: none;
            border:0;
            background: #fff;
        }
    }
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

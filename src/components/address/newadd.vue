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
         
               <div style="display:flex"> 
                   
                          <multiselect
                    v-model="selectpro"
                  
                    :options="provirce">
                    </multiselect>
                        <multiselect
                    v-model="selectcity"
                    :options="city">
                    </multiselect>
                   
                  
              </div>
               
         
          <div>
                 <multiselect
                    v-model="selectarea"
                    :options="area">
                    </multiselect>
          </div>
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
import 'vue-multiselect/dist/vue-multiselect.min.css';
import Multiselect from "vue-multiselect";
import { getCookie } from "../../until/decode.js";
export default {
  data() {
    return {
      username: "",
      phone: "",
      adress: "",
      selectpro:"",
      selectcity:"",
      selectarea:"",
      provirce:['上海',"北京","广州"],
      city:["上海","北京",'广州'],
      area:["海淀区","朝阳区","大兴区"]
    };
  },
     components: { Multiselect },
  methods: {
    backFn() {
      this.$router.push({ name: "adress" });
    },
    store() {
      console.log();
      this.$http
        .post("http://localhost:3200/api/adress", {
          username: this.username,
          phone: this.phone,
          adress: this.adress,
          city: this.selectpro,
          citys: this.selectcity,
          area: this.selectarea,
          token: getCookie("token")
        })
        .then(res => {
          this.$router.go(-1);
          console.log("1");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.wraps {
  width: 100%;
  height: 100%;
  background: #f3f3f3;
}
header {
  height: 0.9rem;
  line-height: 0.9rem;
  display: flex;
  padding: 0 0.2rem;
  justify-content: space-between;
}
section {
  p {
    height: 1.2rem;
    padding: 0 0.2rem;
    input {
      width: 100%;
      height: 0.9rem;
      outline: none;
      border: 0;
      background: #fff;
    }
  }
}
.footer {
  height: 1.7rem;
}
.footer button {
  width: 4.6rem;
  height: 0.97rem;
  background: #fc4141;
  color: #fff;
  text-align: center;
  line-height: 0.97rem;
  font-size: 0.3rem;
  margin: 0.5rem auto;
  display: block;
  border: none;
  outline: none;
  border-radius: 25px;
}
</style>

<template>
   <div class="list"> 
				<input type="checkbox" v-model="jdShop" @change="changeBox(list.count,jdShop,list.jdPrice,list.wareId)"/>
				<img :src="list.imageurl" />
				<div class="listRight">
					<p class="text">{{list.wname}}</p>
					<div>
						<b>${{list.jdPrice}}</b>
						<p> 
							<span @click="minus(list.count,jdShop,list.jdPrice,list.wareId)">-</span>
							<span>{{list.count}}</span>
							<span @click="add(list.count,jdShop,list.jdPrice,list.wareId)">+</span>
					   </p>
					</div>
				</div>
			</div>
</template>

<script>
import { getCookie } from "../../until/decode.js";
export default {
  data() {
    return {
      acount: 0,
      jdShop: false
    };
  },
  props: {
    list: {
      required: true,
      type: Object
    }
  },
  watch:{
        // jdShop(_new,_old){
        //   if(_new){
        //      this.$emit("upprice", { acount: this.list.acount, id:this.list.wareId, tag: this.jdShop });
        //   }else{

        //   }
        //   console.log(_new)
        // }
  },
  methods: {
    changeBox(count, flag, price, id) {
      if (flag) {
        this.acount = count * price;
      } else {
        this.acount = 0;
      }
      flag = !flag;
      this.$emit("upprice", { acount: this.acount, id, tag: flag });
      // console.log(this.acount)
    },
    add(count, flag, price, id) {
      //list.count = list.count+1;
      this.$http
        .post("http://localhost:3200/api/add", {
          token: getCookie("token"),
          id,
          type: "add"
        })
        .then(res => {
         // console.log(res);
          if (res.code == "1") {
            // console.log('2')

            this.$emit("updata");
            if (flag) {
              this.acount = count * price;
            } else {
              this.acount = 0;
            }
            //console.log(count)
            this.$emit("upprice", { acount: this.acount, id });
          }
        });
    },
    minus(count, flag, price, id) {
      // list.count = list.count-1;
      this.$http
        .post("http://localhost:3200/api/add", {
          token: getCookie("token"),
          id,
          type: "minus"
        })
        .then(res => {
          // console.log(res)
          if (res.code == "1") {
            // console.log('2')
            this.$emit("updata");
            if (flag) {
              this.acount = count * price;
            } else {
              this.acount = 0;
            }
            //console.log(count)
            this.$emit("upprice", { acount: this.acount, id });
          }
        });
    },
    mounted(){
      //  if(jdShop){
      //     console.log('1')
      //  }
    }
  },
  
};
</script>

<style>
.list {
  width: 100%;
  height: 2.65rem;
  display: flex;
  margin-bottom: 0.2rem;
  background-color: #fff;
  align-items: center;
  justify-content: space-around;
}
.list img {
  width: 2rem;
}
.listRight {
  width: 4.2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.listRight input {
  width: 1rem;
  height: 0.6rem;
  outline: none;
  border: 0.01rem solid #ccc;
  text-align: center;
}
.listRight {
  display: flex;
}
.listRight {
  justify-content: space-between;
}
.listRight b {
  color: red;
}
.listRight span {
  display: inline-block;
  height: 0.6rem;
  width: 0.6rem;
  border: 0.01rem solid #ccc;
  text-align: center;
  line-height: 0.6rem;
}
</style>

<template>
    <div class="pagewrap">
      <heads></heads>
        <!-- <header class="header">
            <span class="logo"></span>
            <label>
                <input type="text" @click="gotosearch">
            </label>
            <div>
            <span>
                <i></i>
                <b>我的店铺</b>
            </span>
            <span>
                <i></i>
                <b>消息</b>
            </span>
            </div>  
        </header> -->
        <section class="sectioncon" ref="sectioncon"   @scroll="onscrollTop">
          <div class="scroll_div"  ref="main">
                   <div class="cont">
            <div class="swiper">
            <swiper :options="swiperOption">
                      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
                    <img :src="slide">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            </div>
            </div>
        <div class="nav-list">
          <dl>
            <dt><i class="icon iconfont icon-26"></i></dt>
            <dd>家乡味道</dd>
          </dl>
           <dl>
            <dt><i class="icon iconfont icon-26"></i></dt>
            <dd>家乡味道</dd>
          </dl>
           <dl>
            <dt><i class="icon iconfont icon-26"></i></dt>
            <dd>家乡味道</dd>
          </dl>
           <dl>
            <dt><i class="icon iconfont icon-26"></i></dt>
            <dd>家乡味道</dd>
          </dl>
           <dl>
            <dt><i class="icon iconfont icon-26"></i></dt>
            <dd>家乡味道</dd>
          </dl>
             <dl>
            <dt><i class="icon iconfont icon-26"></i></dt>
            <dd>家乡味道</dd>
          </dl>
           <dl>
            <dt><i class="icon iconfont icon-26"></i></dt>
            <dd>家乡味道</dd> 
          </dl>
           <dl>
            <dt><i class="icon iconfont icon-26"></i></dt>
            <dd>家乡味道</dd>
          </dl>
        </div>
        <div class="tit">
           <span>天天特惠</span>
           <span>更多</span>
        </div>
        <ul class="contltem">
            <li v-for="item in list">
               <contItem :shopcon="item"></contItem> 
              </li> 
        </ul>
          </div>
           
        <!-- -->
     
        </section>
        
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import jsonp from "../../until/jsonp.js";
import contItem from "../common/cont";
import heads from "../common/head";
export default {
  data() {
    return {
      ispage: true,
      isScroll:true,
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperSlides: [
        "../../src/assets/banner/双店铺banner2.png",
        "../../src/assets/banner/安全食品banner.png",
        "../../src/assets/banner/家乡味道.png"
      ],
      list: [],
      page:1,
    };
  },
  components: {
    swiper,
    swiperSlide,
    contItem,
    heads
  },
  methods: {
    onscrollTop() {
      let docH = this.$refs.sectioncon.offsetHeight;
      let minH = this.$refs.main.offsetHeight;
      let scrollH = this.$refs.sectioncon.scrollTop;
      if(minH-scrollH-docH<30 &&this.isScroll){
        this.page++
        this.isScroll = false
        console.log('快到底部了')
         this.$http.get(`http://localhost:3200/index/recommend?page=${this.page}`).then(res => {
          this.list = [...this.list,...JSON.parse(JSON.parse(res).recommend).wareInfoList]
          this.isScroll = true
          
        });
      }
      //console.log()
     
    }
  },
  mounted() {
    this.$http.get("http://localhost:3200/index/recommend?page=1").then(res => {
      this.list = JSON.parse(JSON.parse(res).recommend).wareInfoList;
      console.log(this.list);
    });
  }
};
</script>


<style lang="scss" scoped>
.pagewrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.header {
  width: 100%;
  height: 0.88rem;
  display: flex;
  align-items: center;
  padding: 0 0 0 0.1rem;
  box-sizing: border-box;

  .logo {
    flex-basis: 0.8rem;
  }
  label {
    input {
      height: 0.6rem;
      outline: none;
      border-radius: 0.1rem;
      border: 0;
      border: 0.02rem solid #ccc;
    }
  }
  div {
    display: flex;
    span {
      padding: 0 0.1rem;
      b {
        font-weight: normal;
      }
    }
  }
}
.sectioncon {
  flex: 1;
  // overflow: hidden;
   overflow-y: scroll;
}
.scroll_div{
   //overflow-y: scroll;
}
.cont {
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
}
.nav-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  dl {
    width: 25%;
    display: flex;
    flex-direction: column;
    padding-bottom: 0.2rem;
    dt {
      text-align: center;
      height: 1rem;
      line-height: 1rem;
      i.icon {
        display: inline-block;
        font-size: 0.6rem;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }
    }
    dd {
      text-align: center;
    }

    // align-items: center;
  }
  border-bottom: 0.02rem solid #ccc;
}
.tit {
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
}
.contltem{
  display: flex;
     flex-wrap:wrap;
   li{
      width: 50%;
      margin-bottom: .4rem;
      box-sizing: border-box;
      border-bottom:.02rem solid #ccc;
    
      // border-top:.02rem solid #ccc;
   }
}
</style>

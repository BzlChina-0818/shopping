<template>
    <div>
        <header>
            <input type="text" v-model ="local" @input="searchdata">
            <button></button>
        </header>
        <section v-html="htmls">
         
        </section>
        <section>
            <ul>
                 <li v-for="list in data">
                     {{list}}
                 </li>
            </ul>
        </section>
    </div>
</template>

<script>
// import heades from '../common/head'
export default {
  data(){
      return{
          local:'',
          data: this.data = JSON.parse(window.sessionStorage.getItem('per')) || [],
          htmls:''
      }
      
  },
  methods:{
       searchdata(){
           console.log('1')
           this.$http.get(`https://m.gome.com.cn/index.php?ctl=index&act=keywordsPromptNew&keystr=${this.local}&dotime=1528960286000`).then((res)=>{
               //console.log(res)
                 this.htmls = res
           })
       }
  },
  mounted(){
      document.onkeyup = (e)=>{ 
            if(e.keyCode ===13){
                   
                        this.data.push(this.local);
                        window.sessionStorage.setItem('per', JSON.stringify(data))
                  
            }
      }
  }
}
</script>

<style>

</style>

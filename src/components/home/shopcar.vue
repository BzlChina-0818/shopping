<template>
    <div class="box">
		<div class='head'>
			<span> </span> 
			<span></span>
			<div class="shop">
				<span>购物车</span>
			</div>
			<div>
				<span class="bianji" @click="changeEdit">{{edit}}</span>
				<span>✉</span>
			</div>
		</div>
		<div class='main'>
			<div class="list" v-show="this.$store.state.shoplist.length==0">
				你的购物车啥也没有！
			</div>
			<shoplist @updata ="changeCount" v-for="val in this.$store.state.shoplist" :list="val" @upprice="changePrice" ref="listshop"></shoplist>
			
		</div>
		<div class="bottom">
			<div class="bottomLeft">
				<input type="checkbox" @change="allCheck(flag)" v-model="flag">
				<span>全选</span>
			</div>
			<div class="bottomRight">
				<div class="allPrice">
					<span>合计<b>${{allPrice}}</b></span>
					<span>(运费：￥0)</span>
				</div>
				<div>
					<button @click="changeAccount">{{closeAccount}}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {getCookie} from '../../until/decode.js'
import  shoplist from '../common/shoplist'
import {mapActions} from 'vuex'
export default {
    
    data(){
        return {
			
			count:1,
			arr:[],
			newArr:[],
			flag:false,
			edit:"编辑",
			closeAccount:"结算"
        }
	},
	computed:{
      allPrice(){
		 
			   this.newArr = this.arr.map((v,ind)=>{
                 return v.acount
		      })
		  
		 
		 // console.log(this.arr)
		  return  this.newArr.reduce((one,two)=>{
			   //console.log(one,two)
              return one+two
		  },0)
	  }     
	},
 created(){
	  this.fetchShopList()
        //  this.$http.post('http://localhost:3200/api/goodlist',{token:getCookie('token')}).then((res)=>{
        //      if(res.code===10001){
		// 		this.data = res.info
        //       // console.log('1')
        //      }else{
        //          this.$router.push({name:"login",query:{url:"shopcar"}})
        //      }
        //     // console.log(res)
        //  })
	},
	methods:{
			 ...mapActions(['fetchShopList']),
			 changeCount(){
				
					this.fetchShopList()
					 //this.$forceUpdate()
				
			 },
			 changeEdit(){
				 console.log('1')
				 console.log(this.edit)
                if(this.edit=="编辑"){
					this.edit ="完成"
					this.closeAccount="删除"
				}else{
					this.edit ="编辑"
					 this.closeAccount="结算"
				}
			 },
			 changeAccount(){
                 if(this.closeAccount=="删除"){
					 let  deleArr =[]
					this.$refs.listshop.forEach((v,ind)=>{
						if(v.jdShop){
                           deleArr.push(v.list.wareId)
						}
						
					})
					console.log(deleArr)
					 //this.closeAccount="删除"
					 this.$http.post('http://localhost:3200/api/deleinfo',{
						 token:getCookie('token'),
						 id:deleArr
					 }).then((res)=>{
						 if(res.msg==="成功"){
							 this.fetchShopList()
						 }
                        // console.log(res)
					 })
				 }
			 },
			 changePrice(msg){
				   console.log(msg)
				   if(msg.acount>0){
					   //console.log(msg)
					  // let ad  ;
					let flag  =  this.arr.some((v,ind)=>{
						
                         if(v.id ==msg.id){
							   //v.acount = msg.acount
                               return true
						 }else{
							  return false 
						 }
					   })
					  
					 
					   if(flag){
						   console.log(this.arr)
						   let  ad;
						   this.arr.forEach((v,ind)=>{
                                if(v.acount ==msg.acount){

								}else{
									 ad = ind 
								}
							   
						   })
						   this.arr.splice(ad,1,msg)
						   console.log(this.arr)
						
					   }else{
                            this.arr.push(msg)
					   }
					   console.log(this.arr)
					  
				   }else{
					   let ind ;
					  let flag = this.arr.some((v,index)=>{
                             if(v.id===msg.id){
								 ind = index
								 return true
							 }else{
								 return false
							 }
					  })
					  if(flag){

						  this.arr.splice(ind,1)
					  }
				   }
                  //  console.log(this.arr)
			 },
			 allCheck(flag){
				  flag = !flag
				
				if(!flag){
					this.newArr = [] 
					 let allCount = 0 
				 	this.$store.state.shoplist.forEach((v,inde)=>{
                             allCount +=   v.jdPrice * v.count
					})
					console.log(allCount)
					console.log(this.newArr)
					this.newArr.push(allCount)
					//this.$store.state.shoplist
				}else{
					this.newArr = [] 
				}
					
				
			 }
	},
	
   
	components:{
		shoplist
	}

   
   
}
</script>

<style scoped>
        .box{
	display: flex;
	flex-direction: column;
	width: 100%;
	height:100%;
	background-color: #eeeeee;
}
.head{
	width: 100%;
	height: .97rem;
	display: flex;
	border-bottom: .01rem solid #ccc;
	align-items:center;
	justify-content: space-around; 	
	position: relative;
	background-color:#fafafb;
}
.head div{
	display: flex; 
} 
.main{
	width: 100%;
	flex: 1;
	overflow-y: scroll;
}
span{
	color:#464646;
} 
.bianji{
	margin-right: 0.3rem;
}
.shop{
	position: absolute;
	left: 50%;
	transform: translatex(-50%);
}

.bottom{
	width: 100%;
	height: .97rem;
	background-color:#fff;
	display:flex;
	justify-content:space-around;
	align-items:center;
}
.allPrice{
	display:flex;
	flex-direction:column;
	margin-right: .3rem;
}
.bottomRight{
	display:flex;
	align-items:center;
}
button{
	width: 2.55rem;
	height: .9rem;
	border: none;
	outline: none;
	background-color:#fc4141;
	color:#fff;
	text-align: center;
	line-height: .9rem;
}
.text{
	overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
}
</style>






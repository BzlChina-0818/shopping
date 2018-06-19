<template>
    <div class="box">
		<div class='head'>
			<span> </span> 
			<span></span>
			<div class="shop">
				<span>购物车</span>
			</div>
			<div>
				<span class="bianji">编辑</span>
				<span>✉</span>
			</div>
		</div>
		<div class='main'>
			<div class="list" v-show="data.length==0">
				你的购物车啥也没有！
			</div>
			<div class="list" v-show="data.length!=0" v-for="val in data"> 
				<input type="checkbox" v-model="val.jdShop" />
				<img :src="val.imageurl" />
				<div class="listRight">
					<p class="text">{{val.wname}}</p>
					<div>
						<b>${{val.jdPrice}}</b>
						<p> 
							<span>-</span>
							<span>{{val.count}}</span>
							<span @click="add(val.wareId)">+</span>
					   </p>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom">
			<div class="bottomLeft">
				<input type="checkbox">
				<span>全选</span>
			</div>
			<div class="bottomRight">
				<div class="allPrice">
					<span>合计<b>$0</b></span>
					<span>(运费：￥0)</span>
				</div>
				<div>
					<button>结算</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {getCookie} from '../../until/decode.js'
export default {
    
    data(){
        return {
			data:[],
			count:1
        }
    },
    beforeCreate(){
         this.$http.post('http://localhost:3200/api/goodlist',{token:getCookie('token')}).then((res)=>{
             if(res.code===10001){
				this.data = res.info
              // console.log('1')
             }else{
                 this.$router.push({name:"login",query:{url:"shopcar"}})
             }
            // console.log(res)
         })
    },
    methods:{
        add(id){
                 console.log(id)
        }
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
.list{
	width: 100%;
	height:2.65rem;
	display:flex;
	margin-bottom:.2rem;
	background-color:#fff;
	align-items:center;
	justify-content:space-around;
}
.list img{
	width: 2rem;
}
.listRight{
	width: 4.2rem;
	height: 2rem;
	display:flex;
	flex-direction:column;
	justify-content:space-around;
}
.listRight input {
	width: 1rem;
	height: .6rem;
	outline: none;
	border: .01rem solid #ccc;
	text-align: center;
}
.listRight ul{
	display:flex;
}
.listRight ul{
	justify-content:space-between;	 
}
.listRight ul li b{
	color:red;
}
.listRight ul li span{
	display:inline-block;
	height: .6rem;
	width: .6rem;
	border: .01rem solid #ccc;
	text-align: center;
	line-height: .6rem;
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






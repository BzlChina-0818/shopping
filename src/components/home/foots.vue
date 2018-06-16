<template>
    <div class="footer">
        <ul>
            <li>
                <router-link  :to="{name:'page'}">
                <i><img src="../../assets/图标/矢量智能对象@2x.png" alt=""></i>
                <span>首页</span>
                </router-link>
               
            </li>
            <li>
                <router-link :to="{name:'classify'}">
                   <i><img src="../../assets/图标/分类-(1)@2x.png" alt=""></i>
                <span>分类</span>
                </router-link>
               
            </li>
            <li>
                <router-link  :to="{name:'contact'}" >
                    <i><img src="../../assets/图标/分类-(1)@2x.png" alt=""></i>
                <span>分类</span>
                </router-link>
                
            </li>
            <li>
                <router-link to="/index/shopcar">
                     <i><img src="../../assets/图标/购物车@2x.png" alt=""></i>
                <span>购物车</span>
                </router-link>
                
            </li>
            <li>
                <router-link to="/index/myperson">
                     <i><img src="../../assets/图标/分类-(1)@2x.png" alt=""></i>
                <span>我的</span>
                </router-link>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  height: .88rem;
  ul {
    width: 100%;
    display: flex;
    li {
      width: 20%;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        i {
          img {
            width: .44rem;
            height: .44rem;
            display: block;
          }
        }
      }
    }
  }
}
</style>

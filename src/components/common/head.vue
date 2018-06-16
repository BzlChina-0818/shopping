<template>
    <header class="header">
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
        </header>
</template>

<script>
export default {
  methods: {
    gotosearch() {
   
      this.$router.push({ name: "search" });
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>

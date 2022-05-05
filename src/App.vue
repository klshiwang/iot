<template>
  <div id="app">
    <!-- <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block" />
        <van-button>关闭</van-button>
      </div>
    </van-overlay> -->
    

    
    <router-view/>
    <nav>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <van-tabbar v-model="active">
        <van-tabbar-item name="home" icon="home-o"><router-link to="/">首页</router-link></van-tabbar-item>
        <van-tabbar-item name="search" icon="search"><router-link to="/">搜索</router-link></van-tabbar-item>
        <van-tabbar-item name="friends" icon="wap-nav"><router-link to="/about">关于</router-link></van-tabbar-item>
        <van-tabbar-item name="setting" icon="setting-o"><router-link to="/set">设置</router-link></van-tabbar-item>
      </van-tabbar>
    </nav>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import { Toast } from 'vant';
export default {
  name: 'IotMobApp',

  data() {
    return {
      show:true
    };
  },

  mounted() {
    Toast('提示文本')
  },

  methods: {
    
  },
};
</script>

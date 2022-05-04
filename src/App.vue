<template>
  <div id="app">
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block" />
        <van-button>关闭</van-button>
      </div>
    </van-overlay>
    

    
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
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

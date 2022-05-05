import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入所有组件
// import vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(vant)
/* 
//按需导入组件
import {Button} from 'vant'  //文档上说明这里可以同时引入样式,但测试没有引入样式
import 'vant/es/button/style'  //这是单独引入样式
Vue.component(Button.name,Button) 

 */




//手动按需引入
import 'vant/lib/index.css'
import {Button,Toast,Overlay,Tabbar, TabbarItem} from 'vant'

Vue.use(Button,Toast,Overlay)
Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.config.productionTip = false


const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


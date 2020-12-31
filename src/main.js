import Vue from 'vue'
import App from './App.vue'
import router from './router'//引入路由配置文件
import store from './store'//引入vuex配置
import 'element-ui/lib/theme-chalk/index.css';//样式文件需要单独引入
import ElementUI from 'element-ui';
import Axios from 'axios'//引入 axios
// 把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求,
// 不需要每次都 import一下 axios了，直接使用 $axios 即可
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Vue.config.productionTip = false //提醒
Axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.use(ElementUI)//注册element-ui
/* 创建挂载点至#app元素，将内容显示在index.html页面 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
//在Vue构造函数时，需要配置一个el属性，如果没有没有el属性时，可以使用.$mount('#app')进行挂载。
//实际渲染：
// import App from './App'
// import Vue from 'vue'
// new Vue({
//   el:'#root',
//   template:'<App></App>',
//   components:{
//     App
//   }
// })
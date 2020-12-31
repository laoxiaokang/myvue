import Vue from 'vue'
import VueRouter from 'vue-router'//引入路由
import hello from '../components/hello'
import world from '../components/world'
import ts from '../components/ts'
import HelloWorld from '../components/HelloWorld'
import ly from '../components/ly'
import allbt from '../components/allbutton'
/* 安装vue-router插件 */
Vue.use(VueRouter) // 注册路由

/* 定义路由页面 */
const routes = [

    { path: '/', name:'HelloWorld',component: HelloWorld },
  
    { path: '/hello', name:'hello',component: hello },

    { path: '/world', name:'world',component: world },
  
    { path: '/transition', name:'ts',component: ts },
  
    { path: '/ly', name:'ly',component: ly },
    { path: '/allbt', name:'allbt',component: allbt },
  ]
  
  const router = new VueRouter({ mode: 'history', routes});
  export default router;
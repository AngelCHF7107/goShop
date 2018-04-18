// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

//引入分隔符组件
import Split from './components/Split/Split.vue'
//注册成全局的组件标签
Vue.component('Split' , Split)

new Vue({
  el: '#app',
  render: h => h(App),
  router, // 注册上路由器(路由相关语法才能使用)
  store

})

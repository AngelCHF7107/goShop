
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    //主页
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    //搜索
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    //购物车
    {
      path:'/shopcart',
      component:ShopCart,
      meta:{
        showFooter:true
      }
    },
    //我的订单
    {
      path:'/profile',
      component:Profile
    },
    //请求根路径
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})


import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'
import Sort from '../pages/Search/Sort/Sort.vue'
import Brand from '../pages/Search/Brand/Brand.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    //主页
    {
      path:'/msite',
      component: Msite,
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
      },
      children:[
        {
          path: '/search/sort',
          component: Sort,
          /*meta:{
            ShowFooter:true
          }*/
        },
        {
          path: '/search/brand',
          component: Brand,
         /* meta:{
            ShowFooter:true
          }*/
        },
        {
          path: '',
          redirect: '/search/sort'
        },
      ]
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

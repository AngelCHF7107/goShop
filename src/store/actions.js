
import {RECEIVE_PRODUCT_LISTING , RECEIVE_CAROUSE_LLIST} from './mutation-types'

import {reqProductList , reqCarousel} from '../api/index'

export default {
  //异步获取E宠主页广告列表
  async getProductList({commit}){
    let result = await reqProductList()
    if(result.code === 0){
      let productList = result.data
      commit(RECEIVE_PRODUCT_LISTING , {productList})
    }
  },
  //异步获取轮播的列表
  async getCarouseltList({commit}){
    let result = await reqCarousel()
    if(result.code === 0){
      let carouselList = result.data
      commit(RECEIVE_CAROUSE_LLIST , {carouselList})
    }
  }



}

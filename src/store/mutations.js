
import {RECEIVE_PRODUCT_LISTING , RECEIVE_CAROUSE_LLIST} from './mutation-types'
export default {
  //获取e宠广告列表
  [RECEIVE_PRODUCT_LISTING](state , {productList}){
    state.productList = productList
  },
  //获取轮播的列表
  [RECEIVE_CAROUSE_LLIST](state , {carouselList}){
    state.carouselList = carouselList
  }
}

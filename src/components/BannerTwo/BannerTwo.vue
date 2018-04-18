<template>
  <div>
    <div class="meng_dog">
      <div class="meng_dog_claw">
        <img src="https://img2.epetbar.com/nowater/2018-02/07/10/79d53b0ab1c8a630802d74b5beb0a632.jpg">
      </div>
      <div class="meng_dog_more">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/14/36046f2f89b3825c77b70ac89f5c7ad2.jpg">
      </div>
      <!--<div class="meng_dog_img">
        <ul class="meng_dog_ul">
          <li>
            <img src="https://img2.epetbar.com/nowater/2018-04/13/10/4f2787312a3d212bc65c062627eaa429.jpg@!water">
          </li>
          <li><img src="https://img2.epetbar.com/nowater/2018-04/13/10/048b847bece3d1549ed46e1f21a9beec.jpg@!water"></li>
          <li><img src="https://img2.epetbar.com/nowater/2018-04/13/10/3cb5704493b322cc0eae6ab49642e911.jpg@!water"></li>
        </ul>
      </div>
      &lt;!&ndash; 如果需要分页器 &ndash;&gt;
      <div class="swiper-pagination"></div>-->
    </div>
    <div class="swiper-container2">
      <div class="swiper-wrapper" v-if="carouselList.data">
        <div class="swiper-slide" v-for="(item , index) in carouselList.data[1].value"
             :key="index">
          <a href="##">
            <img class="bn-img" :src="item.image">
          </a>
        </div>
        <!-- <div class="swiper-slide">
           <a href="http://sale.epet.com/m/mould/activity/ztNTMxOA%3D%3D.html?tid=5318&amp;fw=0">
           <img  class="bn-img" src="https://img2.epetbar.com/nowater/2018-04/11/21/8136c3a9e8ffcbfe1ace7ed761201173.jpg@!water">
         </a>
         </div>
         <div class="swiper-slide">
           <a href="https://sale.epet.com/m/mould/activity/ztNTE3Mg%3D%3D.html?tid=5172&amp;fw=0">
           <img class="bn-img" src="https://img2.epetbar.com/nowater/2018-04/12/10/c9991c2c34633498f313945514324c9d.jpg@!water">
         </a>
      </div>-->
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.min.css"
  export default {
    watch:{
      carouselList(value){
        this.$nextTick(() => {
          new Swiper('.swiper-container2', {
            pagination: {
              el: '.swiper-pagination',
            },
            autoplay:true,
            loop: true
          })
        })
      }
    },
    computed:{
      ...mapState(['productList' , 'carouselList'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .meng_dog
    width 100%
    position relative
    .meng_dog_claw
      width 187.5px
      height 73px
      margin-left 10px
    .meng_dog_claw img
      width 100%
      height 100%
    .meng_dog_more
      width 60px
      height 55px
      position absolute
      top 2px
      right 2px
    .meng_dog_more img
      width 100%
      height 100%
/*    .swiper-container
      width 100%
      .meng_dog_ul
        width 100%
        height 160px
        overflow hidden
      .meng_dog_ul li
        width 100%
        height 160px
        float left
      .meng_dog_ul li img
        width 100%
        height 160px*/
  .swiper-container2
    width 100%
    .swiper-wrapper
      width 100%
      a
        display block
        img
          width 100%
</style>

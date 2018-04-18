<template>
  <div class="swiper-container">
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
</template>
<script>
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.min.css"
  import {mapState} from 'vuex'
  import '../../../node_modules/swiper/dist/css/swiper.min.css'

    export default {
      computed:{
        ...mapState(['productList' , 'carouselList'])
      },
      mounted(){
        //轮播失效
        /*new Swiper('.swiper-container',{
          loop:true,
          autoplay:true,
          pagination:{
            el:'.swiper-pagination'
          },

        })*/
      },
      //    轮播失效解决办法
      watch: {
        carouselList(value) {
          this.$nextTick(() => {
            new Swiper('.swiper-container', {
              pagination: {
                el: '.swiper-pagination',
              },
              autoplay:true,
              loop: true
            })
          })
        }
      },
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .swiper-container
    width 100%
    .swiper-wrapper
      width 100%
      a
       display block
       img
        width 100%



</style>

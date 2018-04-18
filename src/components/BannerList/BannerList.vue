<template>
  <div class="save_money">
    <ul class="save_money_ul" v-if="carouselList.data">
      <li v-for="(good , index) in carouselList.data[3].goods" :key="index">
        <img class="image" :src="good.image.image">
        <span class="save_money_span money_1">¥{{good.sale_price}}</span>
        <span class="save_money_span money_2">{{good.little_price}}</span>
      </li>
      <!--<li>
        <img class="image" src="https://img1.epetbar.com/2017-01/17/18/7dd229ee03e407cdeb9a72f502c68a6c.jpg?x-oss-process=style/fill&amp;$1=300&amp;$2=300" lazy="loaded">
        <span class="save_money_span money_1">￥57.00</span>
        <span class="save_money_span money_2">省38.00</span>
      </li>
      <li>
        <img class="image" src="https://img1.epetbar.com/2017-01/17/18/7dd229ee03e407cdeb9a72f502c68a6c.jpg?x-oss-process=style/fill&amp;$1=300&amp;$2=300" lazy="loaded">
        <span class="save_money_span money_1">￥57.00</span>
        <span class="save_money_span money_2">省38.00</span>
      </li>
      <li>
        <img class="image" src="https://img1.epetbar.com/2017-01/17/18/7dd229ee03e407cdeb9a72f502c68a6c.jpg?x-oss-process=style/fill&amp;$1=300&amp;$2=300" lazy="loaded">
        <span class="save_money_span money_1">￥57.00</span>
        <span class="save_money_span money_2">省38.00</span>
      </li>-->
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
//  import BScroll from 'better-scroll'
  export default {
    mounted(){

      //疯抢列表滑动

    },
    computed:{
      ...mapState(['productList' , 'carouselList'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .save_money
    width 100%
    height 131px
    /*border-bottom 10px solid #f3f4f5*/
    .save_money_ul
      width 100%
      display flex
      flex-direction row
    .save_money_ul li
      width 100px
      height 130px
    .save_money_ul img
      width 85px
    .save_money_ul .save_money_span
      display block
      width 84px
      height 20px
      font-size 14px
    text-align center
    .save_money_ul .money_1
      color red
    .save_money_ul .money_2
      font-size 12px
      color #999
</style>

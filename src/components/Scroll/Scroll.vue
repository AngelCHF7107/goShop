<template>
  <div class="wrapper">
    <ul class="content">
      <li v-for="(menu , index) in productList.menus" :key="index">
        <a href="##">
            <span>{{menu.menu_name}}</span>
        </a>
      </li>
      <i class="i-tiao"></i>
      <!--<li class="dscroll-li">
        <a href="https://wap.epet.com/main.html?menu_param=123&amp;pet_type=dog&amp;is_single=1&amp;fw=0">&lt;!&ndash;&ndash;&gt;
          <span class="rela">
            <span>狗狗主粮</span>
            <i></i>
          </span>
        </a>
      </li>
      <li class="dscroll-li">
        <a href="https://wap.epet.com/main.html?menu_param=174&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
         <span class="rela">
           <span>零食</span>
           <i></i>
         </span>
        </a>
      </li>
      <li class="dscroll-li">
        <a href="https://wap.epet.com/main.html?menu_param=172&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
            <span class="rela">
              <span>医疗保健</span>
              <i></i>
            </span>
        </a>
      </li>
      <li class="dscroll-li">
        <a href="https://wap.epet.com/main.html?menu_param=168&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
             <span class="rela">
               <span>玩具</span>
               <i></i>
             </span>
        </a>
      </li>
      <li  class="dscroll-li">
        <a href="https://wap.epet.com/main.html?menu_param=173&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
            <span class="rela">
              <span>外出</span>
              <i></i>
            </span>
        </a>
      </li>
      <li class="dscroll-li">
        <a href="https://wap.epet.com/clothmall/main.html?pet_type=dog&amp;fw=0">
          &lt;!&ndash;&ndash;&gt; <span class="rela">
            <span>服饰城</span>
            <i></i>
          </span>
        </a>
      </li>-->
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      //导航滑动
      //导航滑动
      new BScroll('.wrapper' , {
        scrollX:true,
        click:true
      })
    },
    computed:{
      ...mapState(['productList' , 'carouselList'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .wrapper
    width 100%
    height 30px
    ul
      width 120%
      height 30px
      overflow hidden
      li
        width 20%
        height 30px
        white-space nowrap
        font-size 14px
        color #666666
        text-align center
        position relative
        float left
      .i-tiao
        display inline-block
        width 10%
        height 2px
        background #4cae4c
        position absolute
        bottom 5px
        left  25px
</style>

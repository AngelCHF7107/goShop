<template>
  <div class="shoppingCart">
    <header class="header">
      <div class="header_top">
          <a href="##">
            <span class="iconfont icon-huitui" ></span>
          </a>
          <span class="cart_title">购物车</span>
          <span class="iconfont icon-fenlei1 list_shop"></span>
        </div>
    </header>
    <!--隐藏列表-->
    <div class="classification_list">
      <a href="##">
        <span class="iconfont icon-shouye"></span>
        <p>首页</p>
      </a>
      <a href="##">
        <span class="iconfont icon-yueduxinwengonggao"></span>
        <p>商品分类</p>
      </a>
      <a href="##">
        <span class="iconfont icon-unie62d"></span>
        <p>购物车</p>
      </a>
      <a href="##">
        <span class="iconfont icon-xianhuachongwu"></span>
        <p>我的E宠</p>
      </a>
    </div>
    <!--购物车-->
    <div class="shop_content ">
      <div class="gouwuche">
        <span class="iconfont icon-unie62d"></span>
      </div>
      <div class="gowu_title">购物车是空的</div>
      <div class="end_button">
        <a href="###">
          <span>去逛逛</span>
        </a>
        <a href="###">
          <span>我的收藏</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .header
    width 100%
    height 50px
    background #ffffff
    line-height 50px
    .header_top
      width 80%
      height 100%
      background #ffffff
      margin 0 auto
      display flex
      flex-direction row
      justify-content center
      a
        span
          position absolute
          left 40px
      .list_shop
        position absolute
        right 40px
  .classification_list
    width 100%
    height 75px
    background #ffffff
    text-align center
    a
      display inline-block
      width 20%
      height 50px
      background white
      margin-left 15px
      text-align center
      margin-top 13px
      color #333
      span
        font-size 25px
        color #e9e9e9
      p
        font-size 14px
        margin-top 10px
  .shop_content
    width 100%
    height 298px
    background #ffffff
    .gouwuche
      width 100%
      height 170px
      background white
      text-align center
      line-height 170px
      span
        font-size 100px
        color #e9e9e9

    .gowu_title
      color #dbdbdb
      font-size 25px
      text-align center
      background #ffffff
    .end_button
      width 100%
      height 40px
      background white
      text-align center
      a
        display inline-block
        width 100px
        height 40px
        border 2px solid #999
        border-radius 5px
        line-height 40px
        margin-top 20px
        span
          font-size 20px
          color #999



</style>

<template>
  <div>
    <header class="head">
      <div class="sort on">
        <router-link to="/search/sort">分类</router-link>
      </div>
      <div class="brand">
        <!--<router-link to="/search/brand" replace>品牌</router-link>-->
        <router-link to="/search/brand">品牌</router-link>
      </div>
    </header>
    <router-view/>
  </div>
  <!--https://wap.epet.com/category.html?pet_type=dog#tab1-->
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

  .head
    background #fff
    width 100%
    padding-left 0 15px
    box-sizing border-box
    /*border-bottom 2px solid #cbcbcb*/
    position fixed
    left 0
    right 0
    top 0
    height 40px
    z-index 11
    font-size 13px
    div
      width 48%
      height 40px
      line-height 40px
      float left
      box-sizing border-box
      a
        font-weight 700
        padding 10px 5px
        &.router-link-active
          color #ed4044
          border-bottom 2px solid #ed4044
    .sort
      text-align right
      padding-right 5%
    .brand
      text-align left
      padding-left 5%

</style>

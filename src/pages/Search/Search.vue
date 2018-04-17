<template>
  <div class="categoryList" style="height: 100%">
    <!--头部-->
    <div class="listHeader">
      <div class="listHeader_left on">
        <a href="##" >
          <span>分类</span>
        </a>
      </div>
      <div class="listHeader_right on">
        <a href="##">
          <span>品牌</span>
        </a>
        <span class="iconfont icon-unie036"></span>
      </div>
    </div>
    <!--内容区-->
    <div class="kindbox">
      <!--左边列表区域-->
      <div class="leftbox">
        <ul>
          <li class="on">为你推荐</li>
          <li>为你推荐</li>
        </ul>
      </div>

    </div>
  </div>
 <!-- /*.kindbox
  position relative
  padding-top 40px
  padding-bottom 50px
  background bisque
  .leftbox
  position fixed
  top 40px
  left 0
  background #ffffff
  ul
  li
  box-sizing border-box
  width 70px
  height 50px
  font-size 13px
  padding 15px 0
  text-overflow ellipsis
  white-space nowrap
  overflow hidden
  text-align center
  &.on
  background #f3f4f5
  color red*/-->
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

  .listHeader
    position fixed
    top 0
    display flex
    width 100%
    height 40px
    background #ffffff
    z-index 100
    .listHeader_left
      width 50%
      height 40px
      background #ffffff
      margin 0 5px
      &.on a span
        color red
        border-bottom 2px solid red
      a
        color #333
        span
          display inline-block
          width 34px
          height 40px
          line-height 40px
          margin-left 120px
    .listHeader_right
      width 50%
      height 40px
      background #ffffff
      margin 0 5px
      &.on a span
        color red
        border-bottom 2px solid red
      a
        color #333
        span
          display inline-block
          width 34px
          height 40px
          line-height 40px
          margin-left 20px
      span
        margin-left 100px



  .kindbox
    position relative
    padding 40px 0 50px 0
    box-sizing border-box
    background #bcbcbc
    width 100%
    height 100%








</style>

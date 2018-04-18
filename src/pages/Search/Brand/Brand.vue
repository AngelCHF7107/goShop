<template>
  <div class="brand">
    <div class="brandlist"> <!--大容器-->
      <div class="branditem">  <!--每一项-->
        <!--分割线-->
        <Split/>
        <div>
          <div class="brandtitle">
            <span class="tuijian">——推荐品牌——</span>
          </div>
          <div class="itemwrap">
            <ul class="wrapul">
              <li class="wrapli">
                <div class="img">
                  <img class="image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&amp;$1=200">
                </div>
                <div class="iconimage">
                  <img class="icon" src="https://static.epetbar.com/static_web/wap/src/images/background/jian.png" alt="">
                </div>
                <span class="logo">TA公益</span>
                <p class="everytitle">冠能</p>
                <p class="everyaddress">美国</p>
              </li>
              <li class="wrapli">
                <div class="img">
                  <img class="image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&amp;$1=200">
                </div>
                <div class="iconimage">
                  <img class="icon" src="https://static.epetbar.com/static_web/wap/src/images/background/jian.png" alt="">
                </div>
                <span class="logo">TA公益</span>
                <p class="everytitle">冠能</p>
                <p class="everyaddress">美国</p>
              </li>
              <li class="wrapli">
                <div class="img">
                  <img class="image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&amp;$1=200">
                </div>
                <div class="iconimage">
                  <img class="icon" src="https://static.epetbar.com/static_web/wap/src/images/background/jian.png" alt="">
                </div>
                <span class="logo">TA公益</span>
                <p class="everytitle">冠能</p>
                <p class="everyaddress">美国</p>
              </li>
              <li class="wrapli">
                <div class="img">
                  <img class="image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&amp;$1=200">
                </div>
                <div class="iconimage">
                  <img class="icon" src="https://static.epetbar.com/static_web/wap/src/images/background/jian.png" alt="">
                </div>
                <span class="logo">TA公益</span>
                <p class="everytitle">冠能</p>
                <p class="everyaddress">美国</p>
              </li>
            </ul>
          </div>
        </div>
        <!--分割线-->
        <Split/>
      </div>
    </div>
    <div class="allmenu">全部</div>
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
  .brand
    width 100%
    background #fff
    .brandlist //大容器
      width 100%
      height 580px
      /*background palegoldenrod*/
      .branditem //每一项
        margin-top 40px
        .brandtitle //推荐品牌
          width 100%
          height 39px
          line-height 39px
          text-align center
          /*background greenyellow*/
          span
            font-size 14px
            color #999
        .itemwrap //下面的ul和li内容区
          padding 0 8px
          .wrapul
            width 100%
            overflow hidden //高度塌陷
            .wrapli
              width 33.333%
              padding 0 5px
              /*background pink*/
              margin-top 10px
              float left
              box-sizing border-box
              position relative
              .img
                border 2px solid #e2e2e2
                text-align center
                padding 10px
                box-sizing border-box
                .image //大图
                  width 76px
                  height 40px
              .iconimage
                position absolute
                top 0
                left 5px
                .icon //推荐的小图标
                  width 13px
                  height 13px
              .logo //TA公益 span图标
                font-size 8px
                background #e44b46
                color #fff
                position absolute
                top 0
                right 6px
              .everytitle //字体
                margin-top 5px
                text-align center
                height 20px
                font-size 13px
              .everyaddress
                color #999
                height 20px
                text-align center
                font-size 12px



    .allmenu
      position fixed
      right 6px
      bottom 65px
      border-radius 50%
      line-height 40px
      text-align center
      font-size 12px
      color #fff
      width 40px
      height 40px
      background: rgba(0,0,0,.4)
</style>

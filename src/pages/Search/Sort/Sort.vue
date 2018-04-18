<template>
  <div class="sort">
    <div class="sortpage">
      <ul class="sortnav">
        <li class="sortitem">为您推荐</li>
        <li class="sortitem">为您推荐</li>
        <li class="sortitem">为您推荐</li>
        <li class="sortitem">为您推荐</li>
        <li class="sortitem">为您推荐</li>
      </ul>
    </div>
    <div class="sortcontent">
      <div class="sortdetail">
        <div class="detailwrap">
          <p class="detailtext">
            <span>热门分类</span>
            <img class="image" src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png" alt="">
          </p>
          <ul class="detaillist">
            <li class="detailitem">
              <div class="detailimage">
                <img class="w100 image" src="https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg?x-oss-process=style/fill&amp;$1=300&amp;$2=300">
              </div>
              <p class="detailtettle">强化免疫</p>
            </li>
            <li class="detailitem">
              <div class="detailimage">
                <img class="w100 image" src="https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg?x-oss-process=style/fill&amp;$1=300&amp;$2=300">
              </div>
              <p class="detailtettle">肠胃调理</p>
            </li>
          </ul>
        </div>
        <div class="detailbottom">
          <p class="bottomtext">
            <span>热门品牌</span>
            <img class="image" src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png" alt="">
          </p>
          <ul class="bottomlist">
            <li class="bottomitem">
              <div class="bottomimage">
                <img class="lheight image" src="http://img.epetht.com/nowater/2016-08/18/16/637879a33f1ea84ccdbfa2dc1b3de16e.jpg">
              </div>
              <p class="bottomtettle">海洋之星Fish4Dogs</p>
            </li>
            <li class="bottomitem">
              <div class="bottomimage">
                <img class="lheight image" src="http://img.epetht.com/nowater/2016-08/18/16/637879a33f1ea84ccdbfa2dc1b3de16e.jpg">
              </div>
              <p class="bottomtettle">海洋之星Fish4Dogs</p>
            </li>
          </ul>
        </div>
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
  .sort
    /*background #fff*/
    width 100%
    .sortpage
      position: fixed;
      top: 40px;
      left: 0;
      bottom: 0;
      padding-bottom: 45px;
      border-right: 5px solid #f3f4f5;
      border-top: 5px solid #f3f4f5;
      .sortnav
        padding-bottom 45px
        .sortitem
          border-bottom: 2px solid #f3f4f5
          width 70px
          height 50px
          font-size 13px
          white-space nowrap
          overflow hidden
          line-height 50px
          text-align center
          &.on
            background: #f3f4f5;
            color: #ed4044;
    .sortcontent
      width 100%
      height 667px
      .sortdetail
        margin-top 30px
        margin-left: 75px;
        border-top: 5px solid #f3f4f5;
        padding-bottom 70px
        .detailwrap
          width 100%
          padding 20px 0
          .detailtext
            font-size 12px
            color #999
            padding-left 5px
            overflow hidden
            span
              float left
            .image
              float right
              height 10px
              margin-right 10px
          .detaillist
            width 100%
            margin-top 5px
            overflow hidden
            box-sizing border-box
            .detailitem
              float left
              margin-top 10px
              width 33.33%
              padding 0 5px
              box-sizing border-box
              .detailimage
                width 100%
                img
                  width 100%
              .detailtettle
                color #333
                font-size 10px
                margin-top 10px
                text-align center
                white-space nowrap
        .detailbottom
          border-top: 5px solid #f3f4f5;
          width 100%
          padding 20px 0
          .bottomtext
            font-size 12px
            color #999
            padding-left 5px
            overflow hidden
            span
              float left
            .image
              float right
              height 10px
              margin-right 10px
          .bottomlist
            width 100%
            margin-top 5px
            overflow hidden
            box-sizing border-box
            .bottomitem
              float left
              margin-top 10px
              width 50%
              padding 0 10px
              box-sizing border-box
              .bottomimage
                width 100%
                text-align center
                img
                  width 89px
                  height 45px
              .bottomtettle
                color #333
                font-size 10px
                margin-top 10px
                text-align center
                white-space nowrap
</style>

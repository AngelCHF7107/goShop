<template>
  <div>
    <div class="more_img">
      <ul class="more_img_ul">
        <li v-for="(img , index) in carouselList.imgUrls" :key="index">
          <img :src="img">
        </li>
        <!--<li>
          <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded">
        </li>
        <Split/>
        <li>
          <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded">
        </li>
        <Split/>
        <li>
          <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded">
        </li>
        <Split/>
        <li>
          <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded">
        </li>
        <Split/>
        <li>
          <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded">
        </li>
        <Split/>
        <li>
          <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded">
        </li>
        <Split/>
        <li>
          <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded">
        </li>
        <Split/>
        <li>
          <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded">
        </li>
        <Split/>
        <li>
          <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded">
        </li>
        <Split/>
        <li>
          <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded">
        </li>
        <Split/>
        <li>
          <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded">
        </li>
        <Split/>
        <li>
          <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded">
        </li>
        <Split/>
        <li>
          <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded">
        </li>
        <Split/>-->
      </ul>
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['productList' , 'carouselList'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .more_img
    width 100%
    .more_img_ul li
      width 100%
      height 160px
      border-bottom 10px solid #f3f4f5
    .more_img_ul li img
      display block
      width 100%
      height 160px
</style>

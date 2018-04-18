<template>
  <!--新人专享 导航列表-->
  <div class="icon-item"  v-if="productList.datas">
    <ul class="icon-item-ul" v-if="productList.datas[1]">
      <li class=" icon" v-for="(menu,index) in productList.datas[1].menus" :key="index">
        <a href="#">
          <img :src="menu.image">
        </a>
      </li>
      <!--<li class=" icon">
        <a href="#">
          <img src="https://img1.epetbar.com/2018-02/02/14/9d335309be26f610a043e3bcc1e84b31.jpg@!water" lazy="loaded">
        </a>
      </li>
      <li class=" icon">
        <a href="#">
          <img src="https://img1.epetbar.com/2018-02/02/14/9d335309be26f610a043e3bcc1e84b31.jpg@!water" lazy="loaded">
        </a>
      </li>
      <li class=" icon">
        <a href="#">
          <img src="https://img1.epetbar.com/2018-02/02/14/55231bc567328e7c57cde19809769d99.jpg@!water" lazy="loaded">
        </a>
      </li>
      <li class=" icon">
        <a href="#">
          <img src="https://img1.epetbar.com/2018-02/02/15/59043067d26a2e7a521394c796dfa571.jpg@!water" lazy="loaded">
        </a>
      </li>
      <li class=" icon">
        <a href="#">
          <img src="https://img1.epetbar.com/2018-03/28/16/148a8a0c14d85ee6b0229770385d8f9f.jpg@!water" lazy="loaded">
        </a>
      </li>
      <li class=" icon">
        <a href="#">
          <img src="https://img1.epetbar.com/2018-02/02/14/9d335309be26f610a043e3bcc1e84b31.jpg@!water" lazy="loaded">
        </a>
      </li>
      <li class=" icon">
        <a href="#">
          <img src="https://img1.epetbar.com/2018-02/02/14/9d335309be26f610a043e3bcc1e84b31.jpg@!water" lazy="loaded">
        </a>
      </li>
      <li class=" icon">
        <a href="#">
          <img src="https://img1.epetbar.com/2018-02/02/14/55231bc567328e7c57cde19809769d99.jpg@!water" lazy="loaded">
        </a>
      </li>
      <li class=" icon">
        <a href="#">
          <img src="https://img1.epetbar.com/2018-02/02/15/59043067d26a2e7a521394c796dfa571.jpg@!water" lazy="loaded">
        </a>
      </li>-->
    </ul>
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
  .icon-item
    width 100%
    height 100%
  .icon-item-ul
    width 100%
    height 180px
    .icon
      width 20%
      height 90px
      float left
    .icon img
      width 75px
      height 90px
</style>

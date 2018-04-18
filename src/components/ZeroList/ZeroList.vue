<template>
  <div class="currency_love" v-if="carouselList.data">
    <div class="currency_love_0" v-for="(content , imdex) in carouselList.data[3110].content_images" :key="imdex">
      <div v-for="(item,index) in content">
        <img :src="item.image">
      </div>
      <!--<div>
        <img  name="376x201" src="https://img2.epetbar.com/nowater/2018-02/05/14/fa66a0c8437b6fb8137c58d9b6ccb1c6.jpg@!water">
      </div>-->
    </div>
    <!--<div class="currency_love_0" v-for="(content_image , imdex) in carouselList.data[3110].content_images[1]" :key="imdex">-->
      <!--<div>-->
        <!--<img :src="content_image.image" >-->
      <!--</div>-->
      <!--&lt;!&ndash;<div>-->
        <!--<img  name="374x201" src="https://img2.epetbar.com/nowater/2018-02/05/14/6e3a2cb186e1028d481940c42fb54732.jpg@!water" >-->
      <!--</div>&ndash;&gt;-->
    <!--</div>-->
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
  .currency_love
    width 100%
    height 200px
    display flex
    flex-direction column
    /*border-bottom  10px solid  #f3f4f5*/
    .currency_love_0
      width 100%
      height 100px
      display flex
      flex-direction row
      div
        width 50%
        img
          width 100%
          height 100%
</style>

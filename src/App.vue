<template>
  <div style="height: 100%;box-sizing: border-box">
    <router-view></router-view>
    <!--v-show="$route.meta.showFooter"-->
    <FooterGuide />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
//测试
export default {
  components:{
    FooterGuide
  }
}
</script>

<style>

</style>

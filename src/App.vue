<template>
  <div style="height: 100%;box-sizing: border-box">
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  components:{
    FooterGuide
  }
}
</script>

<style>

</style>

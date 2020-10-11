<template>
  <div id="faq">
    <div class="banner container-fluid text-center">
      {{ title }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'faq',
  data(){
    return{
      title: 'FAQ',
    }
  }
}
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banners/banner_2.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
</style>


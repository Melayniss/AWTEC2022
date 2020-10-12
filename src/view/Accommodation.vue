<template>
  <div id="Accommodation" class="container-fuild">
    <div class="banner container-fuild text-center">
      {{ title }}
    </div>

    <!--    黄龙酒店-->
    <div id="acc" class="row acc-container">
<!--      <div class="col-xs-12 col-sm-12 col-md-6">-->
<!--        <Map></Map>-->
<!--      </div>-->

      <div class="col-xs-12 col-sm-12 col-md-6">
        <h2 class="acc-title">
          {{ venueMsg.title }}
          <small>{{ venueMsg.viceTitle }}</small>
        </h2>
        <p style="white-space: pre-line;">
          {{ venueMsg.content }}
        </p>
        <h2 class="acc-link">
          <a href="http://hangzhoudragonhotel.com/">{{ venueMsg.linkTitle }}</a>
        </h2>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
        <img class="img-responsive" src="@/assets/img/hotel_0.jpg" alt="Dragon Hotel">
      </div>
    </div>
    <div class="row acc-container">
      <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
        <img class="img-responsive" src="@/assets/img/hotel_1.jpg" alt="Dragon Hotel">
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
        <img class="img-responsive" src="@/assets/img/hotel_2.jpeg" alt="Dragon Hotel">
      </div>
    </div>
  </div>
</template>
<script>
import {WOW} from 'wowjs'

const venueMsg = {
  title: "Venue",
  content:
    "The Dragon Hotel in Hangzhou is the one of the best choices for travellers around the world to visit Hangzhou.\n" +
    "The hotel has ideal location in the heart of Hangzhou's central business district. Close to splendid shopping, and major corporate and government offices.\n" +
    "The Dragon is also on the doorstep of some of China's most revered cultural landmarks. The hotel faces the stunning Baoshi Mountain and is a short walk from historic and picturesque West Lake.\n" +
    "Address: 120 Shuguang Road, Hangzhou, China, 310007\n" +
    "Tel: (86) 400 862 5688",
  viceTitle: "/ Dragon Hotel, in Hangzhou",
  linkTitle: "Dragon Hotel, in Hangzhou"
}

export default {
  name: 'Accommodation',
  // components: {
  //   Map
  // },
  data() {
    return {
      title: 'Accommodation',
      venueMsg
    }
  }
}
</script>

<style scoped>
/* GET THERE PART */
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/banners/banner_3.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}

#map {
  width: 100%;
  height: 365px;
}

.acc-container {
  padding: 30px 50px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}

.acc-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #c4d7d6;
  flex: auto;
}

#acc p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
  flex: auto;
}

#acc .acc-link {
  margin: 20px 0 20px;
  flex: auto;
  /*vertical-align: center;*/
}
</style>


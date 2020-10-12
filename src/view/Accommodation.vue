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
          <small>{{ venueMsg.subtitle }}</small>
        </h2>
        <p style="white-space: pre-line;">
          {{ venueMsg.content }}
        </p>
        <h2 class="acc-link">
          <a href="http://hangzhoudragonhotel.com/">{{ venueMsg.linkTitle }}</a>
        </h2>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
        <img class="img-responsive" src="@/assets/img/other/position.png" alt="Position Static Map">
      </div>
    </div>

    <!--    酒店宣传照-->
    <div class="acc-container"
         style="display: flex;
         align-items: center;
         justify-content: center;
         flex-direction: column"
         v-for="(item,index) in photosList"
         :key="index"
    >
      <div class="row" style="flex: auto">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img class="img-responsive" :src="item.imgSrc1" alt="Dragon Hotel">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img class="img-responsive" :src="item.imgSrc2" alt="Dragon Hotel">
        </div>
      </div>

      <div class="subtitle">
        <p style="color:#b2b2b2">{{ item.title }}</p>
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
    "The Conference Center of the Dragon Hotel will host the keynote lectures and invited talks. Three additional lecture rooms equipped with standard presentation facilities are ready for parallel sessions.\n" +
    "Registration and exhibition will be arranged in the lobby, and a complimentary pass for entrance to all exhibition halls will be enclosed in the registration package.\n",
  subtitle: "/ Dragon Hotel, in Hangzhou",
  linkTitle: "Official Website Entrance"
}

export default {
  name: 'Accommodation',
  // components: {
  //   Map
  // },
  data() {
    return {
      title: 'Accommodation',
      venueMsg,
      photosList: [
        {
          imgSrc1: require("@/assets/img/scene/hotel_1.jpg"),
          imgSrc2: require("@/assets/img/scene/hotel_2.jpeg"),
          title: 'Panoramic Overview'
        },
        {
          imgSrc1: require("@/assets/img/scene/hotel_7.jpg"),
          imgSrc2: require("@/assets/img/scene/hotel_8.jpg"),
          title: 'Yard and Cafeteria'
        },
        {
          imgSrc1: require("@/assets/img/scene/hotel_4.jpg"),
          imgSrc2: require("@/assets/img/scene/hotel_5.jpg"),
          title: 'Conference Center'
        },
        {
          imgSrc1: require("@/assets/img/scene/hotel_6.jpg"),
          imgSrc2: require("@/assets/img/scene/hotel_3.jpg"),
          title: 'Courtyard Restaurant'
        },
        {
          imgSrc1: require("@/assets/img/scene/hotel_9.jpg"),
          imgSrc2: require("@/assets/img/scene/hotel_10.jpg"),
          title: 'Chinese Classical Charm'
        },
      ],
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

.subtitle {
  padding-top: 40px;
  text-align: center;
  flex: auto;
}
</style>


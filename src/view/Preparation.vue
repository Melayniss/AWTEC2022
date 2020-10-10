<template>
  <div id="Preparation">
    <div class="banner container-fuild text-center">
      {{ title }}
    </div>
    <div class="container">
      <div class="row CompanyIntroduction-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img class="img-responsive center-block" src="@/assets/img/about_img.png" alt="">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h3>{{ subtitle }}</h3>
          <ul>
            <li class=".text-justify"
              v-for="(item,index) in preparationList"
              :key="index"
            >
              {{ item.text }}
              <router-link :to="item.path">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

<!--    杭州美食-->

<!--    <div class="container">-->
<!--      <div class="speaker-container row">-->
<!--        <div class="speaker-item col-xs-12 col-sm-6 col-md-3 wow slideInUp"-->
<!--             v-for="(item,index) in speakerList" :key="index" @click="ServiceClick(item.id)">-->
<!--          <div class="speaker-item-wrapper">-->
<!--            <div class="speaker-item-top">-->
<!--              <h4>{{item.title}}</h4>-->
<!--              <i></i>-->
<!--              <p>{{item.subTitle}}</p>-->
<!--            </div>-->
<!--            <div class="speaker-item-img">-->
<!--              <img :src="item.img" alt="服务">-->
<!--            </div>-->
<!--            <div class="speaker-item-border"></div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->


<!--    杭州风景-->



  </div>
</template>
<script>
import {WOW} from 'wowjs';

export default {
  name: 'Preparation',
  data() {
    return {
      title: 'Preparation',
      subtitle: 'Pre-Work You Need to Focus',
      Route: '',
      preparationList: [
        {
          text: 'Where you will live →',
          title: 'Accommodation',
          path: '/preparation/accommodation'
        },
        {
          text: 'How you come here →',
          title: 'Route',
          path: '/preparation/route'
        },
        {
          text: 'If any question bothers you →',
          title: 'FAQs',
          path: '/preparation/faq'
        },
        {
          text: 'Want to get contact with the committees →',
          title: 'Contact Us',
          path: '/preparation/us'
        }
      ]
    }
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  }
}
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/bar.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}

.row {
  margin-right: 0;
  margin-left: 0;
}

.CompanyIntroduction-container {
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}

.CompanyIntroduction-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}

@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }
}
</style>


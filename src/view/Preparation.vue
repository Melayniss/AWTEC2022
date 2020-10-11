<template>
  <div id="Preparation">
    <div class="banner container-fuild text-center">
      {{ title }}
    </div>
    <div class="container">
      <div class="row preparationIntro-container">
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

    <div class="container">
      <div class="food-container row">
        <div class="food-item col-xs-12 col-sm-6 col-md-3 wow slideInUp"
             v-for="(item,index) in foodList"
             :key="index">
          <div class="food-item-wrapper">
            <div class="food-item-top">
              <h4>{{ item.title }}</h4>
              <i></i>
              <p>{{ item.subTitle }}</p>
            </div>
            <div class="food-item-img">
              <img :src="item.img" :alt="item.description">
            </div>
            <div class="food-item-border"></div>
          </div>
        </div>
      </div>
    </div>


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
      ],
      foodList: [
        {
          title: 'Beggar\'s Chicken',
          subtitle: '',
          img: require('@/assets/img/food_1.jpg'),
          description: ''
        },
        {
          title: 'Beggar\'s Chicken',
          subtitle: '',
          img: require('@/assets/img/food_2.jpg'),
          description: ''
        },
        {
          title: 'Beggar\'s Chicken',
          subtitle: '',
          img: require('@/assets/img/food_3.jpg'),
          description: ''
        },
        {
          title: 'Beggar\'s Chicken',
          subtitle: '',
          img: require('@/assets/img/food_4.jpg'),
          description: ''
        },
        {
          title: 'Beggar\'s Chicken',
          subtitle: '',
          img: require('@/assets/img/food_5.jpg'),
          description: ''
        },
        {
          title: 'Beggar\'s Chicken',
          subtitle: '',
          img: require('@/assets/img/food_6.jpg'),
          description: ''
        },
        {
          title: 'Beggar\'s Chicken',
          subtitle: '',
          img: require('@/assets/img/food_7.jpg'),
          description: ''
        },
        {
          title: 'Beggar\'s Chicken',
          subtitle: '',
          img: require('@/assets/img/food_8.jpg'),
          description: ''
        }
      ],
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
  background-image: url('../assets/img/banner_4.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}

.row {
  margin-right: 0;
  margin-left: 0;
}

.food-container {
  padding: 30px 50px;
}

.preparationIntro-container {
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}

.preparationIntro-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}

.food-item {
  margin-bottom: 50px;
}

.food-item-wrapper {
  cursor: pointer;
  background: rgba(244, 244, 244, 1);
  overflow: hidden;
  position: relative;
}

.food-item-top {
  width: 100%;
  height: 120px;
  padding: 30px;
  text-align: center;
}

.food-item-top > i {
  display: inline-block;
  width: 25px;
  height: 2px;
  background: #28f;
}

.food-item-top > p {
  color: #b2b2b2;
  opacity: 0;
  transform: translateY(10px);
  transition: all .5s ease;
}

.food-item-img {
  width: 100%;
  overflow: hidden;
}

.food-item-img img {
  width: 100%;
  transition: all 0.5s ease;
}

.food-item-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 9999999;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  border: 1px solid #000;
  opacity: 0;
}

.food-item-wrapper:hover .food-item-top > i {
  opacity: 0;
}

.food-item-wrapper:hover .food-item-top > p {
  opacity: 1;
  transform: translateY(-10px);
}

.food-item-wrapper:hover .food-item-img > img {
  transform: scale(1.1, 1.1);
}

.food-item-wrapper:hover > .food-item-border {
  opacity: 1;
  width: 90%;
  height: 90%;
}

@media screen and (max-width: 997px) {
  .preparationIntro-container {
    padding: 10px 0;
    color: #808080;
  }
}
</style>

<!--<div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">-->
<!--          <img class="img-responsive center-block" src="@/assets/img/about_img.png" alt="">-->
<!--        </div>

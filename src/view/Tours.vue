<template>
  <div id="tours">
    <div class="banner container-fluid text-center">
      {{ title }}
    </div>

    <!--    杭州风景-->
    <div class="container-fluid">
      <div class="container">
        <div class="scene-box">
          <div class="text-center">
            <h2>
              {{ scene.title }}
            </h2>
            <br>
            <p style="color:#b2b2b2">
              {{ scene.subtitle }}
            </p>
          </div>

          <div class="container-fluid">
            <div class="box-container row">
              <div class="box-item col-xs-12 col-sm-6 col-md-3 wow slideInUp"
                   v-for="(item,index) in sceneList"
                   :key="index">
                <div class="box-item-wrapper">
                  <div class="box-item-top">
                    <h4>{{ item.title }}</h4>
                    <i></i>
                    <p>{{ item.subtitle }}</p>
                  </div>
                  <div class="box-item-img">
                    <img :src="item.img" :alt="item.description">
                  </div>
                  <div class="box-item-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    杭州美食-->
    <div class="container-fluid">
      <div class="container">
        <div class="food-box">
          <div class="text-center">
            <h2>
              {{ food.title }}
            </h2>
            <br>
            <p style="color:#b2b2b2">
              {{ food.subtitle }}
            </p>
          </div>

          <div class="container-fluid">
            <div class="box-container row">
              <div class="box-item col-xs-12 col-sm-6 col-md-3 wow slideInUp"
                   v-for="(item,index) in foodList"
                   :key="index">
                <div class="box-item-wrapper">
                  <div class="box-item-top">
                    <h4>{{ item.title }}</h4>
                    <i></i>
                    <p>{{ item.subtitle }}</p>
                  </div>
                  <div class="box-item-img">
                    <img :src="item.img" :alt="item.description">
                  </div>
                  <div class="box-item-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import  {WOW} from 'wowjs';

export default {
  name: 'tours',
  data() {
    return {
      title: 'Tours',

      food: {
        title: 'Cuisine in Hangzhou',
        subtitle: 'Fancy Food'
      },
      foodList: [
        {
          title: 'Lotus Rhizome with Sticky Rice',
          subtitle: '',
          img: url('@/assets/img/other/food_1.jpg'),
          description: ''
        },
        {
          title: 'Dongpo\'s braised pork',
          subtitle: '',
          img: url('@/assets/img/other/food_2.jpg'),
          description: ''
        },
        {
          title: 'Stir-fried Shrimps with Longjing Tea',
          subtitle: '',
          img: url('@/assets/img/other/food_3.jpg'),
          description: ''
        },
        {
          title: 'West Lake Fish in Vinegar Gravy',
          subtitle: '',
          img: url('@/assets/img/other/food_4.jpg'),
          description: ''
        },
        {
          title: 'Longjing Tea',
          subtitle: '',
          img: url('@/assets/img/other/food_5.jpg'),
          description: ''
        },
        {
          title: 'ShallotStuffed Pancake',
          subtitle: '',
          img: url('@/assets/img/other/food_6.jpg'),
          description: ''
        },
        {
          title: 'Southern Song Victory Cake',
          subtitle: 'or Dingsheng Cake',
          img: url('@/assets/img/other/food_7.jpg'),
          description: ''
        },
        {
          title: 'Osmanthus cake',
          subtitle: '',
          img: url('@/assets/img/other/food_8.jpg'),
          description: ''
        }
      ],

      scene: {
        title: 'Seasons in Hangzhou',
        subtitle: 'Famous Scenery'
      },
      sceneList: [
        {
          title: 'Spring',
          subtitle: 'Three Pools Reflected in the Moon',
          img: url('../assets/img/scene/hz_spring.jpg'),
          description: ''
        },
        {
          title: 'Summer',
          subtitle: 'Breeze-ruffled Lotus at Quyuan Garden',
          img: url('../assets/img/scene/hz_summer.jpg'),
          description: ''
        },
        {
          title: 'Autumn',
          subtitle: 'Sunset Glow at Leifeng Pagoda',
          img: url('../assets/img/scene/hz_autumn.jpg'),
          description: ''
        },
        {
          title: 'Winter',
          subtitle: 'Remnant Snow on the Broken Bridge',
          img: url('../assets/img/scene/hz_winter.jpg'),
          description: ''
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
  background-image: url("../assets/img/banners/banner_2.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}

.row {
  margin-right: 0;
  margin-left: 0;
}

.box-container {
  padding: 30px 20px;
}

.scene-box {
  margin: 80px 0 0 0;
  padding: 30px;
  transition: all ease 0.5s;
  border: 1px dashed cornflowerblue;
}

.food-box {
  margin: 80px 0;
  padding: 30px;
  transition: all ease 0.5s;
  border: 1px dashed coral;
}

.box-item {
  margin-bottom: 50px;
}

.box-item-wrapper {
  cursor: pointer;
  background: rgba(244, 244, 244, 1);
  overflow: hidden;
  position: relative;
}

.box-item-top {
  width: 100%;
  height: 120px;
  padding: 30px;
  text-align: center;
}

.box-item-top > i {
  display: inline-block;
  width: 25px;
  height: 2px;
  background: #28f;
}

.box-item-top > p {
  color: #b2b2b2;
  opacity: 0;
  transform: translateY(10px);
  transition: all .5s ease;
}

.box-item-img {
  width: 100%;
  overflow: hidden;
}

.box-item-img img {
  width: 100%;
  transition: all 0.5s ease;
}

.box-item-border {
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

.box-item-wrapper:hover .box-item-top > i {
  opacity: 0;
}

.box-item-wrapper:hover .box-item-top > p {
  opacity: 1;
  transform: translateY(-10px);
}

.box-item-wrapper:hover .box-item-img > img {
  transform: scale(1.1, 1.1);
}

.box-item-wrapper:hover > .box-item-border {
  opacity: 1;
  width: 90%;
  height: 90%;
}
</style>


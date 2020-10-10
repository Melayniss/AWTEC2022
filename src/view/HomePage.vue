<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div id="rotation" class="container-fuild">
      <!--      swiper 为已有css组件 支持轮播-->
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
            <img class="swiper-lazy" :data-src="item.img" alt="" src="">
            <div class="swiper-lazy-preloader"></div>
            <div class="swiper-slide-title">
              <h1>
                {{ item.title }}
              </h1>
              <p v-if="item.content!=null && item.subContent!=null">
                {{ item.content }}
                <br>
                {{ item.subContent }}
              </p>
            </div>
          </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>

    <!--Development-->
    <div id="development" class="container-fluid">
      <div class="container">
        <div class="development-container">
          <div class="text-center">
            <h2>
              {{ development.title }}
            </h2>
            <br>
            <p style="color:#b2b2b2">
              {{ development.subtitle }}
            </p>
          </div>

        </div>
      </div>
    </div>


    <!-- Venue -->
    <div id="getHere" class="container-fuild">
      <div class="row getHere">
        <!--        here needs fix. Write container box-->
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img class="img-responsive" src="@/assets/img/hotel_0.jpg" alt="Dragon Hotel">
        </div>

        <!--flex now-->
        <div class="col-xs-12 col-sm-12 col-md-6"
             style="display: flex;flex-direction: column;"
        >
          <h2 class="getHere-title">
            {{ venueMsg.title }}
            <small>{{ venueMsg.viceTitle }}</small>
          </h2>
          <p style="white-space: pre-line;">
            {{ venueMsg.content }}
          </p>

          <h2>
            <a href="http://hangzhoudragonhotel.com/">{{ venueMsg.linkTitle }}</a>
          </h2>

          <a class="btn btn-lg btn-block btn-info" @click="navigateToVenue">{{ venueMsg.detailTitle }}</a>
        </div>
      </div>
    </div>
    <!-- Contacts -->
    <div id="contactUs" class="container-fuild text-center">
      <div class="container contactUs-container wow slideInUp">
        <h1>{{ contactMsg.h1 }}</h1>
        <h3>{{ contactMsg.h3 }}</h3>
        <button
          class="btn btn-default btn-sm"
          onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#3f3f3f';"
          onmouseenter="this.style.backgroundColor='transparent'; this.style.borderColor='#ffffff'; this.style.color='#ffffff';"
          @click="navigateToContact"
        >
          {{ contactMsg.title }}
        </button>
        <div class="contactUs-contactWay">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <!-- The benefit -->
    <div id="benefits" class="container-fuild">
      <div class="container">
        <div class="benefits-title text-center">
          <p>{{ benefitMsg.title }}</p>
          <p>{{ benefitMsg.viceTitle }}</p>
        </div>
        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-3 server-wrapper"
            v-for="(item,index) in benefitsList"
            :key="index"
          >
            <div
              class="server-block wow slideInUp"
              onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'"
              onmouseleave="this.style.color='#666';this.style.borderColor='#c4d7d6'"
            >
              <img class="center-block" :src="item.logo" alt="logo">
              <p class="text-center">{{ item.title }}</p>
              <div
                class="text-center"
                v-html="item.content"
                onmouseenter="this.style.color='#28f'"
                onmouseleave="this.style.color='#c4d7d6'"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import {WOW} from 'wowjs';

const venueMsg = {
  title: "Venue",
  viceTitle: "/ Dragon Hotel, in Hangzhou",
  content:
    "The Dragon Hotel in Hangzhou is the one of the best choices for travellers around the world to visit Hangzhou.\n" +
    "The hotel has ideal location in the heart of Hangzhou's central business district. Close to splendid shopping, and major corporate and government offices.\n" +
    "The Dragon is also on the doorstep of some of China's most revered cultural landmarks. The hotel faces the stunning Baoshi Mountain and is a short walk from historic and picturesque West Lake.\n" +
    "Address: 120 Shuguang Road, Hangzhou, China, 310007\n" +
    "Tel: (86) 400 862 5688",
  linkTitle: "Dragon Hotel, in Hangzhou",
  detailTitle: "Get There"
}

const development = {
  title: "Ocean Energy Development in China",
  subtitle: "As the Largest Energy-Consuming Country in the World"
}

const contactMsg = {
  title: "Contact Us",
  h1: "News and faqs could be found",
  h3: "in the ways below ",
}
const committeeMsg = {
  title: "Local Committee"
}

const benefitMsg = {
  title: "AWTEC 2022",
  viceTitle: "Deliver the most recent and future development."
}


export default {
  name: "HomePage",
  data() {
    return {
      // photograph
      swiperList: [
        {
          img: require("@/assets/img/scene_3.jpg"),
          // path: "",
          title: 'AWTEC 2022',
          content: 'The 6th AWTEC will be held at Hangzhou city in China.',
          subContent: 'On September 11-15 of 2022.',
        },
        {
          img: require("@/assets/img/scene_6.jpg"),
          // path: "",
          title: 'Hangzhou',
          content: 'The capital and the most popular city of Zhejiang Province.',
          subContent: 'Also romanized as Hangchow.'
        },
        {
          img: require("@/assets/img/zju_4.jpg"),
          // path: "",
          title: 'Zhejiang University',
          // content: 'Ranks among the top 3 on Chinese mainland, within the top 100 in the THE WRR and QS World University Rankings.',
        },
        {
          img: require("@/assets/img/zju_3.jpg"),
          path: "",
          title: 'Ocean College',
          // content: 'Working on the ocean energy harvesting technology, and made significant contributions in the China ocean energy development.',
        },
      ],

      development,
      developmentsList: [
        {
          title: "the 13th Five-year Plan for Marine Renewable Energy (2016-2020)"
        },
        {
          title: "the National Key Research and Development Program",
        },
        //有其他的成就就往里面加
      ],

      venueMsg,

      contactMsg,

      // the local committee
      committeeMsg,
      committeeList: [
        {
          logo: require("@/assets/img/local_0.jpg"),
          title:
            "Prof. Dahai ZHANG, Zhejiang University",
          content:
            "An outstanding young scientist in the field of ocean science and technology. Served as the deputy secretary general of the Ocean Technology and Equipment Committee of the China Ocean Society, the member of the Ocean Renewable Energy System Committee of the CCICED."
        },
        {
          logo: require("@/assets/img/local_1.jpg"),
          title:
            "Prof. Wei LI, Zhejiang University",
          content:
            "The executive director of China Renewable Energy Society, director of the Special Committee of Ocean Energy, the expert judge of mechanical subject of the National Natural Science Foundation of China. Having more than 60 authorized invention patents at home and abroad."
        },
        {
          logo: require("@/assets/img/local_2.jpg"),
          title:
            "Dr. Yulin SI, Zhejiang University",
          content:
            "Mainly engaged in the research on offshore wind energy and marine energy, marine equipment intelligent control etc. He has been the PI for projects from Natural Science Foundation of China, China Shipbuilding Industry Corporation etc."
        },
        {
          logo: require("@/assets/img/local_3.jpg"),
          title:
            "Dr. Lin CUI, National Ocean Technology Center",
          content:
            "Dr. Cui from National Ocean Technology Center, is the deputy director of the ocean energy research office in National Ocean Technology Center. He is mainly engaged in the R&D and policy studies of ocean wave and tidal energy and their development in China."
        },
        {
          logo: require("@/assets/img/local_4.jpg"),
          title:
            "Prof. Dezhi NING, Dalian University of Technology",
          content:
            "Mainly engaged in the research on the characteristics of water waves and the interaction between water waves and ocean structures. Ppublished more than 140 academic papers in well-known journals and international conferences at home and abroad."
        },
        {
          logo: require("@/assets/img/local_5.jpg"),
          title:
            "Prof. Hongda SHI, Ocean University of China",
          content:
            "The dean of Engineering College, Ocean University of China. Mainly engaged in the research on ocean environment hydrodynamics, ocean renewable energy utilization and practical technology development, has been the PI for over 10 scientific research projects."
        },
      ],

      benefitMsg,
      benefitsList: [
        {
          logo: require("@/assets/img/tel.png"),
          title: "Date & Location",
          content: "<p>On September 11-15 of 2022</p>At Hangzhou city in China"
        },
        {
          logo: require("@/assets/img/computer.png"),
          title: "Conference Speakers",
          content: "<p>Five keynote speakers</p>Four invited speakers"
        },
        {
          logo: require("@/assets/img/qq.png"),
          title: "Special Tours Planned",
          content: "<p>The ZJU Zhoushan Campus</p>Zhairuoshan Scientific Island"
        },
        {
          logo: require("@/assets/img/skill.png"),
          title: "Regular or Student",
          content: "<p>650 USD (about 4652 CNY)</p>300 USD (about 2147 CNY)"
        }
      ]
    };
  },
  mounted() {
    /* banner-swiper */
    new Swiper(".banner-swiper", {
      loop: true, // 循环模式选项
      effect: 'fade',
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // 延迟加载
      lazy: {
        loadPrevNext: true
      },
      observer: true,
      //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true
      //修改swiper的父元素时，自动初始化swiper
    });

    /* committee-swiper */
    new Swiper(".committee-swiper", {
      loop: true, // 循环模式选项
      slidesPerView: 3,
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      observer: true,
      //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true
      //修改swiper的父元素时，自动初始化swiper
    });

    /* wowjs动画 */
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    })
    wow.init();
  },
  methods: {
    navigateToVenue() {
      this.$router.push('/accommodation');
    },

    navigateToContact() {
      this.$router.push('/contact');
    }
  }
};
</script>

<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* swiper image */
#rotation {
  height: 500px;
}

#rotation .banner-swiper {
  width: 100%;
  height: 100%;
}

#rotation .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}

#rotation .banner-swiper .swiper-slide {
  position: relative;
}

#rotation .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  background: rgba(51, 51, 51, 0.534);
  text-align: center;
  line-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#rotation .banner-swiper .swiper-slide-title > h1 {
  font-size: 50px;
}

#rotation .banner-swiper .swiper-slide-title > p {
  font-size: 20px;
  font-weight: bold;
}

.development-container {
  margin: 80px 0 0 0;
  padding: 30px;
  transition: all ease 0.5s;
  border: 1px dashed lightseagreen;
}

/* GET HERE PART */
#getHere {
  padding: 80px;
  transition: all ease 0.6s;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#getHere .getHere-title {
  /*padding-bottom: 10px;*/
  border-bottom: 1px solid #c4d7d6;
}

#getHere p {
  font-size: 14px;
  color: #333333;
  line-height: 2rem;
}

/* contact ways */
#contactUs {
  color: #fff;
  height: 400px;
  background: url("../assets/img/lighthouse.jpg") 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
}

#contactUs .contactUs-container {
  padding-top: 50px;
}

#contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top: 40px;
}

#contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 30px;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(1) {
  background: url("../assets/img/weixin.png") 0 0 no-repeat;
  background-size: 100% 100%;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(2) {
  background: url("../assets/img/weibo.png") 0 0 no-repeat;
  background-size: 100% 100%;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(3) {
  background: url("../assets/img/twitter.png") 0 0 no-repeat;
  background-size: 100% 100%;
}

/* committee */
#committee {
  padding: 50px 0;
  box-sizing: border-box;
  background: #efefef;
  transition: all ease 0.6s;
}

#committee .committee-title {
  font-size: 30px;
  color: rgb(102, 102, 102);
  margin: 0 0 30px;
}

#committee .committee-block {
  background: #fff;
  padding: 30px;
}

#committee .committee-logo img {
  width: 94px;
  height: 125px;
  border: 1px solid #c4d7d6;
}

#committee .committee-quote img {
  width: 34px;
  height: 34px;
}

#committee .committee-description {
  padding-bottom: 20px;
  border-bottom: 1px solid #0ce9f1;
}

#committee .committee-name {
  padding-top: 20px;
}

/* What we have */
#benefits {
  padding: 100px;
}

#benefits .benefits-title {
  margin-bottom: 50px;
}

#benefits .benefits-title p:nth-of-type(1) {
  font-size: 25px;
  font-weight: 500;
}

#benefits .benefits-title p:nth-of-type(2) {
  font-size: 14px;
}

#benefits .server-block {
  padding: 50px 20px;
  border: 1px solid #c4d7d6;
  border-bottom: 5px solid #c4d7d6;
}

#benefits .server-block img {
  width: 48px;
  height: 48px;
}

#benefits .server-block > p {
  font-size: 20px;
  margin: 30px 0;
}

#benefits .server-block > div {
  color: #c4d7d6;
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #rotation {
    height: 400px;
  }

  #getHere {
    padding: 30px;
  }

  #getHere .getHere-title {
    font-size: 20px;
  }

  #getHere .getHere-link {
    font-size: 20px;
    margin: 10px 0 10px;
  }

  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }

  #contactUs .contactUs-container {
    padding-top: 0;
  }

  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }

  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }

  #committee {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }

  #committee .committee-title {
    font-size: 16px;
    font-weight: bold;
  }

  #committee .committee-logo img {
    width: 48px;
    height: 48px;
  }

  #committee .committee-block {
    padding: 30px;
  }

  #committee .committee-block > div {
    padding: 30px 0;
  }

  #benefits {
    padding: 20px 0;
    transition: all ease 0.6s;
  }

  #benefits .benefits-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }

  #benefits .benefits-title p:nth-of-type(2) {
    font-size: 12px;
  }

  #benefits .server-block {
    padding: 50px 0;
    border: 1px solid #c4d7d6;
    border-bottom: 5px solid #c4d7d6;
  }

  #benefits .server-block img {
    width: 48px;
    height: 48px;
  }

  #benefits .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }

  #benefits .server-block > div {
    color: #c4d7d6;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #rotation {
    height: 400px;
  }

  #getHere {
    padding: 60px;
  }

  #getHere .getHere-title {
    font-size: 30px;
  }

  #getHere .getHere-link {
    font-size: 30px;
    margin: 30px 0 15px;
  }

  #contactUs {
    height: 300px;
  }

  #contactUs .contactUs-container {
    padding-top: 50px;
  }

  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }

  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }

  #committee .committee-title {
    font-size: 24px;
  }

  #benefits {
    padding: 20px 0;
  }
}
</style>

<!-- Committee -->
<!--    <div id="committee" class="container-fuild">-->
<!--      <div class="container">-->
<!--        <p class="committee-title text-center">{{ committeeMsg.title }}</p>-->
<!--        &lt;!&ndash;        Here is the way to code the xml in function.&ndash;&gt;-->
<!--        <div class="swiper-container committee-swiper hidden-xs">-->
<!--          <div class="swiper-wrapper">-->
<!--            <div-->
<!--              class="swiper-slide committee-block"-->
<!--              v-for="(item,index) in committeeList"-->
<!--              :key="index"-->
<!--            >-->
<!--              <div class="committee-logo">-->
<!--                <img class="center-block" :src="item.logo" alt="logo">-->
<!--              </div>-->
<!--              <div class="committee-quote">-->
<!--                <img src="@/assets/img/quote.png" alt="引号">-->
<!--              </div>-->
<!--              <div class="committee-description">-->
<!--                <small>{{ item.content }}</small>-->
<!--              </div>-->
<!--              <div class="committee-name">{{ item.title }}</div>-->
<!--            </div>-->
<!--          </div>-->
<!--          &lt;!&ndash; 如果需要导航按钮 &ndash;&gt;-->
<!--          <div class="swiper-button-prev"></div>-->
<!--          <div class="swiper-button-next"></div>-->
<!--        </div>-->
<!--        <div class="row visible-xs committee-block">-->
<!--          <div class="col-xs-12" v-for="(item,index) in committeeList" :key="index">-->
<!--            <div class="committee-logo">-->
<!--              <img class="center-block" :src="item.logo" alt="logo">-->
<!--            </div>-->
<!--            <div class="committee-quote">-->
<!--              <img src="@/assets/img/quote.png" alt="引号">-->
<!--            </div>-->
<!--            <div class="committee-description">-->
<!--              <small>{{ item.content }}</small>-->
<!--            </div>-->
<!--            <div class="committee-name">-->
<!--              <small>{{ item.title }}</small>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

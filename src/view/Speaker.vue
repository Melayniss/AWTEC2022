<template>
  <div id="speaker">
    <div class="container text-center">
      <h3>{{ title }}</h3>
      <p style="color:#b2b2b2">{{ explanation }}</p>
    </div>
    <div class="container">
      <div class="speaker-container row">
        <div class="speaker-item col-xs-12 col-sm-6 col-md-3 wow slideInUp"
             v-for="(item,index) in SpeakersList" :key="index" @click="ServiceClick(item.id)">
          <div class="speaker-item-wrapper">
            <div class="speaker-item-top">
              <h4>{{ item.title }}</h4>
              <i></i>
              <p>{{ item.subtitle }}</p>
            </div>
            <div class="speaker-item-img">
              <img :src="item.img" alt="speaker">
            </div>
            <div class="speaker-item-border"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {WOW} from 'wowjs';

export default {
  name: 'speaker',
  data() {
    return {
      title: 'Speakers Present',
      explanation: '5 keynote speakers & 4 invited speakers',
      SpeakersList: [
        {
          id: 'speaker1',
          title: 'Wave Energy',
          subtitle: 'Customize App',
          img: require('@/assets/img/service1.jpg')
        },
        {
          id: 'speaker2',
          title: 'Tidal Range',
          subtitle: 'Current Energy',
          img: require('@/assets/img/service2.jpg')
        },
        {
          id: 'speaker3',
          title: 'Floating Wind Energy',
          subtitle: 'hybrid/co-located systems',
          img: require('@/assets/img/service3.jpg')
        },
        {
          id: 'speaker4',
          title: 'Future Development',
          subtitle: 'Special Sessions',
          img: require('@/assets/img/service4.jpg')
        }
      ]
    }
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
  methods: {
    ServiceClick(id) {
      this.$router.push({
        name: 'speakerDetail',
        params: {
          id: id
        }
      })
    }
  }
}
</script>
<style scoped>
.speaker-container {
  padding: 30px 50px;
}

.speaker-item {
  margin-bottom: 50px;
}

.speaker-item-wrapper {
  cursor: pointer;
  background: rgba(244, 244, 244, 1);
  overflow: hidden;
  position: relative;
}

.speaker-item-top {
  width: 100%;
  height: 120px;
  padding: 30px;
  text-align: center;
}

.speaker-item-top > i {
  display: inline-block;
  width: 25px;
  height: 2px;
  background: #28f;
}

.speaker-item-top > p {
  color: #b2b2b2;
  opacity: 0;
  transform: translateY(10px);
  transition: all .5s ease;
}

.speaker-item-img {
  width: 100%;
  overflow: hidden;
}

.speaker-item-img img {
  width: 100%;
  transition: all 0.5s ease;
}

.speaker-item-border {
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

.speaker-item-wrapper:hover .speaker-item-top > i {
  opacity: 0;
}

.speaker-item-wrapper:hover .speaker-item-top > p {
  opacity: 1;
  transform: translateY(-10px);
}

.speaker-item-wrapper:hover .speaker-item-img > img {
  transform: scale(1.1, 1.1);
}

.speaker-item-wrapper:hover > .speaker-item-border {
  opacity: 1;
  width: 90%;
  height: 90%;
}
</style>

<template>
  <div id="Programs">
    <ul class="routine-container container-fuild">
      <li v-for="(item,index) in programsList" :key="index" class="wow fadeIn">
        <div class="content">
          <p class="routine-title">{{ item.title }}</p>
          <h4 class="routine-content">{{ item.introduction }}</h4>
        </div>
        <div class="time">
          <p>{{ item.date }}</p>
          <span >{{ item.year }}</span>
        </div>
        <div class="circle">
          <img src="../assets/img/icon/circle.png" alt="">
          <i class="line center-block"></i>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {WOW} from 'wowjs';

export default {
  name: 'Programs',
  data() {
    return {
      programsList: [
        {
          title: 'Oral Presentation',
          introduction: 'Keynote speech & Invited speech & Paper presentation.',
          date: '09-11',
          year: '2022'
        },
        {
          title: 'First Day',
          introduction: 'Registration & Welcome Reception',
          date: '09-11',
          year: '2022'
        },
        {
          title: 'Second Day',
          introduction: 'Opening Ceremony & Lectures on Wave Energy & Parallel Sessions',
          date: '09-12',
          year: '2022'
        },
        {
          title: 'Third Day',
          introduction: 'Keynote Lectures on Tidal/Ocean Current Energy & Poster sessions',
          date: '09-13',
          year: '2022'
        },
        {
          title: 'Fourth Day',
          introduction: 'Keynote Speech on Hybrid Offshore Wind Energy & Closing Ceremony',
          date: '09-14',
          year: '2022'
        },
        {
          title: 'Fifth Day',
          introduction: 'Technical Tour',
          date: '09-15',
          year: '2022'
        }
      ],
    }
  },
  mounted() {
    let wow = new WOW();
    wow.init();
  },
}
</script>
<style scoped>
.routine-content{
  font-style: italic;
  /*color: #134857;*/
  /*指定字体颜色之后active失效*/
}

.routine-title{
  font-style: italic;
  /*color: #134857;*/
  font-weight: bold;
}

.routine-container {
  overflow: hidden;
  margin-bottom: 0;
}

.routine-container > li {
  width: 55.65%;
  height: 120px;
  float: left;
  color: #333;
  text-align: right;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
}

.routine-container > li:hover {
  color: #93b5cf;
  border: 1px solid #93b5cf;
  cursor: pointer;
}

.routine-container > li:nth-of-type(2n) {
  float: right;
  text-align: left;
}

.routine-container > li > .content {
  width: 60%;
  float: left;
  padding: 20px 0;
}

.routine-container > li > .time {
  width: 20%;
  float: left;
  padding: 10px 0;
}

.routine-container > li > .time > p {
  font-size: 30px;
  margin: 5px 0;
}

.routine-container > li > .circle {
  width: 20%;
  height: 100%;
  float: left;
  position: relative;
}

.routine-container > li > .circle > img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
}

.routine-container > li > .circle > i {
  display: block;
  width: 1px;
  height: 100%;
  background: #707070;
}

.routine-container > li:nth-of-type(2n) > .content {
  float: right;
}

.routine-container > li:nth-of-type(2n) > .time {
  float: right;
}

.routine-container > li:nth-of-type(2n) > .circle {
  float: right;
}

.routine-container > li:nth-of-type(1) > .circle > i {
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}

@media screen and (max-width: 767px) {
  .routine-container > li {
    width: 100%;
  }

  .routine-container > li > .content {
    width: 70%;
    text-align: left;
    float: right;
  }

  .routine-container > li > .time {
    width: 30%;
    text-align: left;
    float: right;
  }

  .routine-container > li > .circle {
    display: none;
  }
}
</style>

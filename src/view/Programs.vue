<template>
  <div id="Programs">
    <ul class="routine-container container-fuild">
      <li v-for="(item,index) in programsList" :key="index" class="wow fadeIn">
        <div class="content">
          <p>{{item.title}}</p>
          <p>{{item.introduction}}</p>
        </div>
        <div class="time">
          <p>{{item.date}}</p>
          <span>{{item.year}}</span>
        </div>
        <div class="circle">
          <img src="../assets/img/circle.png" alt="">
          <i class="line center-block"></i>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
  name: 'Programs',
  data(){
    return{
      programsList:[
        {
          title: 'Oral Presentation',
          introduction: 'Keynote speech for 45 minutes;' + '\n' +
            'Invited speech for 30 minutes;' +
            'Paper presentation for 15 or 20 minutes each.',
          date: '09-11',
          year: '2020'
        },
        {
          title: 'Oral Presentation',
          introduction: 'Keynote speech for 45 minutes;' + '\n' +
            'Invited speech for 30 minutes;' +
            'Paper presentation for 15 or 20 minutes each.',
          date: '09-11',
          year: '2020'
        },
        {
          title: 'Oral Presentation',
          introduction: 'Keynote speech for 45 minutes;' + '\n' +
            'Invited speech for 30 minutes;' +
            'Paper presentation for 15 or 20 minutes each.',
          date: '09-11',
          year: '2020'
        },
        {
          title: 'Oral Presentation',
          introduction: 'Keynote speech for 45 minutes;' + '\n' +
            'Invited speech for 30 minutes;' +
            'Paper presentation for 15 or 20 minutes each.',
          date: '09-11',
          year: '2020'
        },
        {
          title: 'Oral Presentation',
          introduction: 'Keynote speech for 45 minutes;' + '\n' +
            'Invited speech for 30 minutes;' +
            'Paper presentation for 15 or 20 minutes each.',
          date: '09-11',
          year: '2020'
        },
        {
          title: 'Oral Presentation',
          introduction: 'Keynote speech for 45 minutes;' + '\n' +
            'Invited speech for 30 minutes;' +
            'Paper presentation for 15 or 20 minutes each.',
          date: '09-11',
          year: '2020'
        }
      ],
    }
  },
  mounted(){
    let wow = new WOW();
    wow.init();
  },
}
</script>
<style scoped>
.routine-container{
  overflow: hidden;
  margin-bottom: 0;
}
.routine-container>li{
  width: 55.65%;
  height: 120px;
  float: left;
  color: #333;
  text-align: right;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
}
.routine-container>li:hover{
  color: #93b5cf;
  border: 1px solid #93b5cf;
  cursor: pointer;
}
.routine-container>li:nth-of-type(2n){
  float: right;
  text-align: left;
}
.routine-container>li>.content{
  width: 60%;
  float: left;
  padding: 20px 0;
}
.routine-container>li>.time{
  width: 20%;
  float: left;
  padding: 10px 0;
}
.routine-container>li>.time>p{
  font-size: 30px;
  margin: 5px 0;
}
.routine-container>li>.circle{
  width: 20%;
  height: 100%;
  float: left;
  position: relative;
}
.routine-container>li>.circle>img{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
}
.routine-container>li>.circle>i{
  display: block;
  width: 1px;
  height: 100%;
  background: #707070;
}
.routine-container>li:nth-of-type(2n)>.content{
  float: right;
}
.routine-container>li:nth-of-type(2n)>.time{
  float: right;
}
.routine-container>li:nth-of-type(2n)>.circle{
  float: right;
}
.routine-container>li:nth-of-type(1)>.circle>i{
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}
@media screen and (max-width: 767px){
  .routine-container>li{
    width: 100%;
  }
  .routine-container>li>.content{
    width: 70%;
    text-align: left;
    float: right;
  }
  .routine-container>li>.time{
    width: 30%;
    text-align: left;
    float: right;
  }
  .routine-container>li>.circle{
    display: none;
  }
}
</style>

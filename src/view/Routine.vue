<template>
  <div id="Routine">
    <div class="banner container-fuild text-center">
      {{ title }}
    </div>

    <div class="container">
      <div class="container text-center">
        <h3>Conference Routine</h3>
        <p style="color:#b2b2b2">Significant Mentions</p>
      </div>
      <div class="nav container text-center">
        <a v-for="(item,index) in routineList"
           :key="index"
           :class="index==navIndex?'active':''"
           @click="navClick(index)">
          <router-link :to="item.path">
            {{item.title}}
          </router-link>
        </a>
      </div>
      <div class="wow slideInUp">
        <router-view></router-view>
      </div>
      <div class="contaianer-fuild text-center more">
        <i class="glyphicon glyphicon-th"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
  name: 'Routine',
  data(){
    return{
      title: 'Summary',
      navIndex: sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0,
      routineList:[
        {
          path: '/routine/dates',
          title: 'Key Dates'
        },
        {
          path: '/routine/programs',
          title: 'Programs'
        }
      ]
    }
  },
  mounted(){
    let wow = new WOW();
    wow.init();
  },
  methods: {
    navClick(index){
      this.navIndex = index;
      sessionStorage.setItem('navIndex', index);
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
  background-image: url('../assets/img/banners/banner_6.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}

.nav{
  margin: 20px 0;
}
.nav>a{
  display: inline-block;
  text-decoration: none;
  width: 120px;
  height: 45px;
  line-height: 45px;
  color: #333;
  border: 1px solid #333;
  border-radius: 5%;
}
.nav>a.active{
  color: #93b5cf;
  border-color: #93b5cf;
}
.nav>a:hover{
  color: #93b5cf;
  border-color: #93b5cf;
}

.more{
  font-size: 25px;
  color: #707070;
}
.more>i{
  cursor: pointer;
}
</style>

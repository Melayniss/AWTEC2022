<template>
  <div id="Routine">
    <div class="container">
      <div class="container text-center">
        <h3>Conference Routine</h3>
        <p style="color:#b2b2b2">Significant Mentions</p>
      </div>
      <div class="nav container text-center">
        <a class="active" v-for="(item,index) in routineList" :key="index">
          <router-link :to="item.path">
            {{item.title}}
          </router-link>
        </a>
      </div>
      <div class="wow bounceInDown">
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
}
</script>
<style scoped>
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

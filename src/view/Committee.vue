<template>
  <div id="Committee" class="container">
    <div class="row">
      <div id="left" class="col-md-4 col-xs-12">
        <ul class="left-container wow bounceInLeft">
          <p>Committee</p>
          <li v-for="(item,index) in committeeList" :key="index">
            <router-link :to=item.path>{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <div id="right" class="col-md-8 col-xs-12  wow bounceInRight">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import {WOW} from "wowjs";

  export default {
    name: 'Committee',
    data() {
      return {
        committeeList: [
          {
            path: '/committee/local',
            name: 'Local Committees',
          }, {
            path: '/committee/board',
            name: 'Board and Other Committees',
          }
        ]
      }
    },
    mounted() {
      var wow = new WOW();
      wow.init();
    },
  }
</script>

<style scoped>
  #left {
    margin: 50px 0;
  }

  .left-container {
    width: 60%;
    margin: 0 auto;
    border: 1px solid #134857;
    border-radius: 5px;
  }

  .left-container > p {
    text-align: center;
    line-height: 45px;
    padding: 0;
    margin: 0;
    background: #134857;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  .left-container > li {
    text-align: center;
    height: 38px;
    line-height: 38px;
    margin: 0;
    border-top: 1px solid #134857;
  }

  .left-container > li > a {
    text-decoration: none;
  }

  .left-container > li:hover {
    background: #928989;
  }

  #right {
    padding: 50px 0;
  }

  @media screen and (max-width: 768px) {
    #right {
      padding: 15px;
    }
  }
</style>


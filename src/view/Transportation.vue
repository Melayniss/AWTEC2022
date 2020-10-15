<template>
  <div id="Transportation">
    <div class="banner container-fuild text-center">
      {{ title }}
    </div>

    <div class="container-fuild route-container">
      <div class="col-xs-12 col-sm-12 col-md-6">
        <h2 class="route-title">
          {{ routeMsg.title }}
          <small>{{ routeMsg.subtitle }}</small>
        </h2>

        <p class="route-p">
          {{ routeMsg.content }}
        </p>

        <ol v-for="(item,index) in routeMsg.waysList"
            :key="index">
          <li class="route-li" v-html="item.content">
          </li>
        </ol>

        <h2 class="route-link">
          <a href="http://hangzhoudragonhotel.com/">{{ routeMsg.linkTitle }}</a>
        </h2>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-6">
        <div id="map" class="wow zoomIn"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {WOW} from 'wowjs'
import BMap from "BMap";

export default {
  name: "Transportation",
  data() {
    return {
      title: 'Transportation',
      routeMsg: {
        title: 'Routes',
        subtitle: 'Convenient Ways',
        content: 'A very broad transportation system has been established in Hangzhou, including international airports and railway stations. In order to reach the venue, you will have the following kinds of transportation routes to choose from:',
        waysList: [
          {
            content: '1. If you arrive in Hangzhou by air at Hangzhou Xiaoshan International Airport, you may take a taxi from the airport to the hotel directly. (Distance: 32 km, Taxi fare: about RMB120).',
          },
          {
            content: '2. If you arrive in Hangzhou by train at East Railway Station, you may take metro line 1 to Fengqi Road station firstly, and then take a taxi to the hotel. (Distance: 3.6km, Taxi fare: about RMB12) or you may take a taxi to the hotel directly. (Distance: 8.2km, Taxi fare: RMB30)',
          },
          {
            content: '3. If you arrive in Shanghai by air at Shanghai Pudong International Airport (airport code: PVG), you may:' +
              '<br>' +
              '(1) Take a long-distance bus to Hangzhou (around 3 hours, Bus fare: RMB 100). The bus station is located between the two terminals of the Pudong Airport. The destination in Hangzhou is Huanglong Tourists Center. Then you may take a taxi to the hotel. (Distance: 2.6km, Taxi fare: about RMB 10).' +
              '<br>' +
              'Plan more by opening: <a href="http://en.shairport.com/pudongair.html">http://en.shairport.com/pudongair.html</a>' +
              '<br>' +
              '(2) or take metro line 2 to Shanghai Hongqiao Railway Station (around 1.5 hours). Then, refer to way 4th.' +
              '<br>' +
              'Plan more by opening: <a href="http://service.shmetro.com/en/">http://service.shmetro.com/en/</a>',
          },
          {
            content: '4. If you arrive in Shanghai by air at Shanghai Hongqiao International Airport (airport code: SHA), you may take metro line 10 or take a taxi to the Hongqiao Railway Station, and then take a high speed train to Hangzhou Railway Station or Hangzhou East Railway Station (about 1 hour for a high speed train), then refer way 2rd.' +
              '<br>' +
              'Plan more by opening: <a href="http://en.shairport.com/hongqiaoair.html">http://en.shairport.com/hongqiaoair.html</a>',
          },
          {
            content: '5. If you arrive in Beijing or other major cities in China, you may take a flight to Hangzhou, then refer to 1, or take a train to Hangzhou, then refer way 2rd.',
          },
          {
            content: '6. If you arrive in Hongkong or Macau, you may transfer to Hangzhou by air. However, if you like to visit Hongkong or Macau, usually you need obtain a special entry permit in advance. Please consult the Chinese Embassy/Consulate close to you for more information.',
          },
          {
            content: 'A more detailed travel guide can be found in <a href="https://wikitravel.org/en/Hangzhou">https://wikitravel.org/en/Hangzhou</a>'
          }
        ],
      }
    };
  },
  mounted() {
    var content =
      "<h3 style='margin:0 0 5px 0;padding:0.2em 0'>Dragon Hotel</h3>" +
      "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>Address: 120 Shuguang Road, Xihu District, Hangzhou City, Zhejiang Province</p>" +
      "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>Phone Number: (0571) 87998833</p>" +
      "</div>";
    // 采用内嵌HTML方式编写地图插件

    var map = new BMap.Map("map"); // 创建地图实例

    var point = new BMap.Point(120.149368, 30.273372); // 创建点坐标
    //此处使用百度地图坐标拾取系统获得定点坐标
    //为 http://api.map.baidu.com/lbsapi/getpoint/index.html

    var marker = new BMap.Marker(point); // 创建标注

    var infoWindow = new BMap.InfoWindow(
      content
    ); // 创建信息窗口对象

    map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
    map.addOverlay(marker); // 将标注添加到地图中
    // marker.addEventListener("click",function (){
    //   this.openInfoWindow(infoWindow);
    // })
    // //点击后再出现图标
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
    var wow = new WOW();
    wow.init();
  }
};
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banners/banner_5.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}

.route-container {
  padding: 50px 0;
  transition: all ease 0.5s;
  /*box-sizing: border-box;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#map {
  width: 100%;
  height: 365px;
}

.row {
  margin-right: 0;
  margin-left: 0;
}

.route-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #c4d7d6;
  flex: auto;
}

#route p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
  flex: auto;
}

#route .route-link {
  margin: 20px 0 20px;
  flex: auto;
  /*vertical-align: center;*/
}

.route-p {
  white-space: pre-wrap;
  word-break: break-word;
  text-align: left;
}

.route-li {
  text-align: left;
}

@media screen and (max-width: 997px) {
  .route-container {
    padding: 20px 0;
  }
}
</style>


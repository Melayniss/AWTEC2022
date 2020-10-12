<template>
  <div id="Route">
    <div class="banner container-fuild text-center">
      {{ title }}
    </div>
    <div class="container">
      <div class="container-fuild">
        <div class="route-container">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div id="map" class="wow zoomIn"></div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6">
            <h2 class="route-title">
              {{ routeMsg.title }}
              <small>{{ routeMsg.subtitle }}</small>
            </h2>

            <p style="white-space: pre-line;">
              {{ routeMsg.content }}
            </p>

            <ul v-for="(item,index) in routeMsg.waysList"
                :key="index">
              <li>
                <p >
                  {{ item.content }}
                </p>
              </li>
            </ul>

            <h2 class="route-link">
              <a href="http://hangzhoudragonhotel.com/">{{ routeMsg.linkTitle }}</a>
            </h2>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {WOW} from 'wowjs'
import BMap from "BMap";

export default {
  name: "Router",
  data() {
    return {
      title: 'Route',
      routeMsg: {
        title: 'Route',
        subtitle: 'Transportation Ways',
        content: 'A very broad transportation system has been established in Hangzhou, including international airports and railway stations.\n' +
          'In order to reach the venue, you will have the following kinds of transportation routes to choose from:',
        waysList: [
          {
            content: '',
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
  padding: 80px 0;
  transition: all ease 0.5s;
  box-sizing: border-box;
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

@media screen and (max-width: 997px) {
  .route-container {
    padding: 20px 0;
  }
}
</style>


<template>
  <div id="Accommodation" class="container-fuild">
    <div class="banner container-fuild text-center">
      {{ title }}
    </div>
    <div id="acc" class="row acc-container">
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div id="map" class="wow zoomIn"></div>
<!--        可以单独将其拆分为一个插件-->
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 flex-container">
        <h2 class="acc-title">
          {{ venueMsg.title }}
          <small>{{ venueMsg.viceTitle }}</small>
        </h2>
        <p style="white-space: pre-line;">
          {{ venueMsg.content }}
        </p>
        <h2 class="acc-link">
          <a href="http://hangzhoudragonhotel.com/">{{ venueMsg.linkTitle }}</a>
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
import {WOW} from 'wowjs'
import BMap from "BMap";

const venueMsg = {
  title: "Venue",
  content:
    "The Dragon Hotel in Hangzhou is the one of the best choices for travellers around the world to visit Hangzhou.\n" +
    "The hotel has ideal location in the heart of Hangzhou's central business district. Close to splendid shopping, and major corporate and government offices.\n" +
    "The Dragon is also on the doorstep of some of China's most revered cultural landmarks. The hotel faces the stunning Baoshi Mountain and is a short walk from historic and picturesque West Lake.\n" +
    "Address: 120 Shuguang Road, Hangzhou, China, 310007\n" +
    "Tel: (86) 400 862 5688",
  viceTitle: "/ Dragon Hotel, in Hangzhou",
  linkTitle: "Dragon Hotel, in Hangzhou"
}

export default {
  name: 'Accommodation',
  data() {
    return {
      title: 'Accommodation',
      venueMsg
    }
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
}
</script>

<style scoped>
/* GET THERE PART */
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/banner1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}

#map {
  width: 100%;
  height: 365px;
}

.acc-container {
  padding: 30px 50px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}

.flex-container{
  flex-direction: column;
}

.acc-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #c4d7d6;
  flex: auto;
}

#acc p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
  flex: auto;
}

#acc .acc-link {
  margin: 20px 0 20px;
  flex: auto;
  /*vertical-align: center;*/
}
</style>


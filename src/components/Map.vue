<template>
  <div id="Map">
    <div id="map-box" class="wow zoomIn">
    </div>
  </div>
</template>

<script>
import {WOW} from "wowjs";
import BMap from "BMap";

export default {
  name: "Map",
  data() {
    return {};
  },
  mounted() {
    var content =
      "<h3 style='margin:0 0 5px 0;padding:0.2em 0'>Dragon Hotel</h3>" +
      "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>Address: 120 Shuguang Road, Xihu District, Hangzhou City, Zhejiang Province</p>" +
      "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>Phone Number: (0571) 87998833</p>" +
      "</div>";
    // 采用内嵌HTML方式编写地图插件

    var Map = new BMap.Map("Map"); // 创建地图实例

    var point = new BMap.Point(120.149368, 30.273372); // 创建点坐标
    //此处使用百度地图坐标拾取系统获得定点坐标
    //为 http://api.map.baidu.com/lbsapi/getpoint/index.html

    var marker = new BMap.Marker(point); // 创建标注

    var infoWindow = new BMap.InfoWindow(
      content
    ); // 创建信息窗口对象

    Map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
    Map.addOverlay(marker); // 将标注添加到地图中
    // marker.addEventListener("click",function (){
    //   this.openInfoWindow(infoWindow);
    // })
    // //点击后再出现图标
    Map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    Map.openInfoWindow(infoWindow, Map.getCenter()); // 打开信息窗口
    var wow = new WOW();
    wow.init();
  }
}
</script>

<style scoped>
#map-box {
  width: 100%;
  height: 365px;
}
</style>

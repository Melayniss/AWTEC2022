<template>
  <div id="Us">
    <div class="banner container-fuild text-center">{{ title }}</div>
    <div class="container">
      <div class="container-fuild Contact_us-container">
        <div class="row">
<!--          <div class="col-xs-12 col-sm-12 col-md-6">-->
<!--            <form class="form-horizontal" role="form">-->
<!--              <div class="form-group">-->
<!--                <label for="name" class="col-sm-2 control-label">{{ form.name }}</label>-->
<!--                <div class="col-sm-10 col-xs-12">-->
<!--                  <input type="text" class="form-control" id="name" :placeholder="form.nameDes">-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="form-group">-->
<!--                <label for="email" class="col-sm-2 control-label">{{ form.email }}</label>-->
<!--                <div class="col-sm-10">-->
<!--                  <input type="text" class="form-control" id="email" :placeholder="form.emailDes">-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="form-group">-->
<!--                <label for="tel" class="col-sm-2 control-label">{{ form.phone }}</label>-->
<!--                <div class="col-sm-10">-->
<!--                  <input type="text" class="form-control" id="tel" :placeholder="form.phoneDes">-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="form-group">-->
<!--                <label for="content" class="col-sm-2 control-label">{{ form.remark }}</label>-->
<!--                <div class="col-sm-10">-->
<!--                  <textarea class="form-control" id="content" rows="8" :placeholder="form.remarkDes"></textarea>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="form-group">-->
<!--                <div class="col-sm-offset-2 col-sm-10">-->
<!--                  <button type="submit" class="btn btn-default btn-block">{{ submit }}</button>-->
<!--                </div>-->
<!--              </div>-->
<!--            </form>-->
<!--          </div>-->

          <div class="col-xs-12 col-sm-12 col-md-6">
            <div id="map" class="wow zoomIn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
import BMap from "BMap";

const form = {
  name: 'Name',
  nameDes: 'Such as \'Tom\'',
  email: 'Email',
  emailDes: 'Tom@xxx.com',
  phone: 'Phone',
  phoneDes: '123-12345678',
  remark: 'Remark',
  remarkDes: 'What\'s the problems? Any help we can offer you?'
}

export default {
  name: "Us",
  data() {
    return {
      title: 'Contact Us',
      form,
      submit: 'Submit'
    };
  },
  mounted() {
    var map = new BMap.Map("map"); // 创建地图实例
    var point = new BMap.Point(120.149368,30.273372); // 创建点坐标
    //此处使用百度地图坐标拾取系统获得定点坐标
    //为 http://api.map.baidu.com/lbsapi/getpoint/index.html
    //可采用通用API内嵌之后的坐标查找以及路线规划
    map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    var opts = {
      width: 50, // 信息窗口宽度
      height: 10, // 信息窗口高度
      title: "Dragon Hotel", // 信息窗口标题
    };
    var infoWindow = new BMap.InfoWindow(
      "(0571) 87998833",
      opts,
    ); // 创建信息窗口对象
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
  background-image: url("../assets/img/banner_1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.Contact_us-container {
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
@media screen and (max-width: 997px) {
  .Contact_us-container {
    padding: 20px 0;
  }
}
</style>


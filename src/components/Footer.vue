<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <img src="@/assets/img/logo_white.png" alt="logo图">
    </div>
    <p class="title">AWTEC 2022 in Hang Zhou</p>
    <p class="address_tel_fax">
      <span>Address: Dragon Hotel</span>
      <span>Tel: 888-888-888</span>
      <span>WeChat: 8888-88888888</span>
    </p>
    <p class="email_wx">
      <span>E-mail: zhangdahai@zju.edu.cn</span>
      <span>Facebook: To be fulfill</span>
    </p>
    <p class="copyright">Copyright &copy; 2018 - 2019 Melayniss</p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #134857;
  overflow: hidden;
  text-align: center;
}
.logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copyright {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copyright {
  font-size: 12px;
  margin: 30px 0 10px;
}
}
</style>


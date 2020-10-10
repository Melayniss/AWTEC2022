<template>
  <div id="Us">
    <div class="banner container-fuild text-center">{{ title }}</div>
    <div class="container">
      <div class="container-fuild Contact_us-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label">{{ form.name }}</label>
                <div class="col-sm-10 col-xs-12">
                  <input type="text" class="form-control" id="name" :placeholder="form.nameDes">
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-sm-2 control-label">{{ form.email }}</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="email" :placeholder="form.emailDes">
                </div>
              </div>
              <div class="form-group">
                <label for="tel" class="col-sm-2 control-label">{{ form.phone }}</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="tel" :placeholder="form.phoneDes">
                </div>
              </div>
              <div class="form-group">
                <label for="content" class="col-sm-2 control-label">{{ form.remark }}</label>
                <div class="col-sm-10">
                  <textarea class="form-control" id="content" rows="8" :placeholder="form.remarkDes"></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn btn-default btn-block">{{ submit }}</button>
                </div>
              </div>
            </form>
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


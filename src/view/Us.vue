<template>
  <div id="Us">
    <div class="banner container-fuild text-center">
      {{ title }}
    </div>

    <div class="container-fluid">
      <div class="container">
        <div class="us-box">
          <div class="text-center">
            <h2>
              {{ contactMsg.title }}
            </h2>
            <p style="color: #b2b2b2;padding-bottom: 20px">
              {{ contactMsg.subtitle }}
            </p>
          </div>

          <div class="container-fluid"
               style="display:flex;
               align-items: center;
               justify-content: center;
               flex-direction: row">
            <div
              class="col-xs-12 col-sm-6 col-md-3"
              style="flex: auto"
              v-for="(item,index) in contactMsg.content"
              :key="index">
              <div
                class="c-block wow slideInUp"
                onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'"
                onmouseleave="this.style.color='#666';this.style.borderColor='#c4d7d6'">
                <img class="center-block"
                     style="width: 112px;height: 150px;"
                     :src="item.photo" alt="">
                <p class="text-center">{{ item.name }}</p>
                <div
                  class="text-center"
                  onmouseenter="this.style.color='#28f'"
                  onmouseleave="this.style.color='#c4d7d6'">
                  {{ item.intro }}
                  <br>
                  {{ item.phone }}
                  <br>
                  {{ item.email }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Us",
  data() {
    return {
      title: 'Contact Us',
      contactMsg: {
        title: 'Contact Details',
        subtitle: 'For all further queries, please contact',
        content: [
          {
            name: 'Prof. Dahai ZHANG',
            photo: require('@/assets/img/prof/local_0.jpg'),
            intro: '',
            phone: 'Phone: (86) 13758255738',
            email: 'Email: zhangdahai@zju.edu.cn'
          },
          {
            name: 'Dr. Yulin SI',
            photo: require('@/assets/img/prof/local_2.jpg'),
            intro: '',
            phone: 'Phone: (86) 18072662685',
            email: 'Email: yulinsi@zju.edu.cn'
          }
        ]
      }
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
  background-image: url("../assets/img/banners/banner_1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}

.us-box {
  margin: 40px 0 80px 0;
  transition: all ease 0.5s;
  /*border: 1px dashed mediumpurple;*/
}

.c-block {
  padding: 20px 20px;
  border: 1px solid #c4d7d6;
  border-bottom: 5px solid #c4d7d6;
}

.c-block img {
  width: 48px;
  height: 48px;
}

.c-block > p {
  font-size: 20px;
  margin: 30px 0;
}

.c-block > div {
  color: #c4d7d6;
}

@media screen and (max-width: 997px) {
  .Contact_us-container {
    padding: 20px 0;
  }
}
</style>


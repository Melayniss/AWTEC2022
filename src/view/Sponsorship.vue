<template>
  <div id="sponsorship">
    <div class="banner container-fuild text-center">
      {{ title }}
    </div>
    <div class="container">
      <div class="sponsorship-container wow pulse">
        <h2>{{ express.title }}</h2>
        <br>
<!--        index for other operations-->
        <ul v-for="(item, index) in express.sponsorsList">
          <li>{{ item.name }}</li>
        </ul>
        <button class="center-block btn btn-warning btn-lg">{{ viewMore }}</button>
      </div>
    </div>
  </div>
</template>
<script>
import {WOW} from 'wowjs';

export default {
  name: "Sponsorship",
  data() {
    return {
      title: 'Sponsorships',
      express: {
        title: 'Gratitude towards our Sponsors',
        sponsorsList: [
          {
            name: 'Second Institute of Oceanography, MNR',
          },
          {
            name: 'National Ocean Technology Center',
          },
          {
            name: 'LHD Group Deutschland GmbH',
          },
          {
            name: 'Guodian United Power Technology Company',
          },
          {
            name: 'China Three Gorges new Energy Co.LTD',
          },
          {
            name: 'IT Tower Service Ltd',
          },
          {
            name: 'SIMEC Atlantis Energy',
          },
          {
            name: 'Harbin Electric Company Limited',
          }
        ]
      },
      viewMore: 'See More'
    };
  },
  mounted() {
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

.sponsorship-container {
  margin: 100px;
  padding: 30px;
  transition: all ease 0.5s;
  border: 1px dashed salmon;
}

.sponsorship-container h2 {
  color: rgb(255, 102, 19);
  font-weight: bolder;
  text-align: center;
}

.sponsorship-container p {
  font-size: 20px;
  color: rgb(255, 102, 19);
  font-weight: 700;
}

.sponsorship-container ol {
  list-style-type: decimal;
  padding-left: 30px;
}

.sponsorship-container ol > li {
  font-size: 14px;
  line-height: 2.7rem;
}

@media screen and (max-width: 997px) {
  .sponsorship-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed salmon;
  }
}
</style>


<template>
    <div id="Accommodation" class="container-fuild">
      <div class="row acc">
        <!--        here needs fix. Write container box-->
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img class="img-responsive" src="@/assets/img/hotel_1.jpg" alt="Dragon Hotel">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h2 class="acc-title">
            {{venueMsg.title}}
            <small>{{venueMsg.viceTitle}}</small>
          </h2>
          <p>{{venueMsg.content}}<br>
            {{venueMsg.content_1}}<br>
            {{venueMsg.content_2}}</p>
          <h2 class="acc-link">
            <a href="http://hangzhoudragonhotel.com/">{{venueMsg.linkTitle}}</a>
          </h2>
          <a herf="#/preparation/accommodation" class="btn btn-lg btn-block btn-info">{{venueMsg.detailTitle}}</a>
        </div>
      </div>
    </div>
</template>
<script>
const venueMsg = {
  title: "Venue",
  viceTitle: "/ Dragon Hotel, in Hang Zhou",
  content: "The Dragon Hotel in Hangzhou is the one of the best choices for travellers around the world to visit Hangzhou. The hotel has ideal location in the heart of Hangzhou's central business district. Close to splendid shopping, and major corporate and government offices, The Dragon is also on the doorstep of some of China's most revered cultural landmarks. The hotel faces the stunning Baoshi Mountain and is a short walk from historic and picturesque West Lake.",
  content_1: "Address: 120 Shuguang Road, Hangzhou, China, 310007",
  content_2: "Tel: (86) 400 862 5688",
  linkTitle: "Dragon Hotel, in Hang Zhou",
  detailTitle: "How to Get Here"
}

export default {
  name: 'Accommodation',
  data(){
      return{
        venueMsg
      }
  }
}
</script>
<style scoped>
/* GET HERE PART */
#acc {
  padding: 100px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}

#acc .acc-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #c4d7d6;
}

#acc p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
}

#acc .acc-link {
  margin: 20px 0 20px;
}
</style>


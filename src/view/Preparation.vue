<template>
    <div id="Preparation">
        <div class="banner container-fuild text-center">关于我们</div>
        <div class="container">
            <div class="row CompanyIntroduction-container">
                <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
                    <img class="img-responsive center-block" src="@/assets/img/about_img.png" alt="">
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <h3>Preparation You Need to Focus</h3>
                  <p class=".text-justify">
                    Where you will live →
<!--                    <q v-on:click="/accommodation">Accommodation</q>-->
                  </p>

                  <p class=".text-justify">
                    How you come here →
<!--                    <q v-on:click="/route">Route</q>-->
                  </p>

                  <p class=".text-justify">
                    If any question bothers you →
<!--                    <q v-on:click="/faq">FAQ</q>-->
                  </p>

                  <p class=".text-justify">
                    Want to get contact with the committees →
<!--                    <q v-on:click="/contact">Contact Us</q>-->
                  </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'CompanyIntroduction',
    data(){
        return{

        }
    },
    mounted(){
        var wow = new WOW();
        wow.init();
    }
}
</script>
<style scoped>
.banner{
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
.row{
    margin-right: 0;
    margin-left: 0;
}
.CompanyIntroduction-container{
    padding: 100px 0;
    color: #808080;
    transition: all ease 0.5s;
}
.CompanyIntroduction-container>div>p{
    font-size: 14px;
    line-height: 2.5rem;
}
@media screen and (max-width: 997px){
    .CompanyIntroduction-container{
    padding: 10px 0;
    color: #808080;
}
}
</style>


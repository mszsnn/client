<template>
  <div id="news_list">
    <div class="top">
      <h1>about unique</h1>
      <h2>新闻中心</h2>
      <h6>aosena asdf  sadf  a sdf  as df a s</h6>
      <h1>+</h1>
    </div>
    <div class="wheel">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="list">
            <div class="left"></div>
            <div class="right">
              <div class="title">优逸客优逸客优逸客优逸客优逸客</div>
              <div class="eng">aksdf asdkfj asdkfas dfaskdfasd</div>
              <div class="des">材大部分是板材，用开料锯锯截直线型的板材，小型企业则用圆锯锯截带锯锯切曲线型板材沙发框架,用材可采用中密中密度纤维用开料锯锯截直线型的板材,小型企业则用圆锯锯截.</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="list">
            这是网页
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="list">
            这是网页
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: 'news_list',
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 2,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        }
      }
    },
    methods: {},
    components: {
      swiper,
      swiperSlide
    },
    mounted() {

    }
  }
</script>
<style lang="scss" scoped="">

  #news_list {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 80px;
    .top {
      width: 400px;
      height: auto;
      margin: 0 auto;
      text-align: center;
      h1 {
        font-size: 40px;
        color: #545454;
      }
      h2 {
        font-size: 24px;
        color: #949494;
        font-weight: normal;
      }
      h6 {
        font-size: 10px;
        color: #949494;
        font-weight: normal;
      }
      h1:last-child {
        color: #f0f0f0;
      }
    }
  }

  .wheel {
    width: 100%;
    height: 420px;
    box-sizing: border-box;
    overflow: hidden;
    padding: 60px 0;
    margin-top: 40px;
    position: relative;
    .swiper-container {
      width: 100%;
      height: 300px;
      .list {
        width: 710px;
        height: 90px;
        padding: 30px 0;
        margin: 0 auto;
        display: flex;
        .left {
          width: 150px;
          height: 100%;
          background: #ccc;
        }
        .right {
          flex: auto;
          padding:0 40px;
          box-sizing: border-box;
          .title{
            font-size: 18px;
            color: #74cffa;
          }
          .eng{
            font-size: 10px;
            color: #adacac;
          }
          .des{
            font-size: 12px;
            color: #adacac;
          }
        }
      }
      .swiper-slide:hover {
        background: #f3f3f3;
      }
    }
    .swiper-button-prev {
      left: 50%;
      top: 0;
      transform: rotate(90deg);
      margin-left: -12px;
      margin-top: 0;
    }
    .swiper-button-next {
      left: 50%;
      bottom: 0px;
      top: auto;
      transform: rotate(90deg);
      margin-left: -12px;
      margin-top: 0;
    }

  }
</style>

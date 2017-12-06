<template>
  <div id="news_list">
    <t :data='obj'></t>
    <div class="wheel">
      <swiper :options="swiperOption">
        <swiper-slide>
          <router-link class="list" :to="{name:'news_detail'}">
            <div class="left"></div>
            <div class="right">
               <div>
                 <div class="title">优逸客参加上海IXDC国际交流大会</div>
                 <div class="eng">Art is a language that loves life</div>
               </div>
              <div class="des">锯截直线型的板材，小型企业则用圆锯锯截带锯锯切曲线型板材沙发框架,用材可采用中密中密度纤维用开料锯锯截直线型的板材,小型企业则用圆锯锯截.</div>
            </div>
          </router-link>
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
  import t from '../public/title.vue'
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
        },
        obj:{
          h1:'News information',
          h2:'新闻动态'
        }
      }
    },
    methods: {},
    components: {
      swiper,
      swiperSlide,
      t
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
        text-decoration: none;
        .left {
          width: 150px;
          height: 100%;
          background: #ccc;
        }
        .right {
          width:560px;
          padding:0 40px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .title{
            font-size: 18px;
            color: #74cffa;
            font-weight: 400;
            letter-spacing: 1px;
          }
          .eng{
            font-size: 10px;
            color: #adacac;
          }
          .des{
            font-size: 12px;
            color: #adacac;
            overflow:hidden;
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

<template>
  <div id="news_list">
    <t :data='obj'></t>
    <div class="wheel">
      <swiper :options="swiperOption">

        <swiper-slide v-for="item in news" v-bind:key="item.id">
          <router-link class="list" :to="{name:'news_detail',query:{id:item.id}}">
            <div class="left">
              <h1>{{item.d}}</h1>
              <h5>{{item.y}}</h5>
            </div>
            <div class="right">
               <div>
                 <div class="title">{{item.title}}</div>
                 <div class="eng">{{item.engtitle}}</div>
               </div>
              <div class="des">{{item.description}}</div>
            </div>
          </router-link>
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
        },
        news:[]
      }
    },
    methods: {},
    components: {
      swiper,
      swiperSlide,
      t
    },
    mounted() {
       this.$http.get('/api/news/client').then(function(res){

         res.body.forEach(element => {
           let date=element.time.split('T')[0];
           element.time=date;
           element.y=date.slice(0,4)
           element.d=date.slice(5);
         });

         this.news=res.body;
       })
    }
  }
</script>
<style lang="scss" scoped="">
  #news_list {
    width: 100%;
    height: 100%;
    overflow: hidden;
    @media screen and (min-width: 1367px) {
      padding-top: 80px;
    }
    padding-top: 58px;
  }

  .wheel {
    width: 100%;
    @media screen and (min-width: 1367px) {
      height: 620px;
      padding: 80px 0;
    }
    height: 420px;
    overflow: hidden;
    padding: 60px 0;
    margin-top: 35px;
    position: relative;
    box-sizing: border-box;
    .swiper-container {
      width: 100%;
      @media screen and (min-width: 1367px) {
        height: 460px;
      }
      height: 300px;
      .list {
        width: 960px;
        @media screen and (min-width: 1367px) {
          height: 145px;
          padding: 42px 0;
          width: 990px;
        }
        height: 102px;
        padding: 24px 0;
        margin: 0 auto;
        display: flex;
        text-decoration: none;
        .left {
          @media screen and (min-width: 1367px) {
            width: 200px;
          }
          width: 140px;
          height: 100%;
          background: #ccc;
          text-align: center;
          box-sizing: border-box;
          padding:10px 20px;
          color: #fff;
          h1{
            @media screen and (min-width: 1367px) {
              font-size: 54px;
            }
            font-size: 38px;
            font-family: 'he';
          }
          h5{
            @media screen and (min-width: 1367px) {
              font-size: 28px;
            }
            font-size: 20px;
            text-align: right;
            font-family: 'he';
            padding:0 10px;
            position: relative;
            &:after{
              content:'';
              width:20%;
              height: 2px;
              position: absolute;
              right: 10px;
              bottom:-6px;
              background: #fff;
            }
          }
        }
        .right {
          @media screen and (min-width: 1367px) {
            width: 790px;
            padding:0 52px;
          }
          width:820px;
          padding:0 82px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .title{
            @media screen and (min-width: 1367px) {
              font-size: 25px;
            }
            font-size: 18px;
            color: #74cffa;
            font-weight: 400;
            letter-spacing: 1px;
          }
          .eng{
            @media screen and (min-width: 1367px) {
              font-size: 16px;
            }
            font-size: 14px;
            color: #adacac;
          }
          .des{
            @media screen and (min-width: 1367px) {
              font-size: 16px;
            }
            font-size: 14px;
            color: #adacac;
            overflow:hidden;
          }
        }
      }
      .swiper-slide{
        transition: background-color .8s;
      }
      .swiper-slide:hover {
        background-color: #f3f3f3;
      }
    }
    .swiper-button-prev {
      left: 50%;
      top: 0;
      transform: rotate(90deg);
      margin-left: -12px;
      margin-top: 0;
      color: #f1f1f1;
    }
    .swiper-button-next {
      left: 50%;
      bottom: 0px;
      top: auto;
      transform: rotate(90deg);
      margin-left: -12px;
      margin-top: 0;
      color: #f1f1f1;
    }

  }
</style>

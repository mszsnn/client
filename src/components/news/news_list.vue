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
         console.log(res);
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
          text-align: center;
          box-sizing: border-box;
          padding:10px 20px;
          
          color: #fff;
          h1{    
            font-size: 36px;
            font-family: 'he';
          }
          h5{
            font-size: 18px;
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

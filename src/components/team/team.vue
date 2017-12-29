<template>
      <div id="team">
            <t :data='obj'></t>
            <div class="team-container" ref="teamContainer">
                  <div class="team-main">
                        <swiper :options="swiperOption">
                              <swiper-slide v-for="item in items" :key="item.id">
                                    <div v-on:click="open(item)"  class="team-session">
                                          <div class="imgBox">
                                                <img :src="item.pic" alt="" width="400">
                                          </div>
                                          <div class="name">
                                                <h4>{{item.name}} <span>{{item.ename}}</span></h4>
                                                <h5>{{item.position}}</h5>
                                          </div>
                                    </div>
                              </swiper-slide>
                        </swiper>
                  </div>
            </div>
            <div id="team-person" ref="teamPerson">
                  <div class="left">
                        <img :src="activedata.pic" alt="" width="388">
                  </div>
                  <div class="right">
                        <div class="name">
                              <h4>{{activedata.name}} <span>{{activedata.ename}}</span></h4>
                              <h5>{{activedata.position}}</h5>
                        </div>
                        <div class="line"></div>
                        <div class="con">
                              {{activedata.content}}
                        </div>
                  </div>
                  <div class="close" v-on:click="close" ref="teamClose">×</div>
            </div>
      </div>
</template>
<script>
      import {swiper, swiperSlide} from 'vue-awesome-swiper'
      import 'swiper/dist/css/swiper.css'
      import t from '../public/title.vue'
      export default {
          name:'team',
          data(){
              return {
                  swiperOption: {
                      slidesPerView: 3,
                      spaceBetween :25,
                      centeredSlides : true,
                      initialSlide: 1,
                      breakpoints: {
                          1367: {
                              slidesPerView: 3,
                              spaceBetween: 38,
                              centeredSlides : true,
                              initialSlide: 1,
                          }
                      }
                  },
                  obj:{
                      h1:'Team Introduction',
                      h2:'团队展示'
                  },
                  items:[],
                  activedata:{}
              }
          },
          methods:{
              open:function(obj){
                  var top = document.getElementsByClassName("top")[0];
                  this.$refs.teamContainer.style.display = "none";
                  this.$refs.teamPerson.style.display = "block";
                  top.style.opacity="0";
                  this.activedata=obj;
              },
              close:function(){
                  var top = document.getElementsByClassName("top")[0];
                  this.$refs.teamPerson.style.display = "none";
                  this.$refs.teamContainer.style.display = "block";
                  top.style.opacity="1";
              }
          },
          mounted(){
              this.$http.get('/api/team/show').then(function(res){
                  this.items = res.body;
                  console.dir(this.items);
              })
          },
          components: {
              swiper,
              swiperSlide,
              t
          },
    }

</script>
<style lang="" scoped="">
      @import "./animate.css";
    #team{
        width:100%;
        height:100%;
        overflow: hidden;
        padding-top: 50px;
        box-sizing: border-box;
          position:relative;
          top:0;
          left:0;
    }
      .swiper-container{
            width: 100%;
            height:100%;
            overflow: hidden;
            
      }
    .swiper-container .swiper-wrapper .swiper-slide{
        width:367px!important;
        height:370px;
        overflow: hidden;
        transition:all .5s;
        margin-top:25px;
          transform:translateY(1000px);
          animation: slideInUp 0.7s 0.3s forwards;
    }
    .swiper-container .swiper-wrapper .swiper-slide .imgBox{
        height:370px;
        overflow: hidden;
        transition:all .5s;
          position:relative;
          top:0;
          left:0;
    }
    .swiper-container .swiper-wrapper .swiper-slide .imgBox img{
        height:auto;
        width:100%;
    }
    .swiper-container .swiper-wrapper .swiper-slide .imgBox::after{
        content:"";
        display: block;
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        background-color: rgba(1,165,226,0.7);
        opacity: 1;
        /*transition:opacity .5s;*/
    }
    .swiper-container .swiper-wrapper .swiper-slide-active{
        height:480px;
        margin-top:0;
          animation: slideInUp 0.7s forwards 0s;
    }
    .swiper-container .swiper-wrapper .swiper-slide-active .imgBox{
        height:416px;
    }
    .swiper-container .swiper-wrapper .swiper-slide-active .imgBox::after{
        opacity: 0;
    }

    .team-container .team-main .team-session{
        width:100%;
        height:100%;
        /*transition:all .5s;*/
        overflow: hidden;
        margin:0 auto;
    }
    .team-container .team-main .team-session .name{
        font-weight: normal;
        color:#333;
        text-align: center;
        box-sizing: border-box;
        padding-top:15px;
    }
    .team-container .team-main .team-session .name h4{
        font-family: "宋体";
        font-size:18px;
    }
    .team-container .team-main .team-session .name h4 span{
        font-family: "GillSans","宋体";
        font-size:22px;
    }
    .team-container .team-main .name h5{
        margin-top:5px;
        font-family: "苹方";
        font-size:12px;
    }



    #team-person{
        width:1022px;
        height:518px;
        margin:0 auto 0;
        z-index: 999;
        display: none;
        position:absolute;
        top:94px;
        right:98px;
    }

    #team-person .left{
        width:388px;
        height:100%;
        float:left;
        overflow: hidden;
    }
    #team-person .left img{
        width:100%;
    }
    #team-person .right{
        width:530px;
        min-height:300px;
        float:left;
        margin-left:40px;
        margin-top:75px;
    }
    #team-person .right .name h5{
        font-weight: 400;
        font-size: 12px;
        margin-bottom: 40px;
    }
    #team-person .right .name h4{
        font-size: 18px;
        padding-bottom:8px;
    }
    #team-person .right .line{
        width:510px;
        height:2px;
        background-color: #e5e5e5;
        position:relative;
        top:0;
        left:0;
        margin-bottom:50px;
    }
    #team-person .right .line::after{
        content:"";
        display: block;
        width:155px;
        height: 2px;
        background-color:#02a6f6;
    }
    #team-person .right .con p{
        font-size: 12px;
        color:#333;
        margin-bottom:18px;
    }
    #team-person .close{
        width:22px;
        height:22px;
        position:absolute;
        top:-22px;
        right:0;
        font-size: 25px;
        text-align: center;
        line-height: 22px;
        cursor:pointer;
    }

    @media screen and (min-width:1920px){
        .team-container{
            height:754px;
        }

        .swiper-container .swiper-wrapper .swiper-slide{
            width:560px!important;
            height:564px;
        }
        .swiper-container .swiper-wrapper .swiper-slide .imgBox{
            height:564px;
        }
        .swiper-container .swiper-wrapper .swiper-slide-active{
            height:754px;
        }
        .swiper-container .swiper-wrapper .swiper-slide-active .imgBox{
            height:639px;
        }

        .team-container .team-main .team-session .name h4{
            font-size:24px;
        }
        .team-container .team-main .team-session .name h4 span{
            font-size:30px;
        }
        .team-container .team-main .name h5{
            font-size:18px;
        }

        #team-person{
            width:1645px;
            height:823px;
            top:124px;
            right:70px;
        }
        #team-person .left{
            width:550px;
            height:100%;
        }
        #team-person .right{
            width:750px;
            margin-left:87px;
            margin-top:126px;
        }



        #team-person .right .name h5{
            font-weight: 400;
            font-size: 18px;
            margin-bottom: 40px;
        }
        #team-person .right .name h4{
            font-size: 30px;
            padding-bottom:8px;
        }
        #team-person .right .line{
            width:717px;
            height:2px;
            position:relative;
            top:0;
            left:0;
            margin-bottom:50px;
        }
        #team-person .right .line::after{
            content:"";
            display: block;
            width:220px;
            height: 2px;
            background-color:#02a6f6;
        }
        #team-person .right .con p{
            font-size: 14px;
            color:#333;
            margin-bottom:18px;
        }
        #team-person .close{
            width:40px;
            height:40px;
            font-size: 32px;
            text-align: center;
            line-height: 40px;
            cursor:pointer;
            position:absolute;
            top:-40px;
            right:0;
        }
    }
</style>

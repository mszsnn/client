<template>
      <div id="team">
            <t :data='obj'></t>
            <div class="team-container" ref="teamContainer">
                  <div class="team-main">
                        <swiper :options="swiperOption">
                              <swiper-slide>
                                    <div v-on:click="open" class="team-session">
                                          <div class="imgBox">
                                                <img src="./岳英俊.png" alt="" width="400">
                                          </div>
                                          <div class="name">
                                                <h4>刘钊 <span>LUCY</span></h4>
                                                <h5>实训部设计总监</h5>
                                          </div>
                                    </div>
                              </swiper-slide>
                              <swiper-slide>
                                    <div v-on:click="open" class="team-session">
                                          <div class="imgBox">
                                                <img src="./刘钊.png" alt="" width="400">
                                          </div>
                                          <div class="name">
                                                <h4>刘钊 <span>LUCY</span></h4>
                                                <h5>实训部设计总监</h5>
                                          </div>
                                    </div>
                              </swiper-slide>
                              <swiper-slide>
                                    <div v-on:click="open" class="team-session">
                                          <div class="imgBox">
                                                <img src="./马彦龙.png" alt="" width="400">
                                          </div>
                                          <div class="name">
                                                <h4>刘钊 <span>LUCY</span></h4>
                                                <h5>实训部设计总监</h5>
                                          </div>
                                    </div>
                              </swiper-slide>
                              <swiper-slide>
                                    <div v-on:click="open" class="team-session">
                                          <div class="imgBox">
                                                <img src="./岳英俊.png" alt="" width="400">
                                          </div>
                                          <div class="name">
                                                <h4>刘钊 <span>LUCY</span></h4>
                                                <h5>实训部设计总监</h5>
                                          </div>
                                    </div>
                              </swiper-slide>
                              <swiper-slide>
                                    <div v-on:click="open" class="team-session">
                                          <div class="imgBox">
                                                <img src="./刘钊.png" alt="" width="400">
                                          </div>
                                          <div class="name">
                                                <h4>刘钊 <span>LUCY</span></h4>
                                                <h5>实训部设计总监</h5>
                                          </div>
                                    </div>
                              </swiper-slide>
                              <swiper-slide>
                                    <div v-on:click="open" class="team-session">
                                          <div class="imgBox">
                                                <img src="./马彦龙.png" alt="" width="400">
                                          </div>
                                          <div class="name">
                                                <h4>刘钊 <span>LUCY</span></h4>
                                                <h5>实训部设计总监</h5>
                                          </div>
                                    </div>
                              </swiper-slide>

                        </swiper>
                  </div>
            </div>
            <div id="team-person" ref="teamPerson">
                  <div class="left">
                        <img src="./刘钊.png" alt="" width="388">
                  </div>
                  <div class="right">
                        <div class="name">
                              <h4>刘钊 <span>LUCY</span></h4>
                              <h5>实训部设计总监</h5>
                        </div>
                        <div class="line"></div>
                        <div class="con">
                              <p>末那工作室是中國大陸地區第壹家以原創高端GK模型及雕像開發生產的專業工作室。末那工作室,組建於2010年，成立初期主要從事原創</p>
                              <p>末那工作室是中國大陸地區第壹家以原創高端GK模型及雕像開發生產的專業工作室。末那工作室,組建於2010年，成立初期主要從事原創</p>
                              <p>末那工作室是中國大陸地區第壹家以原創高端GK模型及雕像開發生產的專業工作室。末那工作室,組建於2010年，成立初期主要從事原創</p>
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
                      slidesPerView: 4,
//                      spaceBetween : 20,
//                      freeMode: true,
                      centeredSlides : true,
                      initialSlide: 1,
                  },
                  obj:{
                      h1:'Team Introduction',
                      h2:'团队展示'
                  }
              }
          },
          methods:{
              open:function(){
                  this.$refs.teamContainer.style.display = "none";
                  this.$refs.teamPerson.style.display = "block";
              },
              close:function(){
                  this.$refs.teamPerson.style.display = "none";
                  this.$refs.teamContainer.style.display = "block";
              }
          },
          mounted(){

          },
          components: {
              swiper,
              swiperSlide,
              t
          },
    }

</script>
<style lang="" scoped="">
    #team{
        width:100%;
        height:100%;
        overflow: auto;
        padding-top: 80px;
    }
    .team-container{
        width:100%;
        min-height: 100%;
        position:relative;
        top:0;
        left:0;
        overflow: hidden;
    }
    .team-main{
        width:auto;
        height:550px;
        margin-top:30px;
    }

    .team-session{
        width:310px;
        height:380px;
        background-color:#fff;
        transform:scale(0.9);
        transition:all .5s;
        overflow: hidden;
        margin:0 auto;
    }
    .team-session .name{
        display:none;
        font-weight: normal;
        color:#333;
    }
    .team-session .name h4{
        font-family: "宋体";
        font-size:18px;
    }
    .team-session .name h4 span{
        font-family: "GillSans","宋体";
        font-size:22px;
    }
    .team-session .name h5{
        margin-top:10px;
        font-family: "苹方";
        font-size:12px;
    }
    .swiper-slide-active{
          z-index:99;
    }
    .swiper-slide-active .team-session{
        width:310px;
        height:380px;
        transform:scale(1);
    }
    .swiper-slide-active .team-session .name{
        display: block;
    }
    .swiper-slide-active .imgBox::after{
        content:"";
        display: none;
    }
    .imgBox{
        width:100%;
        height:280px;
        background-color:tan;
        overflow: hidden;
        position:relative;
        top:0;
        left:0;
    }
    .imgBox img{
          width:100%;
    }
    .imgBox::after{
        content:"";
        width:100%;
        height: 100%;
        display: block;
        background-color:rgba(1,165,226,0.8);
        position:absolute;
        top:0;
        left:0;
    }
    .team-session .name{
        text-align: center;
        box-sizing: border-box;
        padding-top:37px;
    }
    #team-person{
        width:1040px;
        height:auto;
        margin:0px auto 0;
        background-color: #fff;
        z-index: 999;
        display: none;
        position:relative;
        /*top:-150px;*/
        left:0;
    }
    #team-person .left{
        width:388px;
        height:100%;
        float:left;
        overflow: hidden;
    }
    #team-person .right{
        width:530px;
        min-height:300px;
        float:right;
        margin-right:60px;
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
</style>

<template>
      <div id="contact">
            <t :data='obj'></t>
            <div class="contact-con">
                  <div class="left">
                        <img src="./map.png" alt="">
                  </div>
                  <div class="right">
                        <div class="title">
                              <div class="iconBox">
                                    <i class="iconfont icon-tubiaozhizuomoban"></i>
                              </div>
                              <div class="t-left">
                                    <h4>ADD/你可以通过这个地址找我</h4>
                                    <h5>平阳路学府街口凯通大厦2层</h5>
                              </div>
                        </div>
                        <div class="title">
                              <div class="iconBox">
                                    <i class="iconfont icon-phone"></i>
                              </div>
                              <div class="t-left">
                                    <h4>TEL/你可以通过这个电话联系我</h4>
                                    <h5>61440009/7856432</h5>
                              </div>
                        </div>
                        <div class="title">
                              <div class="iconBox">
                                    <i class="iconfont icon-youjian"></i>
                              </div>
                              <div class="t-left">
                                    <h4>ADD/你可以通过这个地址找我</h4>
                                    <h5>61440009/7856432</h5>
                              </div>
                        </div>
                        <div class="address">
                              <h2>乘车路线</h2>
                              <h3>Detailed address</h3>
                              <p>乘坐13路、21路、39路、807路、823路、825路、877路(外环)、877路(内环) 903路、57路、56路、906路</p>
                        </div>
                  </div>
            </div>
      </div>
</template>

<script>
    import t from '../public/title.vue'
    export default {
      name:'contact',
      data(){
        return {
            obj:{
              h1:'Contact us',
                  h2:'联系我们'
            }
        }
      },
      methods:{

      },
      mounted(){
         
      },
      components: {
          t
      },
    }




</script>

<style lang="scss" scoped="">
      @import url("./animate.css");
      @import url("http://at.alicdn.com/t/font_494814_cm4yltnkwwvr6bt9.css");
      #allmap{
          width:100%;
          height:100%;
      }
      #contact {
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
                        font-family: cg;
                        font-weight: bold;
                        font-style: italic;
                  }
                  h2 {
                        font-size: 24px;
                        color: #000;
                        font-weight: normal;
                        font-family: pf;
                        letter-spacing: 3px;
                  }
                  h6 {
                        font-size: 10px;
                        color: #949494;
                        font-weight: normal;
                        font-family: cg;
                  }
                  h1:last-child {
                        color: #f0f0f0;
                  }
            }
      }
      .contact-con{
            width:944px;
            height:313px;
            margin:50px auto 0;
            @media screen and (min-width:1920px){
                width: 1310px;
                height: 500px;
            }
            .left{
                  width: 404px;
                  height:373px;
                  overflow: hidden;
                  float:left;
                  transform:translateX(-1000px);
                  animation: bounceInLeft ease 1s .7s forwards;
                    @media screen and (min-width:1920px){
                        width: 555px;
                        height: 500px;
                    }
                  img{
                        width:100%;
                  }
            }
            .right{
                  width:452px;
                  height:313px;
                  float:right;
                  color:#333;
                box-sizing: border-box;
                @media screen and (min-width:1920px){
                    width:650px;
                    height:500px;
                    padding-top: 46px;
                }
                  .title{
                        width:100%;
                        height:auto;
                        overflow: hidden;
                        margin-bottom:20px;
                        transform: translateX(1000px);
                        .iconBox{
                              float:left;
                              width:35px;
                              height:35px;
                              border-radius: 50%;
                              overflow: hidden;
                              text-align: center;
                              line-height: 35px;
                              font-size: 16px;
                              margin-right:10px;
                              border:1px solid #ccc;
                              color:#ccc;
                        }
                        h4{
                              font-weight: 400;
                              font-size:12px;
                              color:#848484;
                        }
                        h5{
                              font-size:14px;
                              font-weight: 600;
                              color:#585858;
                        }
                  }
                  .title:nth-child(1){
                        animation: lightSpeedIn ease 1s .7s forwards;
                  }
                  .title:nth-child(2){
                        animation: lightSpeedIn ease 1s .8s forwards;
                  }
                  .title:nth-child(3){
                        animation: lightSpeedIn ease 1s .9s forwards;
                  }
                  .address{
                        margin-top:50px;
                        width:380px;
                        margin-left: 45px;
                        transform:translateX(1000px);
                        animation: lightSpeedIn ease 1s 1s forwards;
                      @media screen and (min-width:1920px){
                          width:600px;
                      }
                        h2{
                              font-size: 12px;
                            @media screen and (min-width:1920px){
                                font-size: 18px;
                            }
                        }
                        h3{

                              font-size: 12px;
                              color:#b6b6b6;
                        }
                        p{
                              font-size: 12px;
                              margin-top:18px;
                              line-height: 16px;
                            @media screen and (min-width:1920px){
                                font-size: 16px;
                            }
                        }
                  }
            }
      }
</style>

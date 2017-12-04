<template>
      <div id="contact">
            <div class="top">
                  <h1>about unique</h1>
                  <h2>新闻中心</h2>
                  <h6>Art is a language that loves life</h6>
                  <h1>+</h1>
            </div>
            <div class="contact-con">
                  <div class="left">
                        <img src="./map_03.png" width="373" height="313" alt="">
                  </div>
                  <div class="right">
                        <div class="title">
                              <div class="iconBox"></div>
                              <div class="t-left">
                                    <h4>add/你可以通过这个地址找我</h4>
                                    <h5>平阳路学府街口凯通大厦2层</h5>
                              </div>
                        </div>
                        <div class="title">
                              <div class="iconBox"></div>
                              <div class="t-left">
                                    <h4>tel/你可以通过这个电话联系我</h4>
                                    <h5>61440009/7856432</h5>
                              </div>
                        </div>
                        <div class="title">
                              <div class="iconBox"></div>
                              <div class="t-left">
                                    <h4>add/你可以通过这个地址找我</h4>
                                    <h5>61440009/7856432</h5>
                              </div>
                        </div>
                        <div class="address">
                              <h2>乘车路线</h2>
                              <h3>Detailed address</h3>
                              <p>乘坐13路、21路、39路、807路、823路、825路、877路(外环)、877路(内环) 903路、57路、56路、906</p>
                        </div>
                  </div>
            </div>
      </div>
</template>
<script>
    export default {
      name:'contact',
      data(){
        return {

        }
      },
      methods:{

      },
      mounted(){

      },
      components: {

      },
    }
</script>
<style lang="scss" scoped="">
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
            margin:0 auto;
            .left{
                  width:373px;
                  height:313px;
                  overflow: hidden;
                  float:left;
            }
            .right{
                  width:452px;
                  height:313px;
                  float:right;
                  color:#333;
                  font-family: "Microsoft YaHei UI";
                  .title{
                        width:100%;
                        height:auto;
                        overflow: hidden;
                        margin-bottom:20px;
                        .iconBox{
                              float:left;
                              width:30px;
                              height:35px;
                              background-color:green;
                              margin-right:10px;
                        }
                        h4{
                              font-weight: 400;
                              font-size:12px;
                              color:#848484;
                        }
                        h5{
                              font-weight:400;
                              font-size:14px;
                              font-weight: 600;
                              color:#585858;
                        }
                  }
                  .address{
                        margin-top:50px;
                        h2{
                              font-family: "Microsoft YaHei UI";
                              font-size: 12px;
                        }
                        h3{
                              font-family: "Microsoft YaHei UI";
                              font-size: 12px;
                              color:#b6b6b6;
                        }
                        p{
                              font-size: 12px;
                              margin-top:18px;
                              line-height: 16px;
                        }
                  }
            }
      }
</style>

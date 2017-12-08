<template>
      <div id="index">
         <div class="main">
              <img src="./homebg_03.png" class="bgpicture">
              <div class="news">
                  <div class="plus">
                      <i class="iconfont icon-iconjia"></i>
                  </div>
                  <div class="newsText">新闻NEWS</div>
              </div>
              <div class="mask">
                  <span class="animated bounceInDown">WEB DESIGN</span>
                  <span class="animated bounceInDown">专业的企业网站建设</span>
                  <span class="animated bounceInDown">Art is a language that loves life</span>
                  <div class="design animated bounceInDown">
                      <img src="./design_03.png">
                      <div class="text">设计/建站/开发</div>
                  </div>
                  <a href="" class="more animated rotateInDownRight">more</a>
                  <div class="plus animated bounceInDown">
                      <i class="iconfont icon-iconjia "></i>
                  </div>
                  <!-- <div class="vertical">
                      <div class="line"></div>
                      <div class="lineText">Guitar Music Studio</div>
                  </div> -->
              </div>
              <div class="case animated wobble">
                  <div class="caseBox">
                      <img src="./index_list_03.png">
                  </div>
                  <div class="caseLeft">
                      <i class="iconfont icon-yuan-jiantou-zuo"></i>
                  </div>
                  <div class="caseRight">
                      <i class="iconfont icon-jiantou-you-shixin-yuanxing"></i>
                  </div>
                  <div class="latestCase">最新案例</div>

              </div>
              <div class="bannerDot">
                  <div class="dot active"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
              </div>
          </div>
      </div>
</template>
<script>
    export default {
      name:'index',
      data(){
        return {
            data:'abc'
        }
      },
      methods:{

      },
      mounted(){
           this.$http.get('/api/test',{aa:1}).then((val)=>{
             this.data=val.body;
           })
      }
    }
</script>
<style lang="" scoped="">
    @import "./animate.css";
    *{
        margin:0;
        padding:0;
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    body,html{
        height:100%;
    }
    #index{
        width:100%;
        height: 100%;
    }
    #index .main{
        width:100%;
        height: 100%;
    }
    #index .main .bgpicture{
        display: block;
        width:100%;
        height:100%;
    }
    #index .main .mask{
        width:910px;
        height:275px;
        background: rgba(60,120,120,0.6);
        position: absolute;
        top:137px;
        right:0;
        padding-top: 41px;
        padding-left: 90px;


    }
    #index .main .mask .more{
        display: block;
        text-decoration: none;
        width:77px;
        height: 22px;
        background: #fff;
        border: 1px double #85d4f1;
        border-radius: 22px;
        position: absolute;
        right:341px;
        bottom:37px;
        color:#01a5e2;
        font-style: italic;
        text-align: center;
        line-height: 22px;
        animation-delay: 1.8s;
    }
    #index .main .mask .vertical{
        width: 13px;
        height: 52px;
        position: absolute;
        right:367px;
        bottom:121px;
    }

    #index .main .mask .design{
        margin-top: 28px;
        animation-delay: 1.6s;

    }
    #index .main .mask .design img{
        display: block;
        float: left;


    }
    #index .main .mask .design .text{
        display: block;
        color:#fff;
        float: left;
        font-size: 14px;
        margin-top: 20px;
        margin-left: 8px;
    }
    #index .main .news{
        width:258px;
        height:31px;
        background: #eee;
        position: absolute;
        top:41px;
        right:37px;
    }
    #index .main .news .plus{
        width:19px;
        height:19px;
        background: #eee;
        border-radius:50%;
        position: absolute;
        top:-6px;
        left:-7px;
        color:#01a5e2;
        text-align: center;
        line-height: 13px;
        z-index: 2;
    }
    #index .main .news .plus i{
        font-size: 8px;
    }
    #index .main .news .newsText{
        width:72px;
        height:26px;
        background: #01b6e2;
        position: absolute;
        top:3px;
        left: 3px;
        font-size: 12px;
        text-align: center;
        line-height: 26px;
        color:#fff;
    }
    #index .main .bannerDot{
        width: 193px;
        height:1px;
        position: absolute;
        left:0;
        right:0;
        margin:0 auto;
        bottom:44px;
    }
    #index .main .bannerDot .dot{
        width: 58px;
        height: 1px;
        background: #fff;
        float: left;
        margin-left: 6px;
    }
    #index .main .bannerDot .dot.active{
        background: #01a5e2;
    }
    #index .main .case{
        width:227px;
        height:193px;
        position: absolute;
        bottom:13px;
        right:38px;
        overflow: hidden;
        animation-delay: 1s;
    }
    #index .main .caseBox{
        width:229px;
        height: 161px;
        border:2px solid #f8f8f8;
        background: #eee;
        margin:28px auto 0 auto;
    }
    #index .main .caseBox img{
        display: block;
        margin:14px;
    }
    #index .main .caseLeft,#index .main .caseRight{
        width: 14px;
        height:14px;
        position: absolute;
        top:9px;
        text-align: center;
        line-height: 14px;
        color:#fff;
    }
    #index .main .caseLeft{
        right:19px;
    }
    #index .main .caseRight{
        right:3px;
    }
    #index .main .latestCase{
        width:78px;
        height:25px;
        background: #01a8e2;
        color:#fff;
        text-align: center;
        line-height: 25px;
        position: absolute;
        top:0;
        left:0;
    }
    #index .main .mask span{
        display: block;
        color:#fff;
    }
    #index .main .mask span:nth-of-type(1){
        font-size: 64px;
        font-weight: 800;
        font-style: italic;
        animation-delay: 1s;

    }
    #index .main .mask span:nth-of-type(2){
        font-size: 40px;
        font-family: "宋体";
        animation-delay: 1.2s;
    }
    #index .main .mask span:nth-of-type(3){
        font-size: 11px;
        letter-spacing: 10px;
        font-style: italic;
        animation-delay: 1.4s;
    }
    #index .main .mask .plus{
        position: absolute;
        top:44px;
        left:531px;
        color:#fff;
        animation-delay:1s;
    }
    @font-face {font-family: "iconfont";
        src: url('../../assets/iconfont/iconfont.ttf'); /* IE9*/
    }
    .iconfont {
        font-family:"iconfont" !important;
        font-size:16px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon-icon:before { content: "\e648"; }

    .icon-icon1:before { content: "\e64b"; }

    .icon-chahao:before { content: "\e669"; }

    .icon-jiantoushang:before { content: "\e62c"; }

    .icon-sousuo-:before { content: "\e620"; }

    .icon-iconjia:before { content: "\e600"; }

    .icon-jiantou-you-shixin-yuanxing:before { content: "\e601"; }

    .icon-ArrowDown:before { content: "\e602"; }

    .icon-yuan-jiantou-zuo:before { content: "\e605"; }


</style>

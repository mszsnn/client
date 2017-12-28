<template>
      <div id="index">
         <div class="main">
              <img src="./homebg_03.png" class="bgpicture">

              <div class="mask">
                  <span class="animated bounceInDown">WEB DESIGN</span>
                  <span class="animated bounceInDown">专业的企业网站建设</span>
                  <span class="animated bounceInDown">Art is a language that loves life</span>
                  <div class="design animated bounceInDown">
                      <img src="./design_03.png">
                      <div class="text">设计 / 建站 / 开发</div>
                  </div>
                  <a href="" class="more animated rotateInDownRight">more</a>
                  <div class="plus animated bounceInDown">
                      <i class="iconfont icon-iconjia "></i>
                  </div>
                   <div class="vertical animated bounceInDown">
                       <div class="lineText">Guitar Music Studio</div>
                       <div class="line"></div>
                  </div>
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
                  <div class="latestCase">▪最新案例</div>

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
        width:999px;
        height:252px;
        background: rgba(33,77,136,0.6);
        position: absolute;
        top:120px;
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
    #index .main .mask .more:hover{
        line-height: 15px;
        text-decoration: underline;
    }
    #index .main .mask .vertical{
        width: 106px;
        position: absolute;
        right:364px;
        bottom:121px;
        transform: rotate(90deg);
    }
    #index .main .mask .vertical .lineText{
        width:100%;
        color:#fff;
        font-style: italic;
        font-size: 10px;
    }
    #index .main .mask .vertical .line{
        width:23px;
        height:2px;
        background: #46d65a;
        margin-top:7px;
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

    @media screen and (min-width:1920px){
        #index .main .mask{
            width:1435px;
            height:404px;
            top:298px;
        }
        #index .main .mask span:nth-of-type(1){
            margin-top:30px;
        }
        #index .main .mask .design{
            margin-top:44px;
        }
        #index .main .mask .vertical{
            right:524px;
            bottom:278px;
        }
        #index .main .mask .plus{
            top:75px;
        }
        #index .main .mask .more{
            right:524px;
            bottom:66px;
        }
        #index .main .case{
            bottom:75px;
            right:48px;
        }
    }
</style>

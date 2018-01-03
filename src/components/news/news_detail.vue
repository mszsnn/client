<template>
      <div id="news_detail">
          <div class="news_detail_container">
              <main>
                  <header>
                    <h1 class="title">{{news.title}}</h1>
                    <h5 class="sub_title">{{news.engtitle}}</h5>
                    <ul class="paratext paratext_big">
                      <li>
                        <span></span>
                        <i>{{news.time}}</i>
                      </li>
                      <li>
                        <span></span>
                        <i>{{news.count}}</i>
                      </li>
                      <li>
                        <span></span>
                        <i>{{news.count}}</i>
                      </li>
                    </ul>
                    <ul class="paratext paratext_small">
                      <li>
                        <i class="iconfont icon-rili icon_data"></i>
                        <i>{{news.time}}</i>
                      </li>
                      <li>
                        <i class="iconfont icon-chakan icon_view"></i>
                        <i>{{news.count}}</i>
                      </li>
                    </ul>
                  </header>
                  <div id='news_scroll'>
                    <div v-html="news.content"></div>
                  </div>
              </main>
              <router-link class="button" :to="{name:'news_list'}"><img src="./button.png"></router-link>
              
          </div>
      </div>
</template>
<script>

    import side from "../public/side.vue";
    export default {
      name:'news_detail',
      data(){
        return {
            news:{}
        }
      },
      methods:{
      },
      mounted(){
          let id=this.$route.query.id;
          this.$http.post('/api/news/clientmore',{id}).then(function(res){
            console.log(res);
          res.body.forEach(element => {
            let date=element.time.split('T')[0];
            element.time=date;
          });
          this.news=res.body[0];
       }) 
      },

    }
</script>
<style scoped="">
  @import url("http://at.alicdn.com/t/font_525619_m9zkoywfy6fajor.css");
  #news_detail,.news_detail_container{
    width: 100%;
    height: 100%;
    position:absolute;
    left:0;
    top:0;
  }
    .news_detail_container main{
      width: 942px;
      height:auto;
      margin:102px auto 0;
      overflow: hidden;
    }
    .news_detail_container .title{
      font-size: 23px;
      color:#01a5e2;
    }
    .news_detail_container .sub_title{
      font-size:15px;
      color:#878787;
    }
   .paratext{
     overflow: hidden;
   }
   .paratext_big{
    display:none;
   }
   .paratext_small{
    display:block;
   }
    .paratext li{
      float: left;
      margin-right: 46px;
      line-height: 20px;
      position: relative;
      text-indent: 14px;
    }
   .paratext span{
     width: 11px;
     height: 11px;
     border-radius: 50%;
     float: left;
     position: absolute;
     top:0;
     bottom: 0;
     left: 0;
     margin:auto;
   }
   .icon_data{
      color:#32D897!important;
   }
   .icon_view{
      color:#1F9AF3!important;
   }
    .paratext li:nth-child(1) span{
      background-color: #31d897;
    }
    .paratext li:nth-child(2) span{
      background-color: #1c99f3;
    }
    .paratext li:nth-child(3) span{
      background-color: #1fe1e8;
    }
    .paratext i{
      font-size: 15px;
      color:#626262;
      float: left;
      font-style: normal;
    }
    #news_scroll{
      width: 100%;
      height:360px;
      margin-top: 68px;
      font-size:14px;
      overflow:auto;
      box-sizing:border-box;
      padding-right:68px;
    }
    #news_scroll div{
      width:100%;
      height:auto;
    }
     #news_scroll::-webkit-scrollbar {
        width:2px;
        height:337px;
        cursor: pointer;
        background:#E5E5E5;
      }
      #news_scroll::-webkit-scrollbar-button    {
          display: none;
      }
      #news_scroll::-webkit-scrollbar-track     {
          background:#ccc;
      }
      #news_scroll::-webkit-scrollbar-thumb{
       width:6px;
       height:135px;
       background:#19B3EC;
      }
    .news_detail_container .button{
      width: 22px;
      height: 22px;
      position: absolute;
      top:93px;
      right:86px;
      cursor: pointer;
      display:none;
    }
    @media screen and (min-width:19920px){
      .news_detail_container main{
        width: 1308px;
      }
      .news_detail_container main{
        margin:138px auto 0;
      }
      .news_detail_container .title{
        font-size: 28px;
      }
      .news_detail_container .sub_title{
        font-size:18px;
      }
      .paratext_big{
        display:block;
      }
      .paratext_small{
        display:small;
      }
      .news_roll{
        display:none;
      }
      .button{
        display:block;
      }
      .news_content{
        height:701px;
        overflow-y: scroll;
      }
    }
</style>

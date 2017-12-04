<template>
      <div id="news_detail">
          <div class="news_detail_container">
              <main>
                  <header>
                    <h1 class="title">优逸客参加上海IXDC国际交流大会</h1>
                    <h5 class="sub_title">lumbar spin sacrum andcrum and  coccyx</h5>
                    <ul class="paratext">
                      <li>
                        <span></span>
                        <i>2017-10-33</i>
                      </li>
                      <li>
                        <span></span>
                        <i>3362</i>
                      </li>
                      <li>
                        <span></span>
                        <i>3362</i>
                      </li>
                    </ul>
                  </header>
                  <section>

                  </section>
              </main>
              <div class="button"><img src="./button.png"></div>
          </div>
      </div>
</template>
<script>
    import side from "../public/side.vue";
    export default {
      name:'news_detail',
      data(){
        return {

        }
      },
      methods:{

      },
      mounted(){

      }
    }
</script>
<style scoped="">
  #news_detail{
    width: 100%;
    height: 100%;
  }
   .news_detail_container{
      height: 100%;
      margin:0 auto;
      position: relative;
    }
    .news_detail_container main{
      width: 930px;
      height:auto;
      margin:0 auto;
      margin-top: 98px;
      overflow: hidden;
    }
    .news_detail_container .title{
      font-size: 28px;
      color:#01a5e2;
    }
    .news_detail_container .sub_title{
      font-size:18px;
      color:#878787;
    }
   .paratext{
     overflow: hidden;
   }
    .paratext li{
      float: left;
      margin-right: 46px;
      line-height: 20px;
      position: relative;
      text-indent: 14px;
    }
   .paratext span{
     width: 8px;
     height: 8px;
     border-radius: 50%;
     float: left;
     position: absolute;
     top:0;
     bottom: 0;
     left: 0;
     margin:auto;
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
    .news_detail_container section{
      width: 100%;
      margin-top: 47px;
    }
    .news_detail_container .button{
      width: 22px;
      height: 22px;
      position: absolute;
      top:67px;
      right:62px;
      cursor: pointer;
    }
</style>

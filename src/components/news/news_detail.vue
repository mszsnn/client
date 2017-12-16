<template>
      <div id="news_detail">
          <div class="news_detail_container">
              <main>
                  <header>
                    <h1 class="title">{{news.title}}</h1>
                    <h5 class="sub_title">{{news.engtitle}}</h5>
                    <ul class="paratext">
                      <li>
                        <span></span>
                        <i>{{news.time}}</i>
                      </li>
                      <li>
                        <span></span>
                        <i>{{news.count}}</i>
                      </li>
                    </ul>
                  </header>
                  <section v-html="news.content">
                       
                  </section>
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
      margin:98px auto 0;
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

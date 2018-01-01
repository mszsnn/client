<template>
      <div id="services">
        <div class="services_content">

          <!-- 标题 -->
          <t :data='obj'></t>
          <div class="services_spot">
            <ul>
              <li v-for="item in items">
                <div class="services_logo">
                  <img :src=item.img alt="">
                </div>
                <h2>{{item.title}}</h2>
                <h3>{{item.subtitle}}</h3>
              </li>
            </ul>
          </div>

        </div>
      </div>
</template>
<script>
  import t from '../public/title.vue'
    export default {
      name:'services',
      data(){
        return {
          obj:{
            h1:'Service Items',
            h2:'服务项目'
          
          },
          items:[
            
          ]
        }
      },
      components:{
        t
      },
      methods:{

      },
      mounted(){
        this.$http.get('/api/service/show').then(res=>{
              this.items=res.body;
        })

      }
    }
</script>
<style lang="scss" scoped="">
 @import "./animate.css";
  #services{
    width:100%;
    height:100%;
  }
  #services .services_content{
    width: 536px;
    margin: 0 auto;
    padding-top: 50px;
    @media screen and (min-width:1367px){
       width:836px;
       padding-top: 100px;
    }
  }

  #services .services_spot{
    width: 100%;
    height: auto;
    overflow: hidden;  
  }
  @keyframes run3 {
    0%{
      transform: translateY(300px);
      opacity: 0;
    }
    100%{
      transform: translateY(0px);
      opacity: 1;
    }
  }
  #services ul{
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
  }
  #services ul li{
    width: 134px;
    height: auto;
    margin-right: 67px;
    margin-bottom: 8px;
    opacity: 0;
    @media screen and (min-width:1367px){
      width: 236px;
      margin-right: 60px;
    }
  }
  #services ul li:first-child{
      animation: fadeInUp 0.4s 1s forwards;
  }
  #services ul li:nth-child(2){
      animation: fadeInUp 0.4s 1.2s forwards;
  }
  #services ul li:nth-child(3){
      animation: fadeInUp 0.4s 1.4s forwards;
  }
  #services ul li:nth-child(4){
      animation: fadeInUp 0.4s 1.6s forwards;
  }
  #services ul li:nth-child(5){
      animation: fadeInUp 0.4s 1.8s forwards;
  }
  #services ul li:nth-child(6){
      animation: fadeInUp 0.4s 2s forwards;
  }






  #services ul li:nth-child(3n){
    margin-right: 0;
  }
  #services .services_logo{
    width: 134px;
    height: 134px;
    border: 3px solid #eeeeee;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width:1367px){
      width: 236px;
      height: 236px;
    }
  }
  #services .services_logo img{
     width: 70px;
     height: 70px;
     transition:all 1s;
   }
  #services .services_logo:hover img{
    transform: scale(1.1);
  }
  #services .services_spot h2{
    font-size: 16px;
    color: #585858;
    text-align: center;
    margin-top: 10px;
  }
  #services .services_spot h3{
    font-size: 12px;
    color: #a4a4a4;
    text-align: center;
  }
</style>

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
  #services{
    width:100%;
    height:100%;
  }
  #services .services_content{
    width: 595px;
    margin: 0 auto;
    padding-top: 84px
  }

  #services .services_spot{
    width: 100%;
    height: auto;
    overflow: hidden;
    opacity: 0;
    animation: run3 1.3s 1s forwards;
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
    width: 148px;
    height: auto;
    margin-right: 75px;
    margin-bottom: 8px;
  }
  #services ul li:nth-child(3n){
    margin-right: 0;
  }
  #services .services_logo{
    width: 148px;
    height: 148px;
    border: 3px solid #eeeeee;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-size: 14px;
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

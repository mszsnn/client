<template>
      <div id="company_dev">
        <div class="companyDev_content">
          <t :data='obj'></t>
          <!-- 发展历程图片-->
          <a href="" class="companyDev_img">
              <div></div>
              <div></div> 
              <div></div>
          </a>
        </div>
      </div>
</template>
<script>
  import t from '../public/title.vue'
    export default {
      name:'company_dev',
      data(){
        return {
          obj:{
            h1:'the history',
            h2:'发展历程'
          }
        }
      },
      components:{
        t
      },
      methods:{

      },
      mounted(){

      }
    }
</script>
<style lang="scss" scoped="">
  @import "./animate.css";
#company_dev{
  width:100%;
  height:100%;
}
  #company_dev .companyDev_content{
    width: 741px;
    margin: 0 auto;
    padding-top: 50px;
    @media screen and (min-width:1367px){
      padding-top: 100px;
    }
  }

  /* 公司图片 */
  #company_dev .companyDev_img{
    display: block;
    width: 741px;
    height: 386px;
    @media screen and (min-width:1367px){
      height: 650px;
    }
    display:flex;
    /*margin-top: 11px;*/
    /*margin-left: 70px;*/
  }
  #company_dev .companyDev_img div:first-child{
     width: 366px;
     height:386px;
     display: block;
     background:url("companyDev_left.png") no-repeat center;
     background-size:366px 386px;
     @media screen and (min-width:1367px){
       height:650px;
       background:url("companyDevLB.png") no-repeat center;
       background-size:366px 650px;
     }
     transform: translateX(-1000px);
     animation:bounceInLeft 1s 0.9s forwards;
  }
  #company_dev .companyDev_img div:nth-child(2){
     width: 13px;
     height:386px;
     display: block;
     background:url("companyDev_center.png") no-repeat center;
     background-size:13px 386px;
     @media screen and (min-width:1367px){
       height:650px;
       background:url("companyDevLC.png") no-repeat center;
       background-size:13px 650px;
     }
     transform: translateY(1000px);
     animation:bounceInUp 1s 0.7s forwards;
  }
  #company_dev .companyDev_img div:last-child{
     width: 362px;
     height:386px;
     display: block;
     background:url("companyDev_right.png") no-repeat center;
     background-size:362px 386px;
     @media screen and (min-width:1367px){
       height:650px;
       background:url("companyDevLR.png") no-repeat center;
       background-size:362px 650px;
     }
     transform: translateX(1000px);
     animation:bounceInRight 1s 0.9s forwards;
  }
 /* #company_dev .companyDev_img img{
    width: 88%;
    height: 88%;
    display: block;
    margin-left: 27px;
    opacity: 0;
    animation-name:opc,fadeInUp ;
    animation-duration:0.5s,0.5s;
    animation-delay: 1s,1s;
    animation-fill-mode:forwards,forwards;
  }*/
@keyframes opc {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>

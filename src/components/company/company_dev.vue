<template>
      <div id="company_dev">
        <div class="companyDev_content">
          <t :data='obj'></t>
          <!-- 发展历程图片 -->
          <a href="" class="companyDev_img">
            <img src="./companyDev_img.png" alt="">
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
    width: 578px;
    margin: 0 auto;
    padding-top: 84px
  }

  /* 公司图片 */
  #company_dev .companyDev_img{
    display: block;
    width: 465px;
    height: 453px;
    /* background: red; */
    /*margin-top: 11px;*/
    margin-left: 70px;
  }
  #company_dev .companyDev_img img{
    width: 88%;
    height: 88%;
    display: block;
    margin-left: 27px;
    opacity: 0;
    animation-name:opc,fadeInUp ;
    animation-duration:0.5s,0.5s;
    animation-delay: 1s,1s;
    animation-fill-mode:forwards,forwards;
  }
@keyframes opc {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>

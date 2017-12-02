<template>
      <div id="company_dev">
        <div class="companyDev_content">
          <!-- 标题 -->
          <a href="" class="companyDev_title"></a>
          <!-- 添加icon -->
          <i class="companyDev_add">+</i>
          <!-- 发展历程图片 -->
          <a href="" class="companyDev_img">
            <img src="./companyDev_img.png" alt="">
          </a>
        </div>
      </div>
</template>
<script>
    export default {
      name:'company_dev',
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
<style lang="scss" scoped="">
  #company_dev .companyDev_content{
    width: 578px;
    margin: 0 auto;
    padding-top: 84px
  }
  /* 标题部分 */
  #company_dev .companyDev_title{
    display: block;
    width: 257px;
    height: 74px;
    background: url('./companyDev_title.png') no-repeat center;
    background-size: 100% 100%;
    margin: 0 auto ;
  }
  /* 添加icon*/
  #company_dev .companyDev_content .companyDev_add{
    display: block;
    font-size: 40px;
    color: #e4e4e4;
    width: 100%;
    text-align: center;
    margin-top: 22px;
    font-style: normal;
  }
  /* 公司图片 */
  #company_dev .companyDev_img{
    display: block;
    width: 465px;
    height: 453px;
    /* background: red; */
    margin-top: 48px;
    margin-left: 70px;

  }
  #company_dev .companyDev_img img{
    width: 100%;
    height: 100%;
    display: block;
  }

</style>

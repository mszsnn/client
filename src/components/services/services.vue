<template>
      <div id="services">
        <div class="services_content">
          <!-- 标题 -->
          <a href="" class="services_title"></a>
          <!-- 添加icon -->
          <i class="services_add">+</i>
          <div class="services_spot">
            <ul>
              <li>
                <div class="services_logo">
                  <img src="./services_logo.png" alt="">
                </div>
                <h2>平面设计</h2>
                <h3>pingmian design</h3>
              </li>
              <li>
                <div class="services_logo">
                  <img src="./services_logo.png" alt="">
                </div>
                <h2>平面设计</h2>
                <h3>pingmian design</h3>
              </li>
              <li>
                <div class="services_logo">
                  <img src="./services_logo.png" alt="">
                </div>
                <h2>平面设计</h2>
                <h3>pingmian design</h3>
              </li>
            </ul>
            <ul>
              <li>
                <div class="services_logo">
                  <img src="./services_logo.png" alt="">
                </div>
                <h2>平面设计</h2>
                <h3>pingmian design</h3>
              </li>
              <li>
                <div class="services_logo">
                  <img src="./services_logo.png" alt="">
                </div>
                <h2>平面设计</h2>
                <h3>pingmian design</h3>
              </li>
              <li>
                <div class="services_logo">
                  <img src="./services_logo.png" alt="">
                </div>
                <h2>平面设计</h2>
                <h3>pingmian design</h3>
              </li>
            </ul>
          </div>

        </div>
      </div>
</template>
<script>
    export default {
      name:'services',
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
  #services .services_content{
    width: 595px;
    margin: 0 auto;
    padding-top: 84px
  }
  /* 标题部分 */
  #services .services_title{
    display: block;
    width: 257px;
    height: 74px;
    background: url('./services_title.png') no-repeat center;
    background-size: 100% 100%;
    margin: 0 auto ;
  }
  /* 添加icon*/
  #services .services_add{
    display: block;
    font-size: 40px;
    color: #e4e4e4;
    width: 100%;
    text-align: center;
    margin-top: 22px;
    font-style: normal;
  }
  #services .services_spot{
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-top: 18px;
  }
  #services ul{
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
  }
  #services ul li{
    width: 168px;
    height: 236px;
  }
  #services .services_logo{
    width: 168px;
    height: 168px;
    border: 3px solid #eeeeee;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #services .services_logo img{
    width: 70px;
    height: 70px;
  }
  #services .services_spot h2{
    font-size: 14px;
    color: #585858;
    text-align: center;
    margin-top: 20px;
  }
  #services .services_spot h3{
    font-size: 12px;
    color: #a4a4a4;
    text-align: center;
  }
</style>

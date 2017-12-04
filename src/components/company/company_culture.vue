<template>
      <div id="company_culture">
         
            <div class="companyCult_content">
              <!-- 标题 -->
              <a href="" class="companyCult_title"></a>
              <!-- 添加icon -->
              <i class="companyCult_add">+</i>
              <!-- 企业文化 -->
              <ul>
                <li>
                  <h2>专注</h2>
                  <div></div>
                  <h2>FOCUS</h2>
                  <p>
                    优逸客将专注于UI设计、全栈开发和PHP开发技术的垂直研究，不断进行技术的快速迭代，企业的发展只有专注才能极致，只有极致才有品牌，只有品牌企业才能长久，才能基业长青。
                  </p>
                </li>
                <li>
                  <h2>极致</h2>
                  <div></div>
                  <h2>FOCUS</h2>
                  <p>
                    优逸客将专注于UI设计、全栈开发和PHP开发技术的垂直研究，不断进行技术的快速迭代，企业的发展只有专注才能极致，只有极致才有品牌，只有品牌企业才能长久，才能基业长青。
                  </p>
                </li>
                <li>
                  <h2>口碑</h2>
                  <div></div>
                  <h2>FOCUS</h2>
                  <p>
                    优逸客将专注于UI设计、全栈开发和PHP开发技术的垂直研究，不断进行技术的快速迭代，企业的发展只有专注才能极致，只有极致才有品牌，只有品牌企业才能长久，才能基业长青。
                  </p>
                </li>
              </ul>
            </div>
          
      </div>
</template>
<script>
    export default {
      name:'company_culture',
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
#company_culture{
  width:100%;
  height:100%;
}
#company_culture .companyCult_content{
  width: 578px;
  margin: 0 auto;
  padding-top: 84px
}
/* 标题部分 */
#company_culture .companyCult_title{
  display: block;
  width: 257px;
  height: 74px;
  background: url('./companyCult_title.png') no-repeat center;
  background-size: 100% 100%;
  margin: 0 auto ;
}
/* 添加icon*/
#company_culture .companyCult_add{
  display: block;
  font-size: 40px;
  color: #e4e4e4;
  width: 100%;
  text-align: center;
  margin-top: 22px;
  font-style: normal;
}
/* 企业文化的三个内容 */
#company_culture ul{
  width: 578px;
  height: 288px;
  margin-top: 68px;
  display: flex;
  justify-content: space-between;
}
#company_culture ul li{
  width: 178px;
  height: 100%;
  border: 1px dashed #85b9ef;
  padding: 30px 20px 0;
  box-sizing:border-box;
}
#company_culture ul h2{
  font-size: 14px;
  color: #3abaf8;
}
#company_culture ul div{
  width: 18px;
  height: 3px;
  background: #02a6f6;
  margin: 4px 0 4px 4px;
}
#company_culture ul p{
  font-size: 12px;
  color: #6e6e6e;
  line-height: 20px;
  margin-top: 26px;
}

</style>

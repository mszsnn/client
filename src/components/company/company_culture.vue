<template>
      <div id="company_culture">

            <div class="companyCult_content">
              <t :data='obj'></t>
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
                  <h2>PERFECT</h2>
                  <p>
                    优逸客将一直秉承着技术极致、人才培养质量极致、人才就业服务极致的工作理念。
                  </p>
                </li>
                <li>
                  <h2>口碑</h2>
                  <div></div>
                  <h2>REPUTATION</h2>
                  <p>
                    一个公司的长远发展需要品牌的建立，品牌的沉淀需要靠价值的体现，能体现出自身价值的公司才会有好的口碑，口碑的叠加形成一个公司的品牌。好口碑是优逸客能持续发展的源动力。
                  </p>
                </li>
              </ul>
            </div>

      </div>
</template>
<script>
  import t from '../public/title.vue'
  export default {
      name:'company_culture',
      data(){
        return {
          obj:{
            h1:'the culture',
            h2:'企业文化'
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
#company_culture{
  width:100%;
  height:100%;
}
#company_culture .companyCult_content{
  width: 578px;
  margin: 0 auto;
  padding-top: 84px
}

/* 企业文化的三个内容 */
#company_culture ul{
  width: 578px;
  height: 288px;
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
}
#company_culture ul li{
  width: 178px;
  height: 100%;
  border: 1px dashed #85b9ef;
  padding: 30px 20px 0;
  box-sizing:border-box;
  opacity: 0;
}
#company_culture ul h2{
  font-size: 14px;
  color: #3abaf8;
}
#company_culture ul div{
  width: 18px;
  height: 3px;
  background: #3abaf8;
  margin: 4px 0 4px 4px;
}
#company_culture ul p{
  font-size: 12px;
  color: #6e6e6e;
  line-height: 20px;
  margin-top: 26px;
}
  #company_culture ul li:first-child{
     animation:run1 1s 1s forwards;
  }
#company_culture ul li:nth-child(2){
  border: 1px dashed #5AE23F;
  animation:run2 1s 1s forwards;
}
#company_culture ul li:nth-child(2) h2{
  color: #5AE23F;
}
#company_culture ul li:nth-child(2) div{
  background: #5AE23F;
}
#company_culture ul li:last-child{
  border: 1px dashed #136CD8;
  animation:run1 1s 1s forwards;

}
#company_culture ul li:last-child h2{
  color: #136CD8;
}
#company_culture ul li:last-child div{
  background: #136CD8;
}
 @keyframes run1 {
   0%{
     transform: translateY(300px);
     opacity: 0;
   }
   100%{
     transform: translateY(0px);
     opacity: 1;
   }
 }
  @keyframes run2 {
    0%{
      transform: translateY(-300px);
      opacity: 0;
    }
    100%{
      transform: translateY(0px);
      opacity: 1;
    }
  }
</style>

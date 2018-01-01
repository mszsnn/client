<template>
      <div id="company_desc">
          <div class="companyIntro_content">
              <!-- 标题 -->
              <t :data='obj'></t>
              <!-- 公司图片 -->
              <a href="" class="companyIntro_img"></a> 
              <!-- 公司介绍文本 -->
              <div class="companyIntro_text">
                <p>
                    山西优逸客科技有限公司成立于2013年，总部位于山西太原，由国内顶尖的互联网技术专家共同发起成立，致力于培养国家和社会紧缺的高级UI设计专业人才/复合型Web前端开发人才。
                  </p>
                  <p>
                  目前公司成功构建了以实训为主的业务模式，在实训实施各个环节制定高标准，并通过严格的把控来保证实训质量，是国内互联网前端开发实训行业的“拓荒者”，是企业级产品UI设计的“方案提供商”，是中国UI职业教育的知名品牌。
                </p>
                <p>
                  实训课程由北京、上海等一线城市的顶尖设计师与IT行业专家历时一年调研，结合企业对人才的实际需求研发而成，在此基础上配以完善的职业规划体系、规范的人才培养流程和标准、良好的专业人才就业服务，让每一位优逸客的学员都有一份满意的工作。
                </p>
                <p>
                  经过三年发展，公司已先后在北京、山西、陕西等区域建立了互联网人才实训基地，已为我国培养出6000余名互联网高端技术人才。在未来，我们将继续秉承“专注、极致、口碑”的文化理念，逐渐成长为中国专业的大学生职业技能实训机构。
                </p>
              </div>
          </div>

      </div>
</template>
<script>
   import t from '../public/title.vue'

   export default {
      name:'company_desc',
      data(){
        return {
          obj:{
            h1:'the profile',
            h2:'公司介绍'
          }
        }
      },

      methods:{

      },
      components:{
        t
      },

      mounted(){

      }
    }
</script>
<style lang="scss" scoped="">
@import "./animate.css";
#company_desc{
  width:100%;
  height:100%;
}
#company_desc .companyIntro_content{
  width: 663px;
  margin: 0 auto;
  padding-top: 50px;
  @media screen and (min-width:1367px){
    width:754px;
    padding-top: 100px;
  }
}

/* 公司图片 */
#company_desc .companyIntro_img{
  display: block;
  width: 663px;
  height: 155px;
  background: url("1366companyIntro_img.png") no-repeat center;
  @media screen and (min-width:1367px){
    width:754px;
    height: 246px;
    background: url("1920companyIntro_img.png") no-repeat center;
  }
  margin: 0px auto 20px;
  transform: translateY(1000px);
  animation:flipInX ease 1s 0.7s forwards;
  overflow:hidden;
}
/*  公司介绍文本*/
#company_desc .companyIntro_text{
  width: 100%;
  height: auto;
  font-size: 12px;
  color: #4c4c4c;
  line-height: 20px;
  transform: translateY(1000px);
  animation:flipInX ease 1s 0.7s forwards;
  overflow:hidden;
}
#company_desc .companyIntro_text p{
  margin-bottom:10px;
  text-indent:2em;
}

</style>

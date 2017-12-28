<template>
      <div id="case_detail">
          <main class="case_main">
              <header>
                  <router-link :to="{name:'case_list'}" class="case_back">
                      <i class="iconfont icon-arrow-left"></i>
                      <span>返回</span>
                  </router-link>
                  <div class="case_right">
                      <a href="" class="case_pre">
                          <i class="iconfont icon-vertical-copy"></i>
                          <span>上一页</span>
                      </a>
                      <a href="" class="case_next">
                          <i class="iconfont icon-vertical-copy"></i>
                          <span>下一页</span>
                      </a>
                  </div>
              </header>
              <section class="case_context">
                  <img src="./case.png" alt="">
              </section>
          </main>
      </div>
</template>
<script>
    export default {
      name:'case_detail',
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
<style scoped="">
  #case_detail{
    width: 100%;
    height:100vh;
    position: relative;
  }
  .case_main{
    width: 997px;
    height: 100%;
    margin:0 auto;
  }
  .case_main header{
    line-height: 72px;
    font-size: 14px;
    overflow: hidden;
  }
  .case_back{
    color:#01a5e2;
  }
  .case_right{
    float: right;
  }
 a{
    text-decoration: none;
  }
  .case_pre{
    color:#01a5e2;
  }
  .case_next{
    color:#000;
  }
  .case_context{
    width: 997px;
    position: absolute;
    left:0;
    right: 0;
    top:72px;
    bottom: 0;
    margin:auto;
  }
  .case_context img{
    width: 100%;
    height: 100%;
  }
  @font-face {font-family: "iconfont";
    src: url('../../assets/icon/iconfont.ttf'); /* IE9*/
  }
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-vertical-copy:before { content: "\e600"; }

  .icon-arrow-left:before { content: "\e601"; }
</style>

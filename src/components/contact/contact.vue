<template>
      <div id="contact">
            <div class="top">
                  <h1>about unique</h1>
                  <h2>新闻中心</h2>
                  <h6>Art is a language that loves life</h6>
                  <h1>+</h1>
            </div>
      </div>
</template>
<script>
    export default {
      name:'contact',
      data(){
        return {

        }
      },
      methods:{

      },
      mounted(){

      },
      components: {

      },
    }
</script>
<style lang="scss" scoped="">
      #contact {
            width: 100%;
            height: 100%;
            overflow: hidden;
            padding-top: 80px;
            .top {
                  width: 400px;
                  height: auto;
                  margin: 0 auto;
                  text-align: center;
                  h1 {
                        font-size: 40px;
                        color: #545454;
                        font-family: cg;
                        font-weight: bold;
                        font-style: italic;
                  }
                  h2 {
                        font-size: 24px;
                        color: #000;
                        font-weight: normal;
                        font-family: pf;
                        letter-spacing: 3px;
                  }
                  h6 {
                        font-size: 10px;
                        color: #949494;
                        font-weight: normal;
                        font-family: cg;
                  }
                  h1:last-child {
                        color: #f0f0f0;
                  }
            }
      }
</style>

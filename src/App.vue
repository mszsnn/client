<template>
  <div id="app">
    <side></side>  
    <router-view/>
  </div>
</template>

<script>
import side from './components/public/side.vue'
export default {
  name: 'app',
  components:{
    side
  }
}
</script>

<style>
  *{
    padding:0;
    margin:0;
    list-style: none;
    font-family: 微软雅黑;
  }
  #app{
    padding-left:190px;
    width:100%;
    height:100%;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'cg';
    src: url('./assets/CenturyGothic.ttf');
  }
  @font-face {
    font-family: 'pf';
    src: url('./assets/PingFang Light.ttf');
  }
</style>

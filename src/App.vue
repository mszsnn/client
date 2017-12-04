<template>
  <div id="app">
    <side></side>
    <div class='ms_con'>
      <transition name='move'>
        <router-view/>
      </transition>  
    </div>  
   
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
    height:100vh;
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

  .move-enter-active, .move-leave-active {
    transition: transform .5s,filter .5s;
  }
  .move-enter /* .fade-leave-active in below version 2.1.8 */ {
    transform:translateY(100%);
    filter:blur(10px);
  }
  .move-leave-to{
    transform:translateY(-100%);
    filter:blur(10px);
  }
  .ms_con{
    width:100%;
    height:100%;
    position:relative;
  }
  .ms_con > div[id]{
      position:absolute;
      left:0;
      top:0;
  }
</style>

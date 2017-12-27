<template>
  <div class="top">
    <h1 class="animated bounceInLeft">{{data.h1}}</h1>
    <h2 class="animated bounceInRight">{{data.h2}}</h2>
    <h6>Art is a language that loves life</h6>
    <h1>+</h1>
  </div>
</template>
<script>
  export default {
    name: 'title',
    props: ['data']
  }
</script>
<style lang="scss">
  @import url('./animate.css');

  .top {
    width: 600px;
    height: auto;
    margin: 0 auto;
    text-align: center;
    h1 {
      @media screen and (min-width: 1367px) {
        font-size: 55px;
      }
      font-size:30px;
      color: #545454;
      font-family: cg;
      font-weight: 800;
      font-style: italic;
    }
    h2 {
      @media screen and (min-width: 1367px) {
        font-size: 34px;
      }
      font-size: 18px;
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
      letter-spacing: 3px;
    }
    h1:last-child {
      @media screen and (min-width: 1367px) {
        font-size: 43px;
      }
      font-size: 23px;
      color: #f0f0f0;
      font-style: normal
    }
  }

  .top h1, .top h2 {
    animation-delay: .5s;
  }


</style>

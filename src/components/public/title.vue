<template>
    <div class="top">
      <h1>{{data.h1}}</h1>
      <h2>{{data.h2}}</h2>
      <h6>Art is a language that loves life</h6>
      <h1>+</h1>
    </div>
</template>
<script>
    export default {
        name:'title',
        props:['data']
    }
</script>
<style lang="scss">
.top {
      width: 400px;
      height: auto;
      margin: 0 auto;
      text-align: center;
      h1 {
        font-size: 40px;
        color: #545454;
        font-family: cg;
        font-weight:800;
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
        letter-spacing: 3px;
      }
      h1:last-child {
        color: #f0f0f0;
        font-style: normal
      }
    }
</style>

<template>
      <div id="index">
          <div>{{data}}</div>
          <side></side>
          <img src="./logo.png" alt="">
      </div>
</template>
<script>
    import side from "../public/side.vue"
    export default {
      name:'index',
      data(){
        return {
            data:'abc'
        }
      },
      components:{
          side
      }, 
      methods:{

      },
      mounted(){
           this.$http.get('/api/test',{aa:1}).then((val)=>{
             this.data=val.body;
           })
      }
    }
</script>
<style lang="scss" scoped="">
      $width:200px;
      #index{
        width: $width;
        height:200px;
        background-image: url('./logo.png');
      }

</style>

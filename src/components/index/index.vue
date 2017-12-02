<template>
      <div id="index">

      </div>
</template>
<script>
    export default {
      name:'index',
      data(){
        return {

        }
      },
      methods:{

      },
      mounted(){
           this.$http.get('/api/test').then((val)=>{
             console.log(val);
           })
      }
    }
</script>
<style lang="scss" scoped="">
      $width:200px;
      #index{
        width: $width;
        height:200px;
      }

</style>

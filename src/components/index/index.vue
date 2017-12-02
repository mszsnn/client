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
          fetch('/api/test').then(r=>r.json()).then(d=>console.log(d));
      }
    }
</script>
<style lang="scss" scoped="">

</style>

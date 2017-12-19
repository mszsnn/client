<template>
     <div id="company">
       <div class='ms_con'>
        <transition name='move'>
          <router-view/>
        </transition>  
      </div>  
     </div>
</template>

<script>
    export default {}
</script>

<style scoped lang='scss'>
    .ms_con {
      width: 100%;
      height: 100%;
      position: relative;
    }
    #company{
      width:100%;
      height:100%;
    }
    .move-enter-active,
    .move-leave-active {
      transition: transform 0.6s cubic-bezier(0.86, 0, 0.07, 1), 
        opacity 0.6s cubic-bezier(0.86, 0, 0.07, 1);
    }
    .move-enter {
      transform: translate3d(0, 100%, 0);
      opacity: 0;
    }
    .move-leave-to {
      transform: translate3d(0, -100%, 0);
      opacity: 0;
    }
</style>


<template>
    <div id="casebox">
        <transition name="jump">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang='scss'>
    #casebox {
        width: 100%;
        height: 100%;
    }
    @keyframes enter {
        0%{
            transform:translateY(500px) scale(0.5,0.5);
        }
        50%{
            transform:translateY(0) scale(0.5,0.5);
        }

        100%{
            transform:translateY(0) scale(1,1);
        }
    }
    @keyframes leave {
        0%{
            transform:translateY(0) scale(1,1);
        }
        50%{
            transform:translateY(0) scale(0.5,0.5);
        }
        100%{
            transform:translateY(500px) scale(0,0);
        }
    }
    .jump-enter-active{
        animation: enter ease-in .7s .7s;
    }
    .jump-leave-active{
        animation: leave linear .7s;
    }
</style>


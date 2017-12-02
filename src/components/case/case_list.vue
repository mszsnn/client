<template>
    <div id="case">
        <side></side>
        <div class="case_container">
            <header>
                <div class="case_title">
                </div>
                <div class="case_add"></div>
            </header>
            <div class="case_main">
                <swiper :options="swiperOption">
                    <swiper-slide>
                        <div class="case_session">
                            <div class="case_imgbox">
                                <img src="./case_items.png" alt="">
                            </div>
                            <div class="case_add1"></div>
                            <div class="case_num">01</div>
                            <div class="case_name">山大君宇网</div>
                            <div class="case_eng">shandajunyuwang</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="case_session">
                            <div class="case_imgbox">
                                <img src="./case_items.png" alt="">
                            </div>
                            <div class="case_add1"></div>
                            <div class="case_num">02</div>
                            <div class="case_name">山大君宇网</div>
                            <div class="case_eng">shandajunyuwang</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="case_session">
                            <div class="case_imgbox">
                                <img src="./case_items.png" alt="">
                            </div>
                            <div class="case_add1"></div>
                            <div class="case_num">03</div>
                            <div class="case_name">山大君宇网</div>
                            <div class="case_eng">shandajunyuwang</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
    import side from "../public/side.vue";
    import {swiper, swiperSlide} from 'vue-awesome-swiper';
    import 'swiper/dist/css/swiper.css';
    export default {
        name: 'team',
        data(){
             return {
                swiperOption: {
                    slidesPerView: 3
                }
            }
        },
        methods: {},
        mounted(){

        },
        components: {
            side,
            swiper,
            swiperSlide
        },

    }
</script>
<style scoped="">
    .case_container {
        width: auto;
        height: 100%;
        margin-left: 194px;
    }

    .case_container header {
        float: left;
        width: 100%;
    }

    .case_container .case_title {
        width: 260px;
        height: 77px;
        background: url("./case_title.png");
        margin: 0 auto;
        margin-top: 84px;
    }

    .case_container .case_add {
        width: 16px;
        height: 16px;
        background: url("./case_add.png");
        margin: 0 auto;
        margin-top: 19px;
    }

    .case_container .case_main {
        width: 100%;
        float: left;
        overflow: hidden;
    }

    .case_container .case_session {
        width: 282px;
        height: 458px;
        float: left;
        background: #fff;
        margin: 0 18px;
        margin-top: 31px;
        border: 1px solid #e4e5e5;
    }

    .case_container .case_imgbox {
        width: 270px;
        height: 246px;
        border: 1px solid #e4e5e5;
        margin: 0 auto;
        margin-top: 5px;
    }

    .case_container .case_add1 {
        height: 16px;
        width: 16px;
        background: url("./case_add.png");
        margin: 0 auto;
        margin-top: 55px;
    }

    .case_container .case_num {
        font-size: 32px;
        text-align: center;
        margin-top: 16px;
    }

    .case_container .case_name {
        font-size: 16px;
        text-align: center;
    }

    .case_container .case_eng {
        font-size: 16px;
        text-align: center;
    }
</style>

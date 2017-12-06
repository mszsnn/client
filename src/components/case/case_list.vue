<template>
    <div id="case">
        <div class="case_container">
            <header>
                <t :data='obj'></t>
            </header>
            <div class="case_main">
                <swiper :options="swiperOption">
                    <swiper-slide>
                    <router-link class="case_session" :to="{name:'case_detail'}">
                        <div class="case_imgbox">
                            <img src="./case_items.png" alt="">
                        </div>
                        <div class="case_bottom">
                            <div class="case_add1"><span>|</span><span>|</span><span>|</span></div>
                            <div class="case_num">01</div>
                            <div class="case_name">山大君宇网</div>
                            <div class="case_eng">shandajunyuwang</div>
                        </div>
                    </router-link>
                </swiper-slide>
                    <swiper-slide>
                        <router-link class="case_session" :to="{name:'case_detail'}">
                            <div class="case_imgbox">
                                <img src="./case_items.png" alt="">
                            </div>
                            <div class="case_bottom">
                                <div class="case_add1"><span>|</span><span>|</span><span>|</span></div>
                                <div class="case_num">02</div>
                                <div class="case_name">山大君宇网</div>
                                <div class="case_eng">shandajunyuwang</div>
                            </div>
                        </router-link>
                    </swiper-slide>
                    <swiper-slide>
                        <router-link class="case_session" :to="{name:'case_detail'}">
                            <div class="case_imgbox">
                                <img src="./case_items.png" alt="">
                            </div>
                            <div class="case_bottom">
                                <div class="case_add1"><span>|</span><span>|</span><span>|</span></div>
                                <div class="case_num">03</div>
                                <div class="case_name">山大君宇网</div>
                                <div class="case_eng">shandajunyuwang</div>
                            </div>
                        </router-link>
                    </swiper-slide>
                    <swiper-slide>
                        <router-link class="case_session" :to="{name:'case_detail'}">
                            <div class="case_imgbox">
                                <img src="./case_items.png" alt="">
                            </div>
                            <div class="case_bottom">
                                <div class="case_add1"><span>|</span><span>|</span><span>|</span></div>
                                <div class="case_num">04</div>
                                <div class="case_name">山大君宇网</div>
                                <div class="case_eng">shandajunyuwang</div>
                            </div>
                        </router-link>
                    </swiper-slide>
                    <swiper-slide>
                        <router-link class="case_session" :to="{name:'case_detail'}">
                            <div class="case_imgbox">
                                <img src="./case_items.png" alt="">
                            </div>
                            <div class="case_bottom">
                                <div class="case_add1"><span>|</span><span>|</span><span>|</span></div>
                                <div class="case_num">05</div>
                                <div class="case_name">山大君宇网</div>
                                <div class="case_eng">shandajunyuwang</div>
                            </div>
                        </router-link>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper';
    import 'swiper/dist/css/swiper.css';
    import t from  "../public/title";
    export default {
        name: 'team',
        data(){
            return {
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    autoPlay: 1000,
                    loop: true,

                },
                obj: {
                    h1: 'Case study',
                    h2: '案例展示'
                }
            }
        },
        methods: {},
        mounted(){
        },
        components: {
            swiper,
            swiperSlide,
            t
        },

    }
</script>
<style scoped="">
    a {
        color: #000;
        text-decoration: none;
    }

    #case {
        width: 100%;
        height: 100%;
    }

    .case_container {
        width: 100%;
        height: 100%;
    }

    .case_container header {
        width: 100%;
        margin-top:84px;
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
        background: #fff;
        margin: 0 auto;
        border: 1px solid #e4e5e5;
        position: relative;
        display: block;
    }

    .case_container .case_imgbox {
        width: 270px;
        height: 246px;
        border: 1px solid #e4e5e5;
        margin: 0 auto;
        margin-top: 5px;
        filter: blur(2px);
    }

    .case_container .case_bottom {
        width: 282px;
        height: 207px;
        transition: height .5s ease-in;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .case_container .case_add1 {
        height: 16px;
        width: 16px;
        margin: 0 auto;
        margin-top: 55px;
        position: relative;
    }

    .case_container .case_add1 span:first-child {
        position: absolute;
        width: 7px;
        height: 16px;
        left: 0;
        top: 1000px;
        color: #fff;
        text-align: center;
        line-height: 16px;
        transition: all .5s cubic-bezier(1, 0, 0, 1);
        opacity: 0;
    }

    .case_container .case_add1 span:nth-child(2) {
        position: absolute;
        width: 7px;
        height: 16px;
        left: 0;
        top: 0;
        color: #ccc;
        text-align: center;
        line-height: 16px;
        transition: all .5s cubic-bezier(1, 0, 0, 1);
    }

    .case_session:hover span:first-child {
        top: 0;
        opacity: 1;
    }

    .case_session:hover span:nth-child(2) {
        top: -1000px;
        opacity: 0;
    }

    .case_session:hover .case_imgbox {
        filter: none;
    }

    .case_container .case_add1 span:last-child {
        position: absolute;
        width: 8px;
        height: 16px;
        left: -1000px;
        top: 0;
        transform: rotate(90deg);
        color: #fff;
        text-align: center;
        line-height: 16px;
        transition: all .5s cubic-bezier(1, 0, 0, 1);
        opacity: 0;
    }

    .case_session:hover span:last-child {
        left: 0;
        opacity: 1;
    }

    .case_session:hover .case_bottom {
        height: 300px;
        background: orange;
        color: #fff;
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

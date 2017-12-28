<template>
    <div id="case">
        <div class="case_container">
            <header>
                <t :data='obj'></t>
            </header>
            <div class="case_main">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="item in cases" :key="item.id">
                    <router-link class="case_session" :to="{name:'case_detail',params:{id:item.id}}">
                        <div class="case_imgbox">
                            <img src="./case_items.png" alt="">
                        </div>
                        <div class="case_bottom">
                            <div class="case_add1"><span>|</span><span>|</span><span>|</span></div>
                            <div class="case_num">01</div>
                            <div class="case_name">{{item.titleCh}}</div>
                            <div class="case_eng">{{item.titleEn}}</div>
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
                    slidesPerView:4,
                    spaceBetween:40,
                    loop: true,
                    grabCursor: true,
                    breakpoints: {
                        1367: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        }
                    }
                },
                obj: {
                    h1: 'Case study',
                    h2: '案例展示'
                },
                cases:[]
            }
        },
        methods: {},
        mounted(){
            this.$http.get('/api/case/show').then(function(res){
                this.cases=res.body;
            })
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
        background: #01a5e2;
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
    @media screen and (min-width:1367px){
        .case_container .case_session {
            width: 402px;
            height: 646px;
            background: #fff;
            margin: 0 auto;
            border: 1px solid #e4e5e5;
            position: relative;
            display: block;
        }
        .case_container .case_imgbox {
            width: 375px;
            height: 346px;
            border: 1px solid #e4e5e5;
            margin: 0 auto;
            margin-top:11px;

        }
        .case_container .case_imgbox img{
            display: block;
            width:100%;
            height:100%;
        }
        .case_container .case_bottom {
            width: 402px;
            height: 290px;
            transition: height .5s ease-in;
            position: absolute;
            bottom: 0;
            left: 0;
        }
        .case_session:hover .case_bottom {
            height: 415px;
            background: #01a5e2;
            color: #fff;
        }
    }
    @keyframes comeIn {
        0%{
            transform:translateY(500px);
        }
        100%{
            transform:translateY(0px);
        }
    }
    .swiper-slide{
        transform:translateY(500px);
        animation:comeIn 1s ease-in .2s forwards;
    }
    .swiper-slide:nth-child(1){
        animation:comeIn 1s ease-in .4s forwards;
    }
    .swiper-slide:nth-child(2){
        animation:comeIn 1s ease-in .6s forwards;
    }
    .swiper-slide:nth-child(3){
        animation:comeIn 1s ease-in .8s forwards;
    }
    .swiper-slide:nth-child(4){
        animation:comeIn 1s ease-in 1s forwards;
    }
</style>

<template>
  <div id="side" class="nav">
     <section>
        <a href="#/" class="logo">
          <img src="./logo.png" class="logoPic">
          <img src="./project.png" class="project">
        </a>
        <ul>
          <li v-for="(item,index) in category" :key="item.id" class="navList">
            <a :href="item.route" :class="{active:current==index}" @click="c(item)">
              <span>{{item.title}}</span>
              <span>{{item.eng}}</span>
            </a> 
          </li>
        </ul>   
        <div class="search">
          <input type="" name="" class="searchBox" placeholder="案例搜索">
          <i class="iconfont icon-sousuo- searchBtn"></i>
        </div>
     </section>
     <transition name="tran">
      <div class="list" v-if='children.length'>
          <div v-for="(item,index) in children" @click="currentchilren=index"  :class="{active:currentchilren==index}"  :key="item.id">
            <a :href="item.route">{{item.title}}</a>
          </div>
      </div>
     </transition>
  </div>
</template>
<script>

  export default {
    name: 'side',
    data() {
      return {
        current:0,
        currentchilren:0,
        category:[
          {id:0,title:'首页',eng:'Home',route:"#/index",children:[]},
          {id:1,title:'公司简介',eng:'Home',route:"#/company",children:[
            {id:7,title:'公司介绍',route:'#/company/company_desc'},
            {id:8,title:'发展历程',route:'#/company/company_culture'},
            {id:9,title:'企业文化',route:'#/company/company_dev'},
          ]},
          {id:2,title:'新闻动态',eng:'NEWS',route:"#/news",children:[]},
          {id:3,title:'服务项目',eng:'SEIVICES',route:"#/services",children:[]},
          {id:4,title:'案例展示',eng:'CASE',route:"#/case",children:[]},
          {id:5,title:'团队介绍',eng:'TEAM',route:"#/team",children:[]},
          {id:6,title:'联系我们',eng:'CONTACT US',route:"#/contact",children:[]},
        ],
        children:[],
      }
    },

    methods: {
      c(item){
          this.current=item.id;
          this.children=item.children
      }
    },
  }
</script>
<style lang="scss" scoped="">
  @import "../../assets/iconfont/iconfont.css";

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-style: normal;
  }

  a {
    text-decoration: none;
  }

  body, html {
    height: 100%;
  }
  .tran-enter-active, .tran-leave-active {
    transition: transform .5s cubic-bezier(0.86, 0, 0.07, 1) ;
  }
  .tran-enter,.tran-leave-to {
    transform: translate3d(-100%,0,0);
  }

  #side {
    width: 190px;
    float: left;
    box-shadow: 3px 0 5px 3px rgba(0, 0, 0, 0.1);
    padding-bottom: 117px;
    color: #878787;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    padding-top: 40px;
    z-index: 100000
  }
  #side section{
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0px;
    z-index: 2;
    background: #fff;
  }
  #side .logo{
    display: block;
    width: 100%;
    height: 56px;
    padding:30px 0;
  }

  #side.logo img {
    display: block;
    float: left;
  }

  #side .logo .logoPic {
    margin-left: 30px;
  }

  #side .logo .project {
    margin-left: 2px;
  }

  #side ul {
    width: 100%;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;

  }

  #side ul .navList {
    width: 100%;
    position: relative;

  }

  .list {
    width: 182px;
    height: 100vh;
    position: absolute;
    top:0;
    left:100%;
    background: #363636;
  }

  .list div {
    width: 100%;
    height: 109px;
    border-bottom: 2px solid #505050;
    line-height: 109px;
    text-align: center;
  }
  .list div a{
    display: block;
    width: 100%;
    height: 100%;
    color: #7b7b7b;
  }
  .list div.active {
    background: #01a5e2;
  }
  .list div.active a{
      background: #01a5e2;
      color: #fff;
  }
  #side ul .navList a {
    display: block;
    height: 100%;
    font-size: 16px;
    font-family: "苹方", " 微软雅黑";
    color: #7d7d7d;
    text-align: center;
  }

  #side ul .navList a span:nth-of-type(1) {
    width: 100%;
    display: block;
    margin-top: 9px;
  }

  #side ul .navList a span:nth-of-type(2) {
    font-size: 12px;
  }

  #side ul .navList a.active {
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    color: #01a5e2;
  }

  #side ul .navList a.active::after {
    content: "";
    display: block;
    width: 7px;
    height: 58px;
    background: url("./active.png");
    background-repeat: no-repeat;
    position: absolute;
    right: 0;
    top: 0;
  }

  #side .search {
    width: 100%;
    height: 24px;
    margin-top: 40px;
    position: relative;
  }

  #side .searchBox {
    width: 130px;
    height: 12px;
    border: 1px solid #f3f3f3;
    border-radius: 24px;
    margin-left: 17px;
    font-size: 12px;
    text-align: left;
    padding: 6px 13px;
  }

  #side .searchBtn {
    position: absolute;
    right: 26px;
    top: 5px;
    color: #3ebbe9;
  }


</style>

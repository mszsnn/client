<template>
  <div id="side" class="nav">
     <section>
        <a href="#/" class="logo">
          <img src="./logo.png" class="logoPic">
        </a>
        <ul>
          <li v-for="(item,index) in category" :key="item.id" class="navList">
            <a :href="item.route" :class="{active:current==index}" @click="c(item)">
              <span>{{item.title}}</span>
              <span>{{item.eng}}</span>
            </a> 
          </li>
        </ul>   

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
          {id:1,title:'公司简介',eng:'Home',route:"#/company/company_desc",children:[
            {id:7,title:'公司介绍',route:'#/company/company_desc'},
            {id:8,title:'发展历程',route:'#/company/company_dev'},
            {id:9,title:'企业文化',route:'#/company/company_culture'},
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
          this.children=item.children;
         
      }
    },
    watch:{
      currentchilren(){
          this.category[1].route=this.children[this.currentchilren].route;
      }
    }
   
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
    width: 203px;
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
    padding:26px 0;
    overflow: hidden;
  }

  #side .logo img {
    display: block;
    width:65px;
    height:55px;
    margin:0 auto;
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
    width: 147px;
    height: 100vh;
    position: absolute;
    top:0;
    left:100%;
    background: #f6f6f6;
    padding-top:123px;

  }

  .list div {
    width: 100%;
    height: 56px;
    border-bottom: 2px solid #f6f6f6;
    line-height: 56px;
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
    /*text-align: center;*/
    padding-left: 71px;
  }

  #side ul .navList a span:nth-of-type(1) {
    width: 100%;
    display: block;
    margin-top: 9px;
  }

  #side ul .navList a span:nth-of-type(2) {
    font-size: 16px;
      font-family: "San Francisco Display";
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
    height: 100%;
    background: url("./active.png");
    background-repeat: no-repeat;
    background-size:cover;
    position: absolute;
    right: 0;
    top: 0;
  }


  @media screen and (min-width:1920px){
      #side{
          width:272px;
      }
  }

</style>

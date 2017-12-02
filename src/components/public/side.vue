<template>
      <div id="side">
          <div class="nav">
              <a href="" class="logo">
                  <img src="./logo.png" class="logoPic">
                  <img src="./project.png" class="project">
              </a>
              <ul>
                  <li class="navList">
                      <a href="" >
                          <span>首页</span>
                          <span>HOME</span>
                      </a>
                  </li>
                  <li class="navList">
                      <a href="" class="active">
                          <span>公司简介</span>
                          <span>HOME</span>
                      </a>
                      <div class="list">

                          <div class="active">公司介绍</div>
                          <div>公司介绍</div>
                          <div>公司介绍</div>
                      </div>
                  </li>
                  <li class="navList">
                      <a href="" >
                          <span>首页</span>
                          <span>HOME</span>
                      </a>
                  </li>
                  <li class="navList">
                      <a href="" >
                          <span>首页</span>
                          <span>HOME</span>
                      </a>
                  </li>
                  <li class="navList">
                      <a href="" >
                          <span>首页</span>
                          <span>HOME</span>
                      </a>
                  </li>
                  <li class="navList">
                      <a href="">
                          <span>首页</span>
                          <span>HOME</span>
                      </a>
                  </li>
                  <li class="navList">
                      <a href="" >
                          <span>首页</span>
                          <span>HOME</span>
                      </a>
                  </li>
              </ul>
              <div class="search">
                  <input type="" name="" class="searchBox" placeholder="案例搜索">
                  <i class="iconfont icon-sousuo- searchBtn"></i>
              </div>
          </div>
      </div>
</template>
<script>

    export default {
      name:'side',
      data(){
        return {
           
        }
      },
     
      methods:{

      },
    }
</script>
<style lang="scss" scoped="">
    @import "../../assets/iconfont/iconfont.css";
    *{
        margin:0;
        padding:0;
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    body,html{
        height:100%;
    }
    #side{
        width: 100%;
        height:100vh;
        overflow: hidden;
    }
    #side .nav{
        width:190px;
        float: left;
        box-shadow: 3px 0 5px 3px rgba(0,0,0,0.1);
        padding-bottom: 117px;
        color:#878787;
        position: relative;

    }
    #side .nav .logo{
        display: block;
        width: 100%;
        height:56px;
        margin-top: 31px;
    }
    #side .nav .logo img{
        display: block;
        float: left;
    }
    #side .nav .logo .logoPic{
        margin-left: 30px;
    }
    #side .nav .logo .project{
        margin-left: 2px;
    }
    #side .nav ul{
        width:100%;
        height:500px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;

    }
    #side .nav ul .navList{
        width:100%;
        position: relative;

    }
    #side .nav ul .navList .list{
        width:182px;
        height: 100vh;
        position:absolute;
        top:0px;
        right:-182px;
        background: #363636;
        z-side: 5;
        opacity: 0;
    }

    #side .nav ul .navList .list div{
        width:100%;
        height: 109px;
        border-bottom:2px solid #505050;
        line-height: 109px;
        color:#7b7b7b;
        text-align: center;
    }
    #side .nav ul .navList .list div.active{
        background: #01a5e2;
        color:#fff;
    }
    #side .nav ul .navList a{
        display: block;
        height: 100%;
        font-size: 16px;
        font-family: "苹方"," 微软雅黑";
        color:#7d7d7d;
        text-align: center;
    }
    #side .nav ul .navList a span:nth-of-type(1){
        width: 100%;
        display: block;
        margin-top: 9px;
    }
    #side .nav ul .navList a span:nth-of-type(2){
        font-size: 12px;
    }
    #side .nav ul .navList a.active{
        border-bottom:1px solid #eee;
        border-top:1px solid #eee;
        color:#01a5e2;
    }
    #side .nav ul .navList a.active::after{
        content: "";
        display: block;
        width: 7px;
        height: 58px;
        background:url("./active.png");
        background-repeat: no-repeat;
        position: absolute;
        right:0;
        top:0;

    }
    #side .nav .search{
        width:100%;
        height:24px;
        margin-top: 40px;
        position: relative;
    }
    #side .nav .searchBox{
        width: 130px;
        height: 12px;
        border:1px solid #f3f3f3;
        border-radius:24px;
        margin-left: 17px;
        font-size: 12px;
        text-align: left;
        padding:6px 13px;
    }
    #side .nav .searchBtn{
        position: absolute;
        right:26px;
        top:5px;
        color:#3ebbe9;
    }


</style>

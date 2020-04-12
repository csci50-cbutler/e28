<template>
    <div>
        <div class="jumbotron">
            <span class="logo">{{logo}}</span>
            <h1>{{h1Hdr}}</h1>
            <p>{{hdrInfo}}</p>
        </div>
        
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">{{home}}</a></li>
                    <li><a href="#">{{page1}}</a></li>
                    <li><a href="#">{{page2}}</a></li>
                    <li><a href="#">{{page3}}</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp; Abel Manager</a></li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "WebnavDesign",
    data:  function(){
        return {
            logo: "G",
            h1Hdr: "CONTACT CENTER MANAGER HUB",
            hdrInfo: "Providing Excellent Customer Engagement",
            home: "Home",
            page1: "Contact Center Main Page",
            page2: "Personalization",
            page3: "Settings",
        }
  },
  template: "#webnav-design",
}
</script>

<style scoped>
    body {
        background-color: #FAF9F6;
    }

    .logo {
        position: absolute;
        top: -19px;
        right: 20px;
        font-family: 'Lobster', cursive;
        font-size: 9em;
        font-style: italic;
        font-weight: bold;
        color: #1D024F;
        opacity: 0.3;
    }

    .navbar {
      margin-bottom: 50px;
      border-radius: 0;
      background-color: #1D024F;
    }
     .jumbotron {
        margin-bottom: 0;
        background-color: #C5B870;
        text-align: center;
    }

    .col-sm-8 {
        color: #1D024F;
        font-weight: bold;
    }
</style>


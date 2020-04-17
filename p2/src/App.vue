<template>
    <div id="app">
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
                    <span class="icon-bar"></span>
                </button>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li v-for="link in links" :key="link">
                    <router-link :to="{name: link}" exact exact-active-class="active">{{link}}</router-link>
                    </li>                
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp; Abel Manager</a></li>
                </ul>
                </div>
            </div>
        </nav>
        <router-view></router-view> 
    </div>
</template>

<script>
export default {
    name: "App",
    props: {
        logo: {
            type: String,
            default: "G"
        },
    },
    data:  function(){
        return {
            h1Hdr: "CONTACT CENTER MANAGER HUB",
            hdrInfo: "Providing Excellent Customer Engagement",
            links: ["Home", "Manager Hub", "Dashboard", "Administration"],
        };
    },
    components: {},
}
</script>

<style scoped>
    body {
        background-color: #FAF9F6;
    }

    .logo {
        position: absolute;
        top: -19px;
        right: 30px;
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
      color: oldlace;
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

    .router-link-active:link {
        background-color: oldlace;
        color: #C5B870;
        font-weight: bold;
    }
    
    .currpage, .exact-currpage{
        color: fuchsia;
    }

    .active {
        background-color: #C5B870;
        color: oldlace;
        font-weight: bold;
    }


</style>



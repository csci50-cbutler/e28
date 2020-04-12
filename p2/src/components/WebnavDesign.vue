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
                    <li class="active" @click='navpage = "Home"'><a href="#">Home</a></li>
                    <li><a href="#" @click='navpage = "Manager Hub"'>Contact Center Manager Hub</a></li>
                    <li><a href="#" @click='navpage = "Personalization"'>Personalization</a></li>
                    <li><a href="#" @click='navpage = "Setting"'>Settings</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp; Abel Manager</a></li>
                </ul>
                </div>
            </div>
        </nav>

    <manager-hub v-if="navpage == 'Manager Hub'"></manager-hub>
    <personalize-page v-else-if="navpage == 'Personalization'"></personalize-page>
    <home-page v-else></home-page>
    </div>
</template>

<script>
import HomePage from './HomePage.vue';
import ManagerHub from './MgrHub.vue';
import PersonalizePage from './PersonalizePage.vue';

export default {
    name: "WebnavDesign",
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
            navpage: null,
        };
    },
    components: {
        "home-page": HomePage,
        "manager-hub": ManagerHub,
        "personalize-page": PersonalizePage,
    },
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


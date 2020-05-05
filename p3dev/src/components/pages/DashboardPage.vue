<template>
    <div id="dashboard">
        <!-- Menu Icon, Navigation & Side Menu -->
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>

            <div class="w3-container w3-row">
                <div class="w3-col s4">
                    <p><img src="@/assets/images/csr3.jpg" class="w3-circle w3-margin-right" style="width:50px; height: 50px">Abel Manager</p>
                </div>
                <br>
                <div class="w3-col s8 w3-bar"><br>
                    <a href="#" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i></a>
                    <a href="#" class="w3-bar-item w3-button"><i class="fa fa-comments"></i></a>
                    <a href="#" class="w3-bar-item w3-button"><i class="fa fa-line-chart"></i></a>
                    <a href="#" class="w3-bar-item w3-button"><i class="fa fa-cog"></i></a>
                </div>
         </div>
         <hr>

         <div class="w3-container">
            <h3>Dashboard</h3>
            <div class="w3-bar-block">
                <a href="#" class="w3-bar-item w3-button w3-padding-16 w3-large w3-dark-grey w3-hover-orange" @click="closeNav()" title="close menu">
                    <i class="fa fa-remove fa-fw"></i>&nbsp;Close Menu</a>
                <a href="#" class="w3-bar-item w3-button w3-padding w3-blue"><i class="fa fa-tachometer fa-fw"></i>&nbsp;Dashboards</a>
                <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-book fa-fw"></i>&nbsp;Knowledge Base</a>
                <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-road fa-fw"></i>&nbsp;Voice Routes</a>
                <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-exchange fa-fw"></i>&nbsp;Contact Flows</a>
                <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-diamond fa-fw"></i>&nbsp;Orders</a>
                <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-bell fa-fw"></i>&nbsp;News</a>
                <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-bank fa-fw"></i>&nbsp;Commercials</a>
                <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-calendar fa-fw"></i>&nbsp;Schedules</a>
                <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-cog fa-fw"></i>&nbsp;Settings</a>
                <br><br>
            </div>
         </div>  <!--w3-container  for side nav window-->
    </div> <!-- Outer side nav div -->
     <!-- End Navigation -->

        <!-- Begin Main Section:  Dashboard tabs and other metrics-->
        <div id="main">
            <h1>CONTACT CENTER MANAGER DASHBOARD</h1>
            <span style="font-size:30px;cursor:pointer; color:green" @click="openNav()">&#9776;</span>
            <header class="w3-container" style="padding-top:22px">
                <h2>Contact Center Floor View</h2><br>
            </header>

            <!-- Dashboard cards start using static data -->
            <dashboard-queues></dashboard-queues>

            <!-- Graphs with agent call monitoring KPIs using static data -->
            <h2>Call Monitoring</h2>
            <graph-dash></graph-dash>

            <!-- CallsByGeo component for geo  stats  & location  details-->
            <h2>North American Contact Center Health Stats </h2>
            <geo-stats></geo-stats>
            <br>
                
            <!-- Shift Information -->
            <h2>Workforce Management -- Shift Details</h2>
            <shift-details></shift-details>
            
            <!-- Stats for sales, satisfaction and other KPIs with static data -->
            <h2>Contact, Customer & Connectivity KPIs</h2><br>
            <call-metrics></call-metrics>

        </div>      <!-- End main section -->

        <footer class="container-fluid text-center">
            <span class="footer">Manager/Agent Interaction:  &nbsp;&nbsp;
                <a href="#" class="fa fa-headphones" title="Listen In" >  &nbsp;&nbsp;&nbsp;</a>
                <a href="#" class="fa fa-microphone-slash" title="Speak with Agent">  &nbsp;&nbsp;&nbsp;</a>
                <a href="#" class="fa fa-dot-circle-o" title="Record Live Agent" >  &nbsp;&nbsp;&nbsp;</a>
                <a href="#" class="fa fa-comments-o" title="Chat with Agent">  &nbsp;&nbsp;&nbsp;</a>
                <a href="#" class="fa fa-phone-square" title="Priority Transfer">  &nbsp;&nbsp;&nbsp;</a>
            </span>
        </footer>

    </div>  
</template>

<script>
    // Import setions 
    /*import Vue from 'vue';
    import Vuelidate from 'vuelidate';
    Vue.use(Vuelidate);
*/

    // imported section fort the dashboard
    import CallsByGeo from '@/components/CallsByGeo.vue';
    import CallMetrics from   '@/components/CallMetrics.vue';
    import DashQueues from '@/components/DashQueues.vue';
    import GraphDash from  '@/components/GraphDash.vue';
    import ShiftDetails from '@/components/ShiftDetails.vue';

     //Backend Data Processing
    import * as app from '@/common/app.js';
    //import { required, minLength } from "vuelidate/lib/validators";
   
    export default {
         data:function(){
             return{}
         },
        components: {
            'geo-stats': CallsByGeo,
            'call-metrics': CallMetrics,
            'dashboard-queues': DashQueues,
            'graph-dash': GraphDash,
            'shift-details': ShiftDetails,
        },

        computed: {},

        methods: {
            // Side navigation
            openNav: function() {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
            },
            closeNav: function() {
                document.getElementById("mySidenav").style.width = "0";
                document.getElementById("main").style.marginLeft = "0";
            },
        },           //methods delimeter

    // Loads shift data when page  is accessed
        mounted: function() {
            app.api.all('employee')
            .then(response => {
                this.empInfo = response;
                console.log(this.empInfo);
            });
        }
    }               // Export default delimeter
</script>

<style scoped>
    body {
        font-family: "Raleway", sans-serif;
        background-color: lightgrey;
    }
    /* Nav styles */
    .img {
        border-radius: 50%;
        border: 2px solid pink;
  }
    .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #FAF9F6;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
    }
    .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 16px;
        color: darkgrey;
        display: block;
        transition: 0.3s;
    }
    .sidenav a:hover {
        color: goldenrod;
    }
  .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 38px;
        margin-left: 50px;
  }
  .sidenav p {
        font-size: 16px;
        margin-left: 2px;
  }
  #main {
        transition: margin-left .5s;
        padding: 16px;
  }
  @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 14px;}
  }
  /* Logo on header */*
  .logo {
        font-family:"Lobster";
        font-size: 42px;
        font-weight: bold;
        opacity: 0.3;
        color: midnightblue;
  }
  .logo-small {
        font-family: "Lobster";
        font-size: 30px;
        font-weight: bold;
  }
  /* main section styles */
  h1{
        text-align: center;
        font-weight: bold;
  }
  h2{
      color: midnightblue;
      font-weight: bold;
      margin-left: 1%;
  }
  .mod i {
        background-color: white;
        color: indigo;
        border-radius: 50%;
        border: 2px solid grey;
        padding:10px;
        margin-top: -45px;
        margin-left: 20px;
  }
  .fa-dashboard {
        color: orange;
        font-size: 24px;
        padding-right: 5px;
  }
  /* employee shift and monitoring styling  */
    #shifts table{
        border-collapse: collapse;
        width: 95%;
        margin-left: 3%;
    }
    #shifts td, #shifts th {
        border: 2px solid darkorange;
        padding: 8px;
    }
    #shifts tr:nth-child(even){
        background-color: #f2f2f2;
        }
    #shifts tr:hover {
        background-color: lightgray;
        }
    #shifts th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color:  peachpuff;
        color: white;
    }

    input[type=text], select{
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0 0 0;
        display: inline-block;
        background-color:  peachpuff;
        border: 3px inset darkorange;
        border-radius: 4px;
        box-sizing: border-box;
        height: 35px;
    }
    input[type=time]{
        width: 30%;
        height: 35px;
        padding: 12px 12px;
        margin: 8px 0;
        display: inline-block;
        background-color:  oldlace;
        border: 3px inset darkorange;
        border-radius: 4px;
        box-sizing: border-box;
    }
    input[type=submit] {
        width: 100%;
        background-color: oldlace;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    input[type=submit]:hover {
        background-color: darkorange;
    }
    button {
        border: 5px inset  navy;
        background-color:  oldlace;
        color:  darkgray;
        font-weight: bold;
        height: 40px;
        width:  100%;
    }
    /* Footer styling and color */
    footer {
        background-color: #1D024F;
        padding: 25px;
        }
    footer i {
        color: #FAF9F6;
    }
    footer span {
        color: #FAF9F6;
        font-size:30px;
        padding-right: 3%;
    }
    .footer .fa {
        color: #FAF9F6;
    font-size:38px;
        padding-right: 2em;
    } 
</style>
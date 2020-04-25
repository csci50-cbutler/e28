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
            <div id="row1" class="w3-row-padding w3-margin-bottom mod ">
                <div class="w3-quarter">
                    <div class="w3-container w3-green w3-padding-16 ">
                        <div class="w3-left"><i class="fa fa-comment w3-xxxlarge"></i></div>
                        <div class="w3-right"><h3>693</h3></div>
                        <div class="w3-clear"></div>
                        <h4>Live Chat & Chatbot</h4>
                    </div>
                </div>
                <div class="w3-quarter">
                    <div class="w3-container w3-pink w3-padding-16 style='border: 3px solid white;'">
                        <div class="w3-left"><i class="fa fa-phone w3-xxxlarge"></i></div>
                        <div class="w3-right"><h3>599</h3> </div>
                        <div class="w3-clear"></div>
                        <h4>Automated Calls</h4>
                    </div>
                </div>
                <div class="w3-quarter">
                    <div class="w3-container w3-teal w3-padding-16">
                        <div class="w3-left"><i class="fa fa-headphones w3-xxxlarge"></i></div>
                        <div class="w3-right"><h3>2335</h3></div>
                        <div class="w3-clear"></div>
                        <h4>Agent Calls</h4>
                    </div>
                </div>
                <div class="w3-quarter">
                    <div class="w3-container w3-orange w3-text-white w3-padding-16">
                        <div class="w3-left"><i class="fa fa-user-md w3-xxxlarge"></i></div>
                        <div class="w3-right"><h3>1500</h3></div>
                        <div class="w3-clear"></div>
                        <h4>Transfer to Specialist</h4>
                    </div>
                </div>
            </div>
            <br><br>  <!-- End first row dashboard tabs -->

            <div id="row2" class="w3-row-padding w3-margin-bottom mod">
                <div class="w3-quarter">
                    <div class="w3-container w3-blue w3-padding-16">
                        <div class="w3-left"><i class="fa fa-twitter w3-xxxlarge"></i></div>
                        <div class="w3-right"><h3>152</h3></div>
                        <div class="w3-clear"></div>
                        <h4>Twitter Contacts</h4>
                    </div>
                </div>
                <div class="w3-quarter">
                    <div class="w3-container w3-cyan w3-padding-16">
                        <div class="w3-left"><i class="fa fa-barcode w3-xxxlarge"></i></div>
                        <div class="w3-right"><h3>3200</h3></div>
                        <div class="w3-clear"></div>
                        <h4>Product Requests</h4>
                    </div>
                </div>
                <div class="w3-quarter">
                    <div class="w3-container w3-red w3-padding-16">
                        <div class="w3-left"><i class="fa fa-shopping-cart w3-xxxlarge"></i></div>
                        <div class="w3-right"><h3>1003</h3></div>
                        <div class="w3-clear"></div>
                        <h4>Billing Requests</h4>
                    </div>
                </div>
                <div class="w3-quarter">
                    <div class="w3-container w3-purple w3-text-white w3-padding-16">
                        <div class="w3-left"><i class="fa fa-id-card-o w3-xxxlarge"></i></div>
                        <div class="w3-right"><h3>200</h3></div>
                        <div class="w3-clear"></div>
                        <h4>Priority/Manager Request</h4>
                    </div>
                </div>
            </div> <!-- End row2  of dashboard cards -->
            <br>

            <!-- Graphs with agent call monitoring KPIs using static data -->
            <div id="callGraphs" class="w3-row-padding w3-flat-colors">
                <h2>Call Monitoring</h2>
                <table style="overflow-x:auto; border: 2px solid flat-pumpkin; width:100%">
                    <tr>
                        <td>
                                <div class="control-section">
                                    <ejs-circulargauge :title='title' style='display:block; width: 470px; height: 350px; border: 3px  solid navy;' align='center' id='gauge'>
                                    <e-axes>
                                    <e-axis :radius='gaugeRadius' :startAngle='startAngle' :endAngle='endAngle' :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks' :labelStyle='labelStyle'>
                                    <e-pointers>
                                    <e-pointer :value='value' :radius='pointerRadius'  :pointerWidth='pointerWidth' :cap='cap' :needleTail='needleTail'></e-pointer>
                                    </e-pointers>
                                    </e-axis>
                                    </e-axes>
                                    </ejs-circulargauge>
                                </div>
                        </td>
                        <td>
                                <div id="avgCallTime" style="width: 470px; height: 350px; border: 3px  solid navy;"><pie-chart :donut="true"  title="Incomplete Calls" :data="[['System Disconnect', 44], ['Caller Terminated', 183], ['Transfer Drop', 208], ['Long Wait', 209], ['2+ Transfers', 328]]"></pie-chart>
                                </div>
                        </td>
                        <td> 
                                <div id="chart" style="width: 490px;"><bubble-chart style="height: 350px; border: 3px solid navy"></bubble-chart>
                                </div>
                        </td>
                    </tr>
                </table>
            </div> <!-- End table of graphs -->
             <br><br><br>

             <!-- Regional stats and more  with w3-panel to format  graph next to related details-->
            <h2><br>North American Contact Center Health Stats </h2>
            <div class="w3-panel">
                <div class="w3-row-padding" style="margin:0 -16px">
                    <div class="w3-third">
                        <h4>North America Contact Density </h4>
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=north%20america&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                </iframe>
                                <a href="https://www.embedgooglemap.org">google. maps directions</a>
                            </div>
                        </div>
                    </div>

                    <div class="w3-twothird" style="margin-left: 50px; width: 900px; border-color: grey; overflow-x:auto;">
                        <h4> North American Call Volumes</h4>
                        <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-flat-pumpkin ">
                            <tr>
                                <td>New York City</td>
                                <td>35%</td>
                            </tr>
                            <tr>
                                <td>Denver</td>
                                <td>25.7%</td>
                            </tr>
                            <tr>
                                <td>Vancouver</td>
                                <td>15.7%</td>
                            </tr>
                            <tr>
                                <td>Montreal</td>
                                <td>14.6%</td>
                            </tr>
                            <tr>
                                <td>Boston</td>
                                <td>12.1%</td>
                            </tr>
                            <tr>
                                <td>New Orleans</td>
                                <td>9.9%</td>
                            </tr>
                            <tr>
                                <td>Dallas</td>
                                <td>7.5%</td>
                            </tr>
                            <tr>
                                <td>Phoenix</td>
                                <td>7.9%</td>
                            </tr>
                            <tr>
                                <td>Albuquerque</td>
                                <td>2.5%</td>
                            </tr>
                        </table><br>
                        <button class="w3-button w3-dark-grey" @click='update()'>More Locations &nbsp;<i class="fa fa-arrow-right"></i></button>
                         <br>
                    </div>
                </div>  <!-- End row of regional and system stats -->
            </div> <!-- End w3-panel outer div -->
            <hr>

            <h2><br>Employee & Shift Details</h2>
            <div class="w3-panel">
                <div class="w3-row-padding" style="margin:0 -16px">
                    <div class="w3-third">
                        <div class="addEmp">
                            <input type="text" placeholder="Id is auto-generated" v-model="empInfo.id"><br>
                            <input type="text" placeholder="Full Name" v-model="empInfo.name"><br>
                            <input type="text" placeholder="Title" v-model="empInfo.title"><br>
                            <input type="text" placeholder="Work Shift" v-model="empInfo.shift"><br>
                            <input type="text" placeholder="Work Hours" v-model="empInfo.hours"><br>
                            <input type="text" placeholder="Supervisor" v-model="empInfo.supervisor"><br>
                            <button class="subEmp" type="submit" @click="addEmp()">Add Employee to Shift</button>
                        </div>
                        <transition name='fade'>
                            <div class='alert' v-if='added'> Employee has been added...</div>
                        </transition>
                    </div>
                        
                    <div class="w3-twothird">
                        <!-- Call the employees API using Axio and format the shifts .  -->
                        <div id="shifts" v-if='employees'>
                            <table style="overflow-x:auto;">
                                <tr>
                                    <th>Employee Name</th>
                                    <th>Shift</th>
                                    <th>Hours</th>
                                    <th>Supervisor</th>
                                    <th>Employee ID</th>
                                </tr>
                                <tr v-for="(e, index)  in empInfo" v-bind:key='e.id'>
                                    <td> {{  e.name }}</td>
                                    <td>{{ e.shift }}</td>
                                    <td> {{ e.hours }}</td>
                                    <td> {{  e.supervisor }}</td>
                                    <td> {{  index  }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div> <!-- End shift panel block -->

             <!-- Stats for sales, satisfaction and other KPIs with static data -->
            <div class="w3-container">
                <h2>Contact, Customer & Connective KPIs</h2><br>
                <p>First Time Contact</p>
                <div class="w3-grey">
                    <div class="w3-container w3-center w3-padding w3-green" style="width:25%">+25%</div>
                </div><br>
                <p>Percent Satisfied</p>
                <div class="w3-grey">
                    <div class="w3-container w3-center w3-padding w3-blue" style="width:50%">50%</div>
                </div><br>
                <p>Network Drop Rate Rate</p>
                <div class="w3-grey">
                    <div class="w3-container w3-center w3-padding w3-red" style="width:2%">2%</div>
                </div><br>
                <p>Total Orders Via Agents</p>
                <div class="w3-grey">
                    <div class="w3-container w3-center w3-padding w3-cyan" style="width:75%">$3500.00</div>
                </div><br>
                <p>Agent Assisted Product, Billing & Profile Requests</p>
                <div class="w3-grey">
                    <div class="w3-container w3-center w3-padding w3-purple" style="width:75%">75%</div>
                </div><br>
        </div> <br>
        <hr>


        </div> 
         <!-- End main section -->

        <footer class="container-fluid text-center">
            <span class="footer">Manager/Agent Interaction:  &nbsp;&nbsp;
                <a href="#" class="fa fa-headphones" title="Listen In" >  &nbsp;&nbsp;&nbsp;</a>
                <a href="#" class="fa fa-microphone-slash" title="Speak with Agent">  &nbsp;&nbsp;&nbsp;</a>
                <a href="#" class="fa fa-dot-circle-o" title="Record Live Agent" >  &nbsp;&nbsp;&nbsp;</a>
                <a href="#" class="fa fa-comments-o" title="Chat with Agent">  &nbsp;&nbsp;&nbsp;</a>
                <a href="#" class="fa fa-phone-square" title="Priority Transfer">  &nbsp;&nbsp;&nbsp;</a>
            </span>
        </footer>

    </div>              <!-- template div end -->
</template>

<script>
    // Import setions 
    //Chart imports 
    import Vue from 'vue'
    import BubbleChart from '@/components/BubbleChart'
    import Chartkick from 'vue-chartkick'
    import Chart from 'chart.js'
    Vue.use(Chartkick.use(Chart));
    import { CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";
    Vue.use(CircularGaugePlugin);

    //Backend Data Processing
    import * as app from '@/common/app.js';
   
    export default {
         data:function(){
            return{  
                // Chart  series data start 
                title: "% Calls Completed",
                titleStyle: {size: '16px', color: '#4B0082'},
                gaugeRadius: '80%',
                startAngle: 230,
                endAngle: 130,
                majorTicks: {width: 1},
                lineStyle: { width: 12 },
                minorTicks: { width: 0},
                labelStyle: {
                font: {fontFamily: 'Roboto', size: '12px', fontWeight: 'Regular', color: 'navy'},
                    offset: -5
                },
                value: 70,
                pointerRadius: '70%',
                pointerWidth: 7,
                cap: {radius: 8, border: { width: 0 }},
                needleTail: {length: '25%'} , 
                // Chart Description End

                //Employee shift updates
                added: false,
                employees: [],
                empInfo: []

            }           // End 'return'  delimeter
         },           // End data delimeter

        components: {
            'bubble-chart': BubbleChart,
        },

         // Employee shift processing
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

            addEmp: function(){
                //Add Employee
                app.api.add('employee', this.empInfo).then(id => {
                    console.log('Employee added was   ' + id);
                    this.added = true;

                    setTimeout(() => (this.added = false), 2000)
                    this.employees =  []
                })

                //Reload table
                app.api.all('employee')
                .then(response => {
                    this.empInfo= response;
                    console.log(this.empInfo);
                });
            }
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
        background-color: oldlace;
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
  /* Maps and  w3-panel grid  styling */
  .grid-container {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 5px;
        font-weight: bold;
        padding: 10px;
        border: 4px solid white;
  }
  .grid-container div {
        background-color: white;
        text-align: center;
        padding: 20px 0;
        font-size: 18px;
        color: teal;
  }
  .mapouter {
        position:relative;
        text-align:right;
        height:500px;
        width:500px;
    }
  .gmap_canvas  {
        overflow:hidden;
        background:none!important;
        height:500px;
        width:500px;
    }
  /* employee shift and monitoring styling  */
    #shifts table{
        border-collapse: collapse;
        width: 90%;
        margin-left: 5%;
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
    input[type=text], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        background-color:  peachpuff;
        border: 3px inset darkorange;
        border-radius: 4px;
        box-sizing: border-box;
    }
    input[type=number], select {
        width: 35%;
        height: 35px;
        padding: 12px 20px;
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

    .fade {
        color: goldenrod;
        font-weight: bold;
        font-size: 24px;
        background-color: green;
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
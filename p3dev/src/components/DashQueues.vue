<template>
    <div>
        <!-- Dashboard cards start using static data -->
        <div id="row1" class="w3-row-padding w3-margin-bottom mod ">
            <div class="w3-quarter">
                <div class="w3-container w3-green w3-padding-16 ">
                     <div class="w3-left"><i class="fa fa-comment w3-xxxlarge"></i></div>
                    <div class="w3-right"><h3>{{ chatCount }}</h3></div>
                    <div class="w3-clear"></div>
                    <h4>Live Chat & Chatbot</h4>
                </div>
            </div>
            
            <div class="w3-quarter">
                <div class="w3-container w3-pink w3-padding-16 style='border: 3px solid white;'">
                    <div class="w3-left"><i class="fa fa-phone w3-xxxlarge"></i></div>
                    <div class="w3-right"><h3>{{ randomNum   * 2  +  8 }}</h3> </div>
                    <div class="w3-clear"></div>
                    <h4>Automated Calls</h4>
                </div>
            </div>
                
            <div class="w3-quarter">
                <div class="w3-container w3-teal w3-padding-16">
                     <div class="w3-left"><i class="fa fa-headphones w3-xxxlarge"></i></div>
                    <div class="w3-right"><h3>{{ randomNum   * 18}}</h3></div>
                     <div class="w3-clear"></div>
                    <h4>Agent Calls</h4>
                </div>
            </div>
            <div class="w3-quarter">
                 <div class="w3-container w3-orange w3-text-white w3-padding-16">
                    <div class="w3-left"><i class="fa fa-user-md w3-xxxlarge"></i></div>
                    <div class="w3-right"><h3>{{ tferCount }}</h3></div>
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
                    <div class="w3-right"><h3>{{ twitterCount }}</h3></div>
                    <div class="w3-clear"></div>
                    <h4>Twitter Contacts</h4>
                </div>
            </div>
            
            <div class="w3-quarter">
                <div class="w3-container w3-cyan w3-padding-16">
                     <div class="w3-left"><i class="fa fa-barcode w3-xxxlarge"></i></div>
                    <div class="w3-right"><h3>{{  prodReqCount }}</h3></div>
                    <div class="w3-clear"></div>
                    <h4>Product Requests</h4>
                </div>
            </div>
            
            <div class="w3-quarter">
                <div class="w3-container w3-red w3-padding-16">
                    <div class="w3-left"><i class="fa fa-shopping-cart w3-xxxlarge"></i></div>
                    <div class="w3-right"><h3>{{ randomNum   * 5}}</h3></div>
                    <div class="w3-clear"></div>
                    <h4>Billing Requests</h4>
                </div>
            </div>

            <div class="w3-quarter">
                 <div class="w3-container w3-purple w3-text-white w3-padding-16">
                    <div class="w3-left"><i class="fa fa-id-card-o w3-xxxlarge"></i></div>
                    <div class="w3-right"><h3>{{ randomNum  * 3}}</h3></div>
                    <div class="w3-clear"></div>
                    <h4>Priority/Manager Request</h4>
                 </div>
             </div>
        </div> <!-- End row2  of dashboard cards -->
        <br>

    </div>
</template>
<script>
    //import * as app from  '@/common/app.js';

    export default {
        data:function(){
            return{  
            // Card Dashboard data values:
                twitterCount: null,
                prodReqCount: null,
                randomNum: Math.floor(Math.random() * 100) + 15,
            }
        },
        mounted: function() {
            // Setting count and storing in local storage 
            localStorage.setItem('twitterQ', this.randomNum);
            this.twitterCount = localStorage.getItem('twitterQ');
            console.log(localStorage.getItem('twitterQ'));

            localStorage.setItem('prodReqQ', this.randomNum - 6 + 8);
            this.prodReqCount =  localStorage.getItem('prodReqQ');
            console.log(localStorage.getItem('prodReqQ'));

            //Using Vuex
           // this.billReqCount = new app.queues();
    },

        computed: {
                tferCount: function(){
                return Math.floor(Math.random() * 200) + 20;
                },
                chatCount: function(){
                    return Math.floor(Math.random() * 100) + 15;
                },
                
                billReqCount: function() {
                    return this.$store.state.billReqCount;
                }
            }       
    }
</script>
<style scoped>
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
</style>
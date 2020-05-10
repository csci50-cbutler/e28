<template>
    <div>
        <!-- Simulate updating records using this meta tag definition 
        <meta http-equiv="refresh" content="10" />-->

        <!-- Dashboard cards start using random generated data -->
        <div id="row1" class="w3-row-padding w3-margin-bottom mod ">
            <div class="w3-quarter">
                <div class="w3-container w3-green w3-padding-16 ">
                     <div class="w3-left"><i class="fa fa-comment w3-xxxlarge"></i></div>
                    <div class="w3-right"><h3>{{ chatReqCount }}</h3></div>
                    <div class="w3-clear"></div>
                    <h4>Live Chat & Chatbot</h4>
                </div>
            </div>
            
            <div class="w3-quarter">
                <div class="w3-container w3-pink w3-padding-16 style='border: 3px solid white;'">
                    <div class="w3-left"><i class="fa fa-phone w3-xxxlarge"></i></div>
                    <div class="w3-right"><h3>{{ automatedReqCount }}</h3> </div>
                    <div class="w3-clear"></div>
                    <h4>Automated Calls</h4>
                </div>
            </div>
                
            <div class="w3-quarter">
                <div class="w3-container w3-teal w3-padding-16">
                     <div class="w3-left"><i class="fa fa-headphones w3-xxxlarge"></i></div>
                    <div class="w3-right"><h3>{{ agentReqCount }}</h3></div>
                     <div class="w3-clear"></div>
                    <h4>Agent Calls</h4>
                </div>
            </div>
            <div class="w3-quarter">
                 <div class="w3-container w3-orange w3-text-white w3-padding-16">
                    <div class="w3-left"><i class="fa fa-user-md w3-xxxlarge"></i></div>
                    <div class="w3-right"><h3>{{ tferReqCount }}</h3></div>
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
                    <div class="w3-right"><h3>{{ twitterReqCount }}</h3></div>
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
                    <div class="w3-right"><h3>{{ billReqCount }}</h3></div>
                    <div class="w3-clear"></div>
                    <h4>Billing Requests</h4>
                </div>
            </div>

            <div class="w3-quarter">
                 <div class="w3-container w3-purple w3-text-white w3-padding-16">
                    <div class="w3-left"><i class="fa fa-id-card-o w3-xxxlarge"></i></div>
                    <div class="w3-right"><h3>{{ priorityReqCount }}</h3></div>
                    <div class="w3-clear"></div>
                    <h4>Priority/Manager Request</h4>
                 </div>
             </div>
        </div> 
        <br>

    </div>
</template>
<script>
    export default {
        data:function(){
            return{  
            //Dashboard cards base random number
                randomNum: Math.floor(Math.random() * 100) + 15,
            }
        },
        mounted: function() {
             // Setting count and storing in local storage             
            localStorage.setItem('prodReqQ', this.randomNum - 6 * 3);
            this.prodCount =  localStorage.getItem('prodReqQ');
            console.log("Dash cards prod count: ", localStorage.getItem('prodReqQ'));
            
            localStorage.setItem('priorityReqQ', this.randomNum + 23);
            this.priorityCount =  localStorage.getItem('priorityReqQ');
            
            localStorage.setItem('tferReqQ', this.randomNum * 50);
            this.tferCount =  localStorage.getItem('tferReqQ');

            //Using Vuex
            this.$store.commit('updateChatReqCount', this.randomNum);
            this.$store.commit('updateAutomatedReqCount', this.randomNum * 2 + 8);
            this.$store.commit('updateAgentReqCount', this.randomNum * 20);
            this.$store.commit('updateTferReqCount', this.tferCount);
            this.$store.commit('updateBillReqCount', this.randomNum * 9);
            this.$store.commit('updateTwitterReqCount', this.randomNum + 35);
            this.$store.commit('updateProdReqCount', this.prodCount);
            this.$store.commit('updatePriorityReqCount', this.priorityCount);
    }, 

        computed: {
            //Vuex state management initialize value on load from store state
            chatReqCount: function(){
                return this.$store.state.chatReqCount;
            },            
            automatedReqCount: function(){
                return this.$store.state.automatedReqCount;
            },
            agentReqCount: function(){
                return this.$store.state.agentReqCount;
            },
            tferReqCount: function(){
                return this.$store.state.tferReqCount;
            },
            twitterReqCount: function(){
                return this.$store.state.twitterReqCount;
            },
            billReqCount: function() {
                return this.$store.state.billReqCount;
            },
            prodReqCount: function() {
                return this.$store.state.prodReqCount;
            },
            priorityReqCount: function() {
                return this.$store.state.priorityReqCount;
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
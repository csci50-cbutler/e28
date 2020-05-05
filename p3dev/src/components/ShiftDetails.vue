<template>
    <div>
        <div class="w3-panel">
            <div class="w3-row-padding" style="margin:0 -16px">
                <div class="w3-third">
                    <div class="addEmp">
                        <label for="employeeID">Employee ID </label>
                        <input type="text" placeholder="Id is auto-generated" v-model="empInfo.id"><br><br>

                        <label for="fullname">Full Name </label>
                        <input type="text" placeholder="Full Name" v-model="empInfo.name"><br><br>

                        <label for="jobtitle">Job Title</label>
                        <input type="text" placeholder="Title" v-model="empInfo.title"><br><br>

                        <label for="shift">Shift</label>
                        <input type="text" placeholder="Work Shift" v-model="empInfo.shift"><br><br>

                        <label for="starttime"> Shift Start </label> &nbsp; &nbsp;
                        <input type="time" id="starttime" placeholder="Shift Start" v-model="empInfo.starttime">&nbsp; &nbsp; &nbsp; 
                        
                        <label for="endtime"> Shift End </label> &nbsp; &nbsp;
                        <input type="time" id="endtime" placeholder="Shift End" v-model="empInfo.endtime">
                        <br><br>

                        <label for="supervisor">Supervisor</label>
                        <input type="text" placeholder="Supervisor" v-model="empInfo.supervisor"><br><br>

                        <button class="subEmp" type="submit" @click="addEmp()">Add Employee to Shift</button>
                    </div>
                    
                    <transition name='fade'>
                        <div class='alert' v-if='added'> Employee has been added...</div>
                    </transition>
                </div>
                        
                <div class="w3-twothird"><br>
                    <!-- Call the employees API using Firebase and format the shifts .  -->
                    <div id="shifts" v-if='employees'>
                        <table style="overflow-x:auto;">
                            <tr>
                                <th>Employee Name</th>
                                <th>Title</th>
                                 <th>Shift</th>
                                <th>Shift Start</th>
                                <th>Shift End</th>
                                <th>Supervisor</th>
                                <th>Employee ID</th>
                            </tr>
                            
                            <tr v-for="(e, index)  in empInfo" v-bind:key='e.id'>
                                <td> {{  e.name }}</td>
                                <td> {{  e.title }}</td>
                                <td> {{ e.shift }}</td>
                                 <td> {{ e.starttime }}</td>
                                <td> {{ e.endtime}}</td>
                                <td> {{  e.supervisor }}</td>
                                <td> {{  index  }}</td>
                            </tr>
                        </table><br>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
    //import Vue from 'vue';
    //import Vuelidate from 'vuelidate';
    //Vue.use(Vuelidate);

    import * as app from '@/common/app.js';
    //import { required, minLength } from "vuelidate/lib/validators";
    
    export default {
      /*   validations: {
            employee: {
                name: {
                    required,
                    minLength: minLength(4)
                }
            }
        }, */
        data:function(){
            return{ 
                //Employee shift updates
                added: false,
                employees: [],
                empInfo: [],
                //starttime: document.getElementById("starttime").value,
                //endtime: document.getElementById("endtime").value
            }           // End 'return'  delimeter
        },  
        computed: {
            // Employee shift processing
            starttime: function() {
                return  document.getElementById("starttime").value;
            }
        },
        methods: {
            addEmp: function(){
                //Add Employee
                app.api.add('employee', this.empInfo).then(id => {
                    console.log('Employee added was   ' + id);
                    this.added = true;
                    setTimeout(() => (this.added = false), 2000)
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
    }
</script>
<style scoped>
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
</style>
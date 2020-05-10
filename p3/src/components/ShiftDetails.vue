<template>
    <div>
        <div class="w3-panel">
            <div class="w3-row-padding" style="margin:0 -16px">
                <div class="w3-third">
                    <div class="addEmp">
                        <label for="employeeID" id="empID">Employee ID </label>
                        <input type="text" placeholder="Id is auto-generated" v-model="empInfo.id"/><br><br>

                        <label for="fullname">Full Name </label>
                        <input type="text" placeholder="Full Name" v-model="$v.empInfo.name.$model" :class='{"nameErr":  $v.empInfo.name.$error}'/> 
                       
                       <div v-if="$v.empInfo.name.$error">
                            <div class="nameErr" v-if="!$v.empInfo.name.required">Your full name is required and must be at least 4 characters.</div>
                        </div>

                        <br><br>
                        <label for="jobtitle">Job Title</label>
                        <input type="text" placeholder="Title" v-model="empInfo.title"/><br><br>

                        <label  for="workshift">Work Shift</label>&nbsp;
                        <input list="shifts" name="workshift" placeholder="Work Shift"  v-model="$v.empInfo.shift.$model"/>
                        <datalist id="shifts">
                            <option value="Early"/>
                            <option value="Day"/>
                            <option value="Midday"/>
                        </datalist>
                        <div v-if="$v.empInfo.shift.$error">
                            <div class="formErr" v-if="!$v.empInfo.shift.required">Select original shift</div>
                        </div>

                        <br>
                        <label for="starttime"> Shift Start </label> &nbsp; &nbsp;
                        <input type="time" id="starttime" placeholder="Shift Start" v-model="empInfo.starttime"/>&nbsp; &nbsp; &nbsp; 
                        
                        <label for="endtime"> Shift End </label> &nbsp; &nbsp;
                        <input type="time" id="endtime" placeholder="Shift End" v-model="empInfo.endtime"/>
                        <br><br>

                        <label for="supervisor">Supervisor</label>&nbsp;
                        <input list="supervisor" name="supervisor" placeholder="Select your supervisor from list below" v-model="$v.empInfo.supervisor.$model" :class='{"nameErr":  $v.empInfo.supervisor.$error}'> 
                        <datalist id="supervisor">
                            <option value="Eileen Beedle"/>
                            <option value="Markus Jackson"/>
                            <option value="Karen Johnson"/>
                            <option value="Stephanie Cho"/>
                            <option value="Guillermo Aquino"/>
                        </datalist>
                        
                        <div v-if="$v.empInfo.supervisor.$error">
                            <div class="nameErr" v-if="!$v.empInfo.supervisor.required">Please provide your supervisor.</div>
                        </div>
                    </div>
                    

                    <br><br><button class="subEmp" type="submit" @click="addEmp()">Add Employee to Shift</button>
                    <div v-if="$v.$anyError">
                        <div class="formErr">Please fix errors before submitting form.</div>
                    </div>
                    
                    <transition name='fade'>
                        <div class='alert' v-if='added'> Employee has been added...</div>
                    </transition>
                </div>
                        
                <div class="w3-twothird"><br>
                    <!-- Call the employees API using Firebase and format the shifts .  -->
                    <div id="shifts" v-if="('employees' || 'added')">
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
                            
                            <tr v-for="(e, index)  in employees" v-bind:key='e.id'>
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
    import * as app from '@/common/app.js';
    import { required, minLength} from "vuelidate/lib/validators";
    
    export default {
        validations: {
            empInfo: {
                name: {
                    required,
                    minLength: minLength(4)
                },
                shift: {
                    required
                },
                supervisor: {
                    required
                }
            }
        }, 
        data:function(){
            return{ 
                //Employee shift updates
                added: false,
                employees: [],
                empInfo: {
                    name: "",
                    shift: "",
                    supervisor: "",
                },
            }           
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
                this.$v.$touch();

                if (this.$v.$anyError == false) {

                    app.api.add('employee', this.empInfo).then(id => {
                        this.$v.$reset();
                        console.log('Employee added was   ' + id);
                        this.added = true;
                        setTimeout(() => (this.added = false), 2000);
                        /* this.empInfo = {
                            name : "",
                            supervisor: ""
                        }; */
                    })
                    
                    // Show Added employee 
                    app.api.all('employee')
                        .then(response => {
                            this.employees= response;
                            console.log(this.employees);
                    });
                }
            }
        },           
    
        // Loads shift data when page  is accessed
        mounted: function() {
            app.api.all('employee')
                .then(response => {
                    this.employees= response;
                    console.log(this.employees);
            });
        }
    }
</script>
<style scoped>
    #shifts table{
        border-collapse: collapse;
        width: 95%;
        margin-left: 3%;
    }
    #shifts td, #shifts th {
        border: 2px solid darkolivegreen;
        padding: 8px;
    }
    #shifts tr:nth-child(even){
        background-color: rgb(187, 196, 172);
        color: oldlace
        }
    #shifts tr:hover {
        background-color: lightgray;
        }
    #shifts th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: oldlace;
        color: darkslategrey;
    }
    input[type=text],  select{
        width: 99%;
        padding: 12px 20px;
        margin: 8px 0 0 0;
        display: inline-block;
        background-color:  oldlace;
        border: 3px inset darkolivegreen;
        border-radius: 4px;
        box-sizing: border-box;
        color: darkslategray;
        height: 35px;
    }
    input[list] {
        width: 79%;
        padding: 12px 20px;
        margin: 8px 0 0 0;
        display: inline-block;
        background-color:  oldlace;
        border: 3px inset darkolivegreen;
        border-radius: 4px;
        box-sizing: border-box;
        color: darkslategrey;
        height: 35px;
    }

    input[type=time]{
        width: 30.5%;
        height: 35px;
        padding: 12px 12px;
        margin: 8px 0;
        display: inline-block;
        background-color:  oldlace;
        border: 3px inset darkolivegreen;
        border-radius: 4px;
        box-sizing: border-box;
        color: darkslategrey;
    }
    input[type=submit] {
        width: 99%;
        background-color: oldlace;
        color: darkslategray;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    input[type=submit]:hover {
        background-color: indianred;
    }
    button{
        border: 5px inset  darkolivegreen;
        background-color:  oldlace;
        color:  goldenrod;
        font-weight: bold;
        height: 40px;
        width:  100%;
    }
    button:hover{
        border: 5px inset darkorange;
        background-color: navy;
        color: oldlace;
        font-weight: bold;
        height: 40px;
        width:  100%;
    }
    /* Error styling */
    .nameErr, .formErr {
        color: maroon;
        font-weight: bold;
    }
    
</style>
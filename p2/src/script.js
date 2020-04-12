// C. Butler:  Project 2, main script file called from index.html to create project 2 landing page.

import Vue from 'vue';
import WebnavDesign from "./components/WebnavDesign.vue";

let app = new Vue({
    // Options
    el: '#app',
    data: {},

    components: {
        "webnav-design": WebnavDesign,
    },

    methods: {}, //Methods section delimiter

});
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomePage from './components/HomePage.vue';
import ManagerHub from './components/MgrHub.vue';
import PersonalizePage from './components/PersonalizePage.vue';

Vue.use[VueRouter];
Vue.config.productionTip = false;

const routes = [
    { path: "/HomePage", component: HomePage },
    { path: "/ManagerHub", component: ManagerHub },
    { path: "/PersonalizePage", component: PersonalizePage },
];

const router = new VueRouter({
    routes: routes
})

new Vue({
    router: router,
    render: h => h(App)
}).$mount("#app");
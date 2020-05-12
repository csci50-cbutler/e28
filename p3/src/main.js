import Vue from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";
import HomePage from '@/components/pages/HomePage.vue';
import ManagerHub from '@/components/pages/MgrhubPage.vue';
import DashboardPage from '@/components/pages/DashboardPage.vue';
import AdminPage from '@/components/pages/AdminPage.vue';

//State management
import store from '@/common/store.js'

Vue.use(VueRouter);
Vue.config.productionTip = false;

//Navigation Menu on all pages
const routes = [
    { path: "/", component: HomePage, name: "Home" },
    { path: "/mgrhub", component: ManagerHub, name: "Manager Hub" },
    { path: "/dashboard", component: DashboardPage, name: "Dashboard" },
    { path: "/admin", component: AdminPage, name: "Administration" },
];

const router = new VueRouter({
    routes: routes,
    mode: "history",
})

new Vue({
    store: store,
    router: router,
    render: h => h(App)
}).$mount("#app");
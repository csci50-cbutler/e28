import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'
import App from '@/App.vue'
import store from '@/common/store';
import AdminPage from '@/components/pages/AdminPage.vue';
import ProductsPage from '@/components/pages/ProductsPage.vue';
import CategoriesPage from '@/components/pages/CategoriesPage.vue';
import HomePage from '@/components/pages/HomePage.vue';
import ProductPage from '@/components/pages/ProductPage.vue';
import ProductCreatePage from '@/components/pages/ProductCreatePage.vue';
import CartPage from '@/components/pages/CartPage.vue';

Vue.use(Vuelidate)
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/admin', component: AdminPage, name: 'admin' },
    { path: '/products', component: ProductsPage, name: 'products' },
    { path: '/product/:slug', component: ProductPage, name: 'product', props: true },
    { path: '/categories', component: CategoriesPage, name: 'categories' },
    { path: '/products/create', component: ProductCreatePage, name: 'add a product' },
    { path: '/cart', component: CartPage, name: 'cart' },
];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

new Vue({
    store: store,
    router: router,
    render: h => h(App),
}).$mount('#app')
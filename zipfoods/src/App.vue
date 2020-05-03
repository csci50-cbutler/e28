<template>
    <div id='app'>
        <img alt='ZipFoods logo' id='logo' src='@/assets/images/zipfoods-logo.png' />

        <nav>
            <ul>
                <li v-for='link in links' :key='link'>
                    <router-link :to='{ name: link }' exact>
                        {{ link }}
                        <span
                            data-test='cart-count'
                            v-if='link == "cart"'
                        >({{ cartCount }})</span>
                    </router-link>
                </li>
            </ul>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
export default {
    name: 'App',
    components: {},
    data: function() {
        return {
            links: ['home', 'products', 'categories', 'add a product', 'cart']
        };
    },
    mounted: function() {
        let cart = new app.Cart();
        this.$store.commit('setCartCount', cart.count());
        this.$store.dispatch('setProducts');
    },
    computed: {
        cartCount: function() {
            return this.$store.state.cartCount;
        }
    }
};
</script>

<style lang='scss'>
@import '@/assets/scss/zipfoods.scss';
</style>
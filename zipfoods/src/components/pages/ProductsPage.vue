<template>
    <div id='products'>
        <h2>Products</h2>
        <show-product v-for='product in products' :key='product.id' :product='product'></show-product>
    </div>
</template>

<script>
import ShowProduct from '@/components/ShowProduct.vue';
//import * as app from '@/common/app.js';
export default {
    components: {
        'show-product': ShowProduct
    },
    data: function() {
        return {};
    },
    computed: {
        products: function() {
            return this.$store.state.products;
        }
    }
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/variables.scss';
</style>
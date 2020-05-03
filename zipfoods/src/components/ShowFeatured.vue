<template>
    <div id='featured'>
        <h2>Featured Products</h2>
        <ul class='cleanList'>
            <li
                data-test='featured-product'
                v-for='product in featuredProducts'
                :key='product.id'
            >{{ product.name }}</li>
        </ul>
    </div>
</template>
<script>
//import * as app from '@/common/app.js';
export default {
    props: ['category'],
    data: function() {
        return {};
    },
    computed: {
        featuredProducts: function() {
            let featuredProducts = [];
            // Iterate through all our products
            Object.keys(this.products).map(key => {
                // If this product includes the category we're filtering for...
                if (
                    this.products[key].categories &&
                    this.products[key].categories.includes(this.category)
                ) {
                    // Add it to our featuredProducts array
                    featuredProducts.push(this.products[key]);
                }
            });
            return featuredProducts;
        },
        products: function() {
            return this.$store.state.products;
        }
    }
};
</script>

<style scoped>
</style>
<template>
    <div id='products'>
        <h2>Products</h2>
        <show-product
            v-for='product in products'
            :key='product.id'
            :product='product'
        ></show-product>
    </div>
</template>

<script>
import ShowProduct from "./ShowProduct.vue";
export default {
    name: "",
    props: ['products'],
    components: {
        "show-product": ShowProduct,
    },
    data: function() {
        return {}
    },
}
</script>

<style scoped>

</style>
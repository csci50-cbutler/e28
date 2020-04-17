<template>
    <router-link :to="{name: 'product', params: {id: product.id}}">
    <div class='product'>
        <div class='product-name'>{{ product.name }}</div>
        <img class='product-thumb' :src='"@/assets/images/products/" + product.id + ".jpg"' />
        <div class='product-price'>${{ product.price }}</div><br>
    </div>
    </router-link>
</template>

<script>
    export default {
        name: "",
        props: ['product'],
        data: function() {
            return {}
        }
    }
</script>

<style scoped>
</style>
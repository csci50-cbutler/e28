<template>
    <router-link :to="{name: 'product', params: {id: product.id}}">
    <div class='product'>
        <div class='product-name'>{{ product.name }}</div>
        <img class='product-thumb' :src='imageSrc' />
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
        },
        computed: {
            imageSrc: function() {
                try {
                    return require('@/assets/images/products/' + this.product.slug + '.jpg')
                }
                catch (e) {
                    return require('@/assets/images/products/zipfoods-logo.png')
                }
            }
        }
    }
</script>

<style scoped>
</style>
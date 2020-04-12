<template>
    <div>
        <div id='product-page'>
            <h1>Product {{ id }}</h1>
        </div>
    </div>
</template>

<script>

export default {
    name: '',
    props: ['id'],
    data: function() {
        return {
           // id: this.$route.params.id
        };
    }
};
</script>

<style scope>
</style>
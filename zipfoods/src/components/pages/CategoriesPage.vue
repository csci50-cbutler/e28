<template>
    <div>
        <h2>Categories</h2>
        <ul class='cleanList'>
            <li v-for='(category, id) in categories' :key='id'>{{ category }}</li>
        </ul>
    </div>
</template>

<script>
const axios = require('axios');

export default {
    name: "",
    data: function(){
        return{
            products: []
        };
    },
    computed: {
        categories: function() {
            let categories = this.products.map(product => product.categories);
            let mergedCategories = [].concat.apply([], categories);

            // Return unique, sorted categories
            return [...new Set(mergedCategories)].sort();
        }
    },
    mounted: function() {
         axios
          .get(
              'https://my-json-server.typicode.com/susanBuck/e28-zipfoods-api/products'
          )
          .then(response => {
              this.products = response.data;
          });
    }
};
</script>
<style scoped>
</style>
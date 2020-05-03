<template>
    <div>
        <h2>Categories</h2>
        <ul class='cleanList'>
            <li
                data-test='category-name'
                v-for='(category, id) in categories'
                :key='id'
            >{{ category }}</li>
        </ul>
    </div>
</template>
     
<script>
//import * as app from '@/common/app.js';
export default {
    data: function() {
        return {};
    },
    computed: {
        categories: function() {
            let allCategories = [];
            // Iterate through all our products
            Object.keys(this.products).map(key => {
                // Build array of categories
                allCategories.push(this.products[key].categories);
            });
            // Merge together the array of categories
            let mergedCategories = [].concat.apply([], allCategories);
            // Get just the unique categories, sorted
            return [...new Set(mergedCategories)].sort();
        },
        products: function() {
            return this.$store.state.products;
        }
    }
};
</script>

<style scoped>
</style>

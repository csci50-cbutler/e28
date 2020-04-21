<template>
    <div>
        <div id='product-page' v-if='product'>
            <h1>{{  product.name }}</h1>
            <!-- <img class='product-thumb' :alt='"Product image of " + product.name'
                :src='require("@/assets/imaes/products/" + product.id + ".jpg")'/> -->
            <p> {{product.description}} </p>
        </div>
    </div>
</template>

<script>

export default {
    name: ' ',
    props: ['slug'],
    data: function() {
        return {
           // id: this.$route.params.id
           product:  null
        };
    },
    mounted: function() {
         /* axios
          .get(
              'https://my-json-server.typicode.com/susanBuck/e28-zipfoods-api/products/' + this.id
          )
          .then(response => {
              this.product = response.data;
          }); */
    }
};
</script>

<style scope>
</style>
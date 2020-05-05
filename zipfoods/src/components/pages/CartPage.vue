<template>
  <div id="cart-page">
    <h1>Your Cart</h1>

    <div v-if="items.length == 0">No items</div>

    <ul
      class="cleanList"
      v-if="Object.keys(products).length > 0"
      data-test="cart-contents"
    >
      <li v-for="item in items" :key="item.slug">
        <button
          data-test="remove-from-cart-button"
          @click="removeFromCart(item.slug, item.quantity)"
        >
          Remove
        </button>
        {{ item.quantity }} x {{ getProductDetails(item.slug).name }}
      </li>
    </ul>
  </div>
</template>

<script>
import * as app from "@/common/app.js";
export default {
  data: function() {
    return {
      items: [],
      cart: null
    };
  },
  mounted() {
    // Making Cart instantce a data property so we can use it later in a removeFromCart method
    this.cart = new app.Cart();
    this.items = this.cart.getItems();
  },
  methods: {
    getProductDetails(slug) {
      for (let key of Object.keys(this.products)) {
        if (this.products[key].slug == slug) {
          return this.products[key];
        }
      }
    },
    removeFromCart(slug, quantity) {
      this.cart.remove(slug);
      //app.store.cartCount = this.cart.count();
      this.$store.commit("updateCartCount", -quantity);
    }
  },
  computed: {
    products: function() {
      return this.$store.state.products;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
button {
  background-color: $red;
  font-size: 10px;
  padding: 5px;
}
button:hover {
  background-color: darken($red, 10%);
}
</style>

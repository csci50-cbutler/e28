<template>
  <div id='app'>
    <img alt="ZipFoods" id="logo" src="./assets/images/zipfoods-logo.png" />

    <nav>
      <ul>
          <li>
              <a href='#' @click='page = "home"'>Home</a>
          </li>
          <li>
              <a href='#' @click='page = "products"'>Products</a>
          </li>
          <li>
              <a href='#' @click='page = "categories"'>Categories</a>
          </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { products } from "./products.js";

export default {
  name: "App",
  components: {},
  data: function(){
        return{
        products: products,
      }
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/zipfoods.scss";
</style>

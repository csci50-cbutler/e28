<template>
  <div>
    <h2>Add a Product</h2>

    <div id="inputs">
      <label for="name">Name</label>
      <input
        type="text"
        data-test="product-name-input"
        v-model="$v.product.name.$model"
        id="name"
        :class="{ 'form-input-error': $v.product.name.$error }"
      />
      <div v-if="$v.product.name.$error">
        <div class="form-feedback-error" v-if="!$v.product.name.required">
          Name is required.
        </div>
      </div>

      <label for="slug">URL Identifier:</label>
      <input
        type="text"
        data-test="product-slug-input"
        v-model="$v.product.slug.$model"
        id="slug"
        :class="{ 'form-input-error': $v.product.slug.$error }"
      />
      <small class="form-help">Min: 4</small>

      <div v-if="$v.product.slug.$error">
        <div class="form-feedback-error" v-if="!$v.product.slug.required">
          URL identifier is required.
        </div>

        <div class="form-feedback-error" v-if="!$v.product.slug.minLength">
          URL identifier must be at least 4 characters long.
        </div>

        <div
          class="form-feedback-error"
          v-else-if="!$v.product.slug.doesNotExist"
        >
          This URL identifier is not available.
        </div>
      </div>

      <label for="price">Price:</label>
      <input
        data-test="product-price-input"
        type="text"
        v-model="product.price"
        id="price"
      />

      <label for="available">Quantity available:</label>
      <input
        type="text"
        data-test="product-available-input"
        v-model="product.available"
        id="available"
      />

      <label for="weight">Weight (in lbs):</label>
      <input
        type="text"
        data-test="product-weight-input"
        v-model="product.weight"
        id="weight"
      />

      <label for="perishable" class="form-checkbox-label">
        <input
          type="checkbox"
          data-test="product-perishable-checkbox"
          product-name-input
          v-model="product.perishable"
          id="perishable"
        />
        Perishable?
      </label>

      <label for="description">Description</label>
      <textarea
        data-test="product-description-textarea"
        v-model="product.description"
        id="description"
      ></textarea>
    </div>

    <button @click="addProduct" data-test="add-product-button">
      Add Product
    </button>

    <div class="form-feedback-error" v-if="$v.$anyError">
      Please correct the above errors
    </div>

    <transition name="fade">
      <div data-test="product-added-confirmation" class="alert" v-if="added">
        Your product was added!
      </div>
    </transition>
  </div>
</template>

<script>
import * as app from "@/common/app.js";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  data: function() {
    return {
      added: false,
      product: {
        name: "",
        slug: "",
        price: "",
        available: "",
        weight: "",
        perishable: false,
        description: ""
      }
    };
  },
  validations: {
    product: {
      name: {
        required
      },
      slug: {
        required,
        minLength: minLength(4),
        doesNotExist(value) {
          return !this.$store.getters.getProductBySlug(value);
        }
      }
    }
  },
  methods: {
    addProduct: function() {
      // Invoke this touch method to force the validation system to register errors even if the user hasn't interacted with any of the fields yet.
      this.$v.$touch();
      // Only add the product if we don't have any errors
      if (this.$v.$anyError == false) {
        app.api.add("products", this.product).then(() => {
          // Because we're not redirecting the user after adding a product, we should reset the validation so they can add a new product
          this.$v.$reset();
          this.added = true;
          setTimeout(() => (this.added = false), 3000);
          this.product = {
            name: "",
            slug: "",
            price: "",
            available: "",
            weight: "",
            perishable: false,
            description: ""
          };
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#inputs {
  text-align: left;
}
</style>

<template>
  <div>
    <p>
      ZipFoods is your one-stop-shop for convenient online grocery shopping in
      the greater Boston area.
    </p>

    <show-featured :category="featuredCategory"></show-featured>
  </div>
</template>

<script>
import ShowFeatured from "@/components/ShowFeatured.vue";
export default {
  components: {
    "show-featured": ShowFeatured
  },
  data: function() {
    return {
      featuredCategory: "snacks"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
#featured {
  background-color: lighten($aqua, 10%);
  border-radius: $radius;
  padding: 10px;
}
</style>

<template>
  <div id="app">
    <webnav-design></webnav-design>
  </div>
</template>

<script>
import WebnavDesign from './components/WebnavDesign.vue';

export default {
  name: 'App',
  components: {
    "webnav-design": WebnavDesign
  },
  data: function (){
    return {}
  },
};
</script>

<style scoped>
</style>

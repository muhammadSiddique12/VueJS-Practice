<template>
  <div>
    <h1 v-bind:style="{ color: 'blue' }">Home components</h1>
    <User />
    <Product />
  </div>
</template>

<script>
import User from "./User.vue";

import Product from "./Product.vue";

export default {
  name: "HomePage",
  components: {
    User,
    Product,
  },
};
</script>
<style scoped>
div {
  background-color: bisque;
  height: 500px;
}
</style>

<template>
  <div class="home">
    <h1>Book shop</h1>
    <Products />
  </div>
</template>

<script>
import Products from "./Products.vue";
export default {
  name: "home",
  components: {
    Products
  }
};
</script>

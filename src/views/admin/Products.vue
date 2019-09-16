<template>
  <div class="product">
    <router-link to="/admin/ProductAdd">add new book</router-link>
    <ProductList />
  </div>
</template>

<script>
import ProductList from "@/components/admin/ProductList.vue";
export default {
  components: {
    ProductList
  }
};
</script>

<style lang="scss" scoped></style>

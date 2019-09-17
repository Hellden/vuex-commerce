<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Publisher</th>
          <th scope="col">Year</th>
          <th scope="col">Image</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.title }}</td>
          <td>{{ product.author.firstanme }} {{ product.author.lastName }}</td>
          <td>{{ product.publisher }}</td>
          <td>{{ product.year }}</td>
          <td>
            <img :src="product.image" alt="Image" />
          </td>
          <td>edit</td>
          <td>delete</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  created() {
    this.$store.dispatch("getProducts");
  }
};
</script>

<style lang="scss" scoped></style>

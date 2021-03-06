import axios from "axios";

let baseUrl = "http://localhost:3000";

export default {
  getProducts() {
    return axios.get(`${baseUrl}/products`);
  },
  createProduct(book) {
    return axios.post(`${baseUrl}/products`, book);
  },
  addToCart(product) {
    return new Promise(resolve => {
      let cartInLocalstorage = localStorage.getItem("vuex-commerce-cart");
      let cart = {};
      if (!cartInLocalstorage) {
        product.quantity = 1;
        cart = { products: [product] };
        localStorage.setItem("vuex-commerce-cart", JSON.stringify(cart));
        resolve(cart);
      } else {
        //JSON parse transform json string in object, option .products is using for specified parent noeud
        const products = JSON.parse(localStorage.getItem("vuex-commerce-cart"))
          .products;
        // is same product already in cart?

        const index = products.findIndex(p => p.id === product.id);
        if (index === -1) {
          product.quantity = 1;
          cart = { products: [...products, product] };
        } else {
          products[index].quantity += 1;
          cart = {
            products: [...products]
          };
        }
        localStorage.setItem("vuex-commerce-cart", JSON.stringify(cart));
        resolve(cart);
      }
    });
  }
};

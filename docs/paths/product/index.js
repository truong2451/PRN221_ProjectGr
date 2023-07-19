const searchProducts = require("./searchProducts");
const getProductById = require("./getProductById");
const allProducts = require("./allProduct");
const addProduct = require("./addProduct");
const updateProduct = require("./updateProduct");
const deleteProduct = require("./deleteProduct");

module.exports = {
  "/products": {
    ...allProducts,
  },
  "/product": {
    ...addProduct,
    ...searchProducts,
  },
  "/product/{productID}": {
    ...updateProduct,
    ...deleteProduct,
    ...getProductById
  },
};
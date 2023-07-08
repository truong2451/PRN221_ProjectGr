const getProductsByName = require("./getProductsByName");
const getProductById = require("./getProductById");
const allProducts = require("./allProduct");
const addProduct = require("./addProduct");
const updateProduct = require("./updateProduct");
const deleteProduct = require("./deleteProduct");

module.exports = {
  "/product": {
    ...allProducts,
    ...addProduct,
    // ...getProductsByName,
  },
  "/product/{productID}": {
    ...updateProduct,
    ...deleteProduct,
    ...getProductById
  },
};
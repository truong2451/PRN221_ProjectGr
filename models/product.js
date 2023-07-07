const mongoose = require("mongoose");
const { v1: uuidv1 } = require("uuid");
const { ObjectId } = mongoose.Schema;
const Post = require("./post");

const productSchema = new mongoose.Schema({
  productID: { type: String, required: true },
  AccountID: { type: String, ref: 'User', required: true },
  categoryID: { type: String, ref: 'Category', required: true },
  productDetailID: { type: String, ref: 'ProductDetail', required: true }
});

module.exports = mongoose.model('Product', productSchema);
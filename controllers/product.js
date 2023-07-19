const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const Category = require("../models/category");
const User = require("../models/user");
const mongoose = require("mongoose");

// Trả về sản phẩm dựa trên ID
exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.productID;
    console.log(productId);
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product", errorMessage: error.message });
  }
};

// trả về all product
exports.allProducts = async (req, res) => {
  try {
    const currentPage = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;
    let totalItems;

    const countDocuments = await Product.find().countDocuments();
    totalItems = countDocuments;

    const products = await Product.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage)
      .sort({ created: -1 });

    res.status(200).json({
      totalPage: Math.ceil(totalItems / perPage),
      totalItems,
      perPage,
      currentPage,
      list: products
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products', errorMessage: error.message });
  }
};

//search product theo tên
exports.searchProducts = async (req, res) => {
  try {
    const { keyword, page, perPage } = req.query;
    const currentPage = parseInt(page) || 1;
    const itemsPerPage = parseInt(perPage) || 10;
    let totalItems;

    const regex = new RegExp(keyword, 'i');

    const countDocuments = await Product.find({ productName: regex }).countDocuments();
    totalItems = countDocuments;

    const products = await Product.find({ productName: regex })
      .skip((currentPage - 1) * itemsPerPage)
      .limit(itemsPerPage)
      .sort({ created: -1 });

    res.status(200).json({
      totalPage: Math.ceil(totalItems / itemsPerPage),
      totalItems,
      perPage: itemsPerPage,
      currentPage,
      list: products
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to search products', errorMessage: error.message });
  }
};

//addProduct
exports.addProduct = async (req, res) => {
  try {
    const { product } = req.body;

    const existingCategory = await Category.findById(product.categoryID);
    if (!existingCategory) {
      return res.status(400).json({ error: "Invalid category ID" });
    }

    const newProduct = new Product({
      categoryID: existingCategory._id,
      productName: product.productName,
      image: product.image,
      quantity: product.quantity,
      description: product.description,
      price: product.price,
      weight: product.weight,
    });

    const savedProduct = await newProduct.save();

    res.status(200).json({ message: "Product added successfully", product: savedProduct });
  } catch (error) {
    res.status(500).json({ error: "Failed to add product", errorMessage: error.message });
  }
};


//sửa product
exports.updateProduct = async (req, res) => {
  try {
    const { product } = req.body;

    const existingProduct = await Product.findById(req.params.productID);
    if (!existingProduct) {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    const existingCategory = await Category.findById(product.categoryID);
    if (!existingCategory) {
      return res.status(400).json({ error: "Invalid category ID" });
    }

    existingProduct.categoryID = existingCategory._id;
    existingProduct.productName = product.productName;
    existingProduct.image = product.image;
    existingProduct.quantity = product.quantity;
    existingProduct.description = product.description;
    existingProduct.price = product.price;
    existingProduct.weight = product.weight;

    const updatedProduct = await existingProduct.save();

    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ error: "Failed to update product", errorMessage: error.message });
  }
};

//detele sp theo id
exports.deleteProduct = async (req, res) => {
  try {
    const { product } = req.body;
    const productID = req.params.productID;

    const existingProduct = await Product.findById(productID);
    if (!existingProduct) {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    await existingProduct.remove();

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product", errorMessage: error.message });
  }
};
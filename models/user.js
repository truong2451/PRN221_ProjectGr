
// const { v1: uuidv1 } = require("uuid");
// const crypto = require("crypto");
// const { ObjectId } = mongoose.Schema;
// const Post = require("./post");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
   type: String,
   trim: true,
   default:"user",
  },
  address: {
    type: String,
    trim: true,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  }
});

module.exports = mongoose.model("User", userSchema);
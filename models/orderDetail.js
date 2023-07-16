const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const orderDetailSchema = new mongoose.Schema({
  orderID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    trim: true,
    required: true,
  },
  status: {
    type: String,
    trim: true,
    required: true,
  },
  total: {
    type: Number,
    trim: true,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  paymentID: {
    type: String,
    ref: "Payment",
  },
});
module.exports = mongoose.model("OrderDetail", orderDetailSchema);

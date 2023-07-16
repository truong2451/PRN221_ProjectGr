const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const mongoose = require("mongoose");

//get all order
exports.allOrder = async (req, res) => {
    try {
        const currentPage = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;
        let totalItems;

        const countDocuments = await Order.find().countDocuments();
        totalItems = countDocuments;

        const orders = await Order.find()
            .skip((currentPage - 1) * perPage)
            .limit(perPage)
            .sort({ date: -1 });

        res.status(200).json({
            totalPage: Math.ceil(totalItems / perPage),
            totalItems,
            perPage,
            currentPage,
            list: orders
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders', errorMessage: error.message });
    }
};

//trả về order bằng search id
exports.getOrderById = async (req, res) => {
    try {
        const orderId = req.params.orderID;

        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }

        res.status(200).json({ order });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch order", errorMessage: error.message });
    }
};

//add order
exports.addOrder = async (req, res) => {
    try {
        const { order } = req.body;

        const newOrder = new Order({
            accountID: order.accountID,
            shippingAddress: order.shippingAddress,
            phone: order.phone,
            note: order.note,
        });

        const savedOrder = await newOrder.save();

        res.status(200).json({ message: "Order added successfully", order: savedOrder });
    } catch (error) {
        res.status(500).json({ error: "Failed to add order", errorMessage: error.message });
    }
};

//update order
exports.updateOrder = async (req, res) => {
    try {
        const { order } = req.body;
        const existingOrder = await Order.findById(req.params.orderID);
        if (!existingOrder) {
            return res.status(400).json({ error: "Invalid order ID" });
        }
        
        existingOrder.fullName = order.fullName;
        existingOrder.shippingAddress = order.shippingAddress;
        existingOrder.phone = order.phone;
        existingOrder.note = order.note;

        const updatedOrder = await existingOrder.save();

        res.status(200).json({ message: "Order updated successfully", order: updatedOrder });
    } catch (error) {
        res.status(500).json({ error: "Failed to update order", errorMessage: error.message });
    }
};

//delete order
exports.deleteOrder = async (req, res) => {
    try {

        const existingOrder = await Order.findById(req.params.orderID);
        if (!existingOrder) {
            return res.status(400).json({ error: "Invalid order ID" });
        }

        await existingOrder.remove();

        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete order", errorMessage: error.message });
    }
};  
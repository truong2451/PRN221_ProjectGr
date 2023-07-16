const express = require("express");
const controllersOrderDetail = require("../controllers/orderDetail");
const router = express.Router();

router.get('/orderDetail', controllersOrderDetail.allOrderDetail);
router.get('/orderDetail/:orderDetailID', controllersOrderDetail.getOrderDetailById);
router.post('/orderDetail', controllersOrderDetail.createOrderDetail);
router.put('/orderDetail/:orderDetailID', controllersOrderDetail.updateOrderDetail);
router.delete('/orderDetail/:orderDetailID', controllersOrderDetail.deleteOrderDetail);

module.exports = router;
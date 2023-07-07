const express = require("express");
const controllersProduct = require("../controllers/product");
const router = express.Router();

router.get('/product', controllersProduct.allProducts);
router.get('/product/:productName', controllersProduct.getProductsByName);
router.post('/product/:productId', controllersProduct.addProduct);
router.put('/product/:productId', controllersProduct.updateProduct);
router.delete('/product/:productId', controllersProduct.deleteProduct);

module.exports = router;
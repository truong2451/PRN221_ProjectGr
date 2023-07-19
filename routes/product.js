const express = require("express");
const controllersProduct = require("../controllers/product");
const {verifyAccessTokenCookie} = require("../controllers/token");
const { requireSignIn } = require("../controllers/auth");
const { checkRole } = require("../controllers/auth");
const router = express.Router();

router.get('/products', controllersProduct.allProducts);
router.get('/product', controllersProduct.searchProducts);
router.get('/product/:productID', controllersProduct.getProductById);
router.post('/product',verifyAccessTokenCookie, controllersProduct.addProduct);
router.put('/product/:productID',verifyAccessTokenCookie, controllersProduct.updateProduct);
router.delete('/product/:productID',verifyAccessTokenCookie, controllersProduct.deleteProduct);

module.exports = router;
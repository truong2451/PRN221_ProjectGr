const express = require("express");
const controllersOrder = require("../controllers/category");
const {verifyAccessTokenCookie} = require("../controllers/token");
const { requireSignIn } = require("../controllers/auth");
const { checkRole } = require("../controllers/auth");
const router = express.Router();

router.get('/category', controllersOrder.allCategory);
router.get('/category/:categoryID', controllersOrder.getCategoryById);
router.post('/category',verifyAccessTokenCookie, controllersOrder.addCategory);
router.put('/category/:categoryID',verifyAccessTokenCookie, controllersOrder.updateCategory);
router.delete('/category/:categoryID',verifyAccessTokenCookie, controllersOrder.deleteCategory);

module.exports = router;
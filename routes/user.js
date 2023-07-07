const express = require("express");
const {verifyAccessTokenCookie} = require("../controllers/token");
const controllersUser = require("../controllers/user");
const { requireSignIn } = require("../controllers/auth");
const { checkRole } = require("../controllers/auth");
const router = express.Router();

router.get("/user", verifyAccessTokenCookie, controllersUser.allUsers);
router.get("/user/:userID",controllersUser.getUserById);
router.post("/user",controllersUser.createUser);
router.put("/user/:userID", verifyAccessTokenCookie, controllersUser.updateUser);
router.delete("/user/:userID", verifyAccessTokenCookie, controllersUser.deleteUser);
router.param("userId",controllersUser.userByLogin);

module.exports = router;

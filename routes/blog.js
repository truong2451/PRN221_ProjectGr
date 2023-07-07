const express = require("express");
const {verifyAccessTokenCookie} = require("../controllers/token");
const controllersBlog = require("../controllers/blog");
const { requireSignIn } = require("../controllers/auth");
const { checkRole } = require("../controllers/auth");
const router = express.Router();

router.get("/blog", verifyAccessTokenCookie, controllersBlog.allBlogs);
router.get("/blog/:blogID", controllersBlog.getBlogById);
router.post("/blog", controllersBlog.createBlog);
router.put("/blog/:blogID", verifyAccessTokenCookie, controllersBlog.updateBlog);
router.delete("/blog/:blogID", verifyAccessTokenCookie, controllersBlog.deleteBlog);

module.exports = router;

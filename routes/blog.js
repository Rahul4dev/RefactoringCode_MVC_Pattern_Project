const express = require("express");

const blogControllers = require("../controllers/post-controller");
const protectRoutes = require("../custom-middleware/auth-protection-middleware");

const router = express.Router();

router.get("/", blogControllers.getHome);

router.use(protectRoutes);

// we can also use this middleware in specific routes functions like : router.get("/admin", protectRoutes,  blogControllers.getAdmin);
// since function executes from left tot right and top to bottom, the placement of middleware and routes are important.

router.get("/admin", blogControllers.getAdmin);

router.post("/posts", blogControllers.createPost);

router.get("/posts/:id/edit", blogControllers.getSinglePost);

router.post("/posts/:id/edit", blogControllers.updatePost);

router.post("/posts/:id/delete", blogControllers.deletePost);

module.exports = router;

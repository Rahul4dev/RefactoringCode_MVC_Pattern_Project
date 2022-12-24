const express = require("express");

const authControllers = require("../controllers/auth-controller");

const router = express.Router();

router.get("/signup", authControllers.getSignUp);

router.get("/login", authControllers.getLogin);

router.post("/signup", authControllers.createAccount);

router.post("/login", authControllers.authenticateUser);

router.post("/logout", authControllers.logout);

module.exports = router;

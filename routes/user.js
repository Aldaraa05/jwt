const express = require("express");
const model = require("mongoose");
const { Login, Users, signup } = require("../controller/login");
const { isVerified } = require("../middleware/jtw");

const router = express.Router();

router
  .post("/login", Login)
  .get("/", isVerified, Users)
  .post("/signup", signup);

exports.userRouter = router;

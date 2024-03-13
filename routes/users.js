var express = require("express");
var router = express.Router();

const userModel = require("../model/userModel");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const users = await userModel.find();

  res.render("user/index", { users });
});

module.exports = router;

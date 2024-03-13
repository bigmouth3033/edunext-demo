var express = require("express");
var router = express.Router();

const customerModel = require("../model/customerModel");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const customers = await customerModel.find();
  res.render("customer/index", { customers });
});

module.exports = router;

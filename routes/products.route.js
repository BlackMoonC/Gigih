const express = require("express");
const router = express.Router();
const {
  getAllData,
  postDataById,
} = require("../controllers/products.controller");

router.post("/post", postDataById);

router.get("/getAllData", getAllData);

module.exports = router;

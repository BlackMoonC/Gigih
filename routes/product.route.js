const express = require("express");
const {
  getAllData,
  postDataById,
} = require("../controllers/product.controller");
const router = express.Router();

router.post("/post", (req, res) => {
  try {
    console.log("Jalan");
    console.log(postDataById(req, res).data);
    res.send(postDataById(req, res));
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.get("/getAllData", (req, res) => {
  try {
    console.log(getAllData());
    res.send(getAllData());
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;

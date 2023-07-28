const express = require("express");
const router = express.Router();
const { getAllData } = require("../controllers/videos.controller");

router.get("/getAllData", getAllData);

module.exports = router;

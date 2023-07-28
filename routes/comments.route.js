const express = require("express");
const {
  submitComment,
  getListComment,
} = require("../controllers/comments.controller");
const router = express.Router();

router.get("/getAllData", getListComment);
router.post("/post", submitComment);

module.exports = router;

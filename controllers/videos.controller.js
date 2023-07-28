const Video = require("../models/videos.model");

const getAllData = async (req, res) => {
  const data = await Video.find();
  try {
    res.json({ data: data, message: "Data telah dapatkan" });
  } catch (err) {
    res.status(404).send(err.message);
  }
};

module.exports = {
  getAllData,
};

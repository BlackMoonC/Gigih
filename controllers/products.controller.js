const Product = require("../models/products.model");

const postDataById = async (req, res) => {
  try {
    const product = new Product({
      link_product: req.body.link,
      title: req.body.title,
      price: req.body.price,
    });
    const productSave = await product.save();
    res.json(productSave);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getAllData = async (req, res) => {
  const data = await Product.find();
  try {
    res.json({ data: data, message: "Data telah dapatkan" });
  } catch (err) {
    res.status(404).send(err.message);
  }
};

module.exports = {
  getAllData,
  postDataById,
};

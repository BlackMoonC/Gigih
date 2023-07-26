const Product = require("../models/product.model");

const postDataById = async (req, res) => {
  const product = new Product({
    link_product: req.body.link,
    title: req.body.title,
    price: req.body.price,
  });
  const productSave = await product.save();
  return { data: productSave };
};

const getAllData = async () => {
  const data = await Product.find();
  console.log(data);
  return { data: data, message: "Data telah didapatkan" };
};

module.exports = {
  getAllData,
  postDataById,
};

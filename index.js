require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

// List routes
const productRoute = require("./routes/product.route");

// Mongoose configuration
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("connected");
});

const app = express();
app.use(express.json());

// Setup body parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/products", productRoute);

app.listen(3000, () => {
  console.log(`Server listening on http://localhost:${3000}`);
});
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
console.log(mongoString);
// mongoose.connect("mongodb://localhost:27017/spotify");

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('connected');
})

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server listening on ${3000}`);
});

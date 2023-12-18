require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;

const MONGODB_URL = process.env.MONGODB_URL;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connection successful");
  })
  .catch((error) => console.error("Failed to connect to Mongodb"));

app.listen(PORT, () => {
  console.log("This application is listening on port " + PORT);
});

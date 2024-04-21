const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

const port = 8000;

// database connection
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log("There is an error in connection with database", err);
  });

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// route
app.use("/", require("./routes/authRouts"));

app.listen(port, () => {
  console.log(`Server is running on the port ${port} at localhost`);
});

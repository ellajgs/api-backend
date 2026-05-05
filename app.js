//how to run the program
const express = require("express");
const app = express();
const fruits = require("./routes/fruits");

app.get("/", (req, res) => {
  res.send("hello from the fruits api");
});

app.use("/fruits", fruits) //http://localhost:3000/fruits

module.exports = app
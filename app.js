//how to run the program
const express = require("express");
const app = express();
const fruits = require("./routes/fruits");

app.get("/", (req, res) => {
  res.send("hello from the fruits api");
});

app.use(express.json()); //this needs to be above the other one
// i guess bc its not got a route so it's applying to everything??
app.use("/fruits", fruits); //http://localhost:3000/fruits

module.exports = app;

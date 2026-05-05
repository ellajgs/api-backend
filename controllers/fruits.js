const Fruit = require("../models/Fruit");

const index = async (req, res) => {
  try {
    const fruits = await Fruit.showAll();
    res.status(200).send(fruits);
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

module.exports = { index };

const fruits = require("../fruits.json");

class Fruit {
  constructor(fruit) {
    ((this.genus = fruit.genus),
      (this.name = fruit.name),
      (this.id = fruit.id),
      (this.family = fruit.family),
      (this.order = fruit.order),
      (this.nutritions = fruit.nutritions));
  }

  static showAll() {
    return fruits.map((f) => new Fruit(f));
  }

  static show(name) {
    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() === name);

    if (fruit) {
      return new Fruit(fruit);
    } else {
      throw "fruit not found";
    }
  }

  static create(data) {
    const newFruit = data;
    console.log(newFruit);
    const fruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() === data.name.toLowerCase(),
    );

    if (fruit) {
      throw "this fruit already exists";
    } else {
      newFruit["id"] = fruits.length + 1;
      fruits.push(newFruit);
      return new Fruit(newFruit);
    }
  }
}

module.exports = Fruit;

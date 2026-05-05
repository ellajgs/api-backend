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

  static show(name){
    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() === name)

    if (fruit){
        return new Fruit(fruit)
        console.log(fruit)
    } else {
        return "fruit not found"
    }
  }
}

module.exports = Fruit
/* 
  The builder pattern allows us to:
  - Simplify the construction of a complex object
  - Separate the construction of a complex object from its representation
  - Encapsulate the construction process in different steps, 
    allowing for different representations using the same code
*/

// BEFORE
class BadPizza {
  toppings: string[];
  sauce: string;
  cheese: string;
  size: string;
  crust: string;

  constructor(
    toppings: string[],
    sauce: string,
    cheese: string,
    size: string,
    crust: string
  ) {
    this.toppings = toppings;
    this.sauce = sauce;
    this.cheese = cheese;
    this.size = size;
    this.crust = crust;
    // ...
  }
}

const hawaiianPizza = new BadPizza(
  ["pineapple, ham"],
  "tomato",
  "mozzarella",
  "large",
  "thin"
);

// AFTER

class GoodPizza {
  toppings: string[];
  sauce: string;
  cheese: string;
  size: string;
  crust: string;
}

interface IPizzaBuilder {
  init(): IPizzaBuilder;
  setToppings(toppings: string[]): IPizzaBuilder;
  setSauce(sauce: string): IPizzaBuilder;
  setCheese(cheese: string): IPizzaBuilder;
  setSize(size: string): IPizzaBuilder;
  setCrust(crust: string): IPizzaBuilder;
  getResult(): GoodPizza;
}

class PizzaBuilder implements IPizzaBuilder {
  private pizza: GoodPizza;
  init() {
    this.pizza = new GoodPizza();
    return this;
  }

  setToppings(toppings: string[]) {
    this.pizza.toppings = toppings;
    return this;
  }
  setSauce(sauce: string) {
    this.pizza.sauce = sauce;
    return this;
  }
  setCheese(cheese: string) {
    this.pizza.cheese = cheese;
    return this;
  }
  setSize(size: string) {
    this.pizza.size = size;
    return this;
  }
  setCrust(crust: string) {
    this.pizza.crust = crust;
    return this;
  }
  getResult() {
    return this.pizza;
  }
}

class PizzaRestaurant {
  // a.k.a Director

  private builder: IPizzaBuilder;
  constructor() {
    this.builder = new PizzaBuilder();
  }
  cookHawaiianPizza() {
    return this.builder
      .init()
      .setToppings(["pineapple, ham"])
      .setSauce("tomato")
      .setCheese("mozzarella")
      .setSize("large")
      .setCrust("thin")
      .getResult();
  }
}

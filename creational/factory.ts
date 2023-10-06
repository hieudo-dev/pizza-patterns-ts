/*
  "Define an interface for creating an object, but let subclasses decide which class to instantiate.
   The Factory method lets a class defer instantiation it uses to subclasses." - Gang of Four

   Problem: 
    - Coupling of business logic and class instantiation logic

   Method:
    - Introduce abstraction layer between business logic and class instantiation logic called: Factory
    - Factory is responsible for creating objects
 */

interface Pizza {
  // ...
}
class DeepFriedPizza implements Pizza {}
class GrilledPizza implements Pizza {}

// BEFORE
class DeepFriedPizzaRestaurant {
  preparePizza(pizza) {}
  getPizza() {
    const pizza = new DeepFriedPizza();
    this.preparePizza(pizza);
    return pizza;
  }
}
class GrilledPizzaRestaurant {
  preparePizza(pizza) {}
  getPizza() {
    const pizza = new GrilledPizza();
    this.preparePizza(pizza);
    return pizza;
  }
}

// AFTER
abstract class PizzaFactory {
  preparePizza(pizza: Pizza) {}
  getPizza() {
    const pizza = this.cookPizza();
    this.preparePizza(pizza);
    return pizza;
  }
  abstract cookPizza(): Pizza; // Delegate to subclass
}

class DeepFryPizzaRestaurant extends PizzaFactory {
  cookPizza() {
    return new DeepFriedPizza();
  }
}
class GrillPizzaRestaurant extends PizzaFactory {
  cookPizza() {
    return new GrilledPizza();
  }
}

const pizzaRestaurant = new DeepFryPizzaRestaurant(); // new GrillPizzaRestaurant()
const pizza = pizzaRestaurant.getPizza(); // 🍕🍕🍕

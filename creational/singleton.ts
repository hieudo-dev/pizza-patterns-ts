/* 
  The singleton pattern allows objects to:
  - Ensure they only have one instance
  - Provide easy access to that instance
  - Control their instantiation
*/

class PizzaRestaurant {
  private static instance: PizzaRestaurant;
  private constructor() {}

  static getInstance() {
    if (!PizzaRestaurant.instance) {
      PizzaRestaurant.instance = new PizzaRestaurant();
    }
    return PizzaRestaurant.instance;
  }
}

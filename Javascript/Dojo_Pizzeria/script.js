function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "anchovies", "onions"]);
console.log(p2);

var p3 = pizzaOven("deep dish", "bbq", ["mozzarella", "parmesan"], ["mushrooms"]);
console.log(p3);

var p4 = pizzaOven("thin and crispy", "traditional", ["mozzarella", "chedder"], ["mushrooms", "sausage", "onions", "chicken"]);
console.log(p4);
//DinnerModel class
class DinnerModel {
    
    /* Note the default value of function parameters */
    constructor(guests/* FIXME default value 2 */, dishes=[] ) {
	// note that you always need to use this when you refer to an object property!
	this.guests= guests;
	// TODO
    }
    
    /* Set the number of guests to the given value */
    setNumberOfGuests(num) {
	//TODO 
    }

    /* Return the number of guests */ 
    getNumberOfGuests() {
	//TODO 
    }
    
    /* Return all the dishes on the menu. */
    getMenu() {
	//TODO 
    }
    
    /* add a dish to the menu. If a dish with the same type already exists, remove it. 
     The dish object can be obtained as a result of DishSource.getDishDetails() or DishSource.searchDishes() 
    */
    addToMenu(dish) {
	//TODO  
    }
    
    /* Remove dish from the menu */
    removeFromMenu(dish) {
	//TODO 
    }

    /* Return an ingredient list, with each ingredient showing up maximum once, and the quantities added up.
       Assume that the ingredient price is the same in all dishes that use a certain ingredient.
    */
    getIngredients(){
	//TODO 
    }

    /* Utility method do compute a dish price depending on its ingredient prices and quantities.
     This method could be declared static as it does not depend on the DinnerModel data */
    getPrice(dish){
	//TODO 
    }

    /* Total price for the dinner.  */
    totalPrice(){
	//TODO 
    }    
}

/* A source of dish data, implemented with dishesConst below. Can be implemented with a database or a web API...

   We illustrate another way to define an object with methods: simply define an object constant. 
   Since methods are object members, you neeed to separate them with comma 
*/
const  DishSource={
    /* 
       Search for dishes. If searchParam is not specfied, all the dishes will be returned.
       searchParam can have the following properties:
       - type: the dish type
       - query: free text in dish name and ingredients
    */
    searchDishes(searchParams) {
	//TODO 
    },
    
    //Returns a dish of specific ID
    getDishDetails(id) {
	//TODO 
    }, // extra comma is legal in object properties
};  /* good to have a semicolon after a let or const declaration */

// the dishes constant contains an array of all the 
// dishes in the database. Each dish has id, name, type,
// array of ingredients. Each ingredient has name, 
// quantity (a number), price (a number) and unit (string)

const dishesConst = [{
  'id': 1,
  'name': 'French toast',
  'type': 'starter',
  'image': 'toast.jpg',
  'description': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
  'ingredients': [{
    'name': 'eggs',
    'quantity': 0.5,
    'unit': '',
    'price': 10
  }, {
    'name': 'milk',
    'quantity': 30,
    'unit': 'ml',
    'price': 6
  }, {
    'name': 'brown sugar',
    'quantity': 7,
    'unit': 'g',
    'price': 1
  }, {
    'name': 'ground nutmeg',
    'quantity': 0.5,
    'unit': 'g',
    'price': 12
  }, {
    'name': 'white bread',
    'quantity': 2,
    'unit': 'slices',
    'price': 2
  }]
}, {
  'id': 2,
  'name': 'Sourdough Starter',
  'type': 'starter',
  'image': 'sourdough.jpg',
  'description': "Here is how you make it... Lore ipsum...",
  'ingredients': [{
    'name': 'active dry yeast',
    'quantity': 0.5,
    'unit': 'g',
    'price': 4
  }, {
    'name': 'warm water',
    'quantity': 30,
    'unit': 'ml',
    'price': 0
  }, {
    'name': 'all-purpose flour',
    'quantity': 15,
    'unit': 'g',
    'price': 2
  }]
}, {
  'id': 3,
  'name': 'Baked Brie with Peaches',
  'type': 'starter',
  'image': 'bakedbrie.jpg',
  'description': "Here is how you make it... Lore ipsum...",
  'ingredients': [{
    'name': 'round Brie cheese',
    'quantity': 10,
    'unit': 'g',
    'price': 8
  }, {
    'name': 'raspberry preserves',
    'quantity': 15,
    'unit': 'g',
    'price': 10
  }, {
    'name': 'peaches',
    'quantity': 1,
    'unit': '',
    'price': 4
  }]
}, {
  'id': 100,
  'name': 'Meat balls',
  'type': 'main dish',
  'image': 'meatballs.jpg',
  'description': "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
  'ingredients': [{
    'name': 'extra lean ground beef',
    'quantity': 115,
    'unit': 'g',
    'price': 20
  }, {
    'name': 'sea salt',
    'quantity': 0.7,
    'unit': 'g',
    'price': 3
  }, {
    'name': 'small onion, diced',
    'quantity': 0.25,
    'unit': '',
    'price': 2
  }, {
    'name': 'garlic salt',
    'quantity': 0.7,
    'unit': 'g',
    'price': 2
  }, {
    'name': 'Italian seasoning',
    'quantity': 0.6,
    'unit': 'g',
    'price': 3
  }, {
    'name': 'dried oregano',
    'quantity': 0.3,
    'unit': 'g',
    'price': 3
  }, {
    'name': 'crushed red pepper flakes',
    'quantity': 0.6,
    'unit': 'g',
    'price': 3
  }, {
    'name': 'Worcestershire sauce',
    'quantity': 6,
    'unit': 'ml',
    'price': 7
  }, {
    'name': 'milk',
    'quantity': 20,
    'unit': 'ml',
    'price': 4
  }, {
    'name': 'grated Parmesan cheese',
    'quantity': 5,
    'unit': 'g',
    'price': 8
  }, {
    'name': 'seasoned bread crumbs',
    'quantity': 15,
    'unit': 'g',
    'price': 4
  }]
}, {
  'id': 101,
  'name': 'MD 2',
  'type': 'main dish',
  'image': 'bakedbrie.jpg',
  'description': "Here is how you make it... Lore ipsum...",
  'ingredients': [{
    'name': 'ingredient 1',
    'quantity': 1,
    'unit': 'pieces',
    'price': 8
  }, {
    'name': 'ingredient 2',
    'quantity': 15,
    'unit': 'g',
    'price': 7
  }, {
    'name': 'ingredient 3',
    'quantity': 10,
    'unit': 'ml',
    'price': 4
  }]
}, {
  'id': 102,
  'name': 'MD 3',
  'type': 'main dish',
  'image': 'meatballs.jpg',
  'description': "Here is how you make it... Lore ipsum...",
  'ingredients': [{
    'name': 'ingredient 1',
    'quantity': 2,
    'unit': 'pieces',
    'price': 8
  }, {
    'name': 'ingredient 2',
    'quantity': 10,
    'unit': 'g',
    'price': 7
  }, {
    'name': 'ingredient 3',
    'quantity': 5,
    'unit': 'ml',
    'price': 4
  }]
}, {
  'id': 103,
  'name': 'MD 4',
  'type': 'main dish',
  'image': 'meatballs.jpg',
  'description': "Here is how you make it... Lore ipsum...",
  'ingredients': [{
    'name': 'ingredient 1',
    'quantity': 1,
    'unit': 'pieces',
    'price': 4
  }, {
    'name': 'ingredient 2',
    'quantity': 12,
    'unit': 'g',
    'price': 7
  }, {
    'name': 'ingredient 3',
    'quantity': 6,
    'unit': 'ml',
    'price': 4
  }]
}, {
  'id': 200,
  'name': 'Chocolat Ice cream',
  'type': 'dessert',
  'image': 'icecream.jpg',
  'description': "Here is how you make it... Lore ipsum...",
  'ingredients': [{
    'name': 'ice cream',
    'quantity': 100,
    'unit': 'ml',
    'price': 6
  }]
}, {
  'id': 201,
  'name': 'Vanilla Ice cream',
  'type': 'dessert',
  'image': 'icecream.jpg',
  'description': "Here is how you make it... Lore ipsum...",
  'ingredients': [{
    'name': 'ice cream',
    'quantity': 100,
    'unit': 'ml',
    'price': 6
  }]
}, {
  'id': 202,
  'name': 'Strawberry',
  'type': 'dessert',
  'image': 'icecream.jpg',
  'description': "Here is how you make it... Lore ipsum...",
  'ingredients': [{
    'name': 'ice cream',
    'quantity': 100,
    'unit': 'ml',
    'price': 6
  }]
}
];

// Deepfreeze
// https://github.com/substack/deep-freeze/blob/master/index.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
function deepFreeze(o) {
  Object.freeze(o);
  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o.hasOwnProperty(prop)
      && o[prop] !== null
      && (typeof o[prop] === "object" || typeof o[prop] === "function")
      && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
}

deepFreeze(dishesConst);


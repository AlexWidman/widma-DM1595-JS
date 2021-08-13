//DinnerModel class
class DinnerModel {
    
    /* Note the default value of function parameters */
    constructor(guestsParam/* FIXME default value 2 */, dishesParam=[] ) {
	// note that you always need to use "this." when you refer to an object property!
	this.guests= guestsParam;  
	
	this.dishes= dishesParam.slice(0);  // we store a copy (clone) of dishesParam.
	// JS objects (like arrays such as dishesParam) are sent as function parameters by reference not by value.
	// Therefore we are getting a reference to the dishesParam array, and anybody can still modify the array content!
	// So we clone dishesParam to ensure that our DinnerModel object is *not* affected if the dishesParam array content is changed after the call to new DinnerModel(num, dishesParam),

	// Week 2: cloning can be also achieved using spread syntax (...) like so:  this.dishes= [...dishesParam];
	// or this.dishes=new Array(...dishesParam)
    }
    
    /* Set the number of guests to the given value. 
       The value must be a positive integer, throw an Error otherwise.
     */
    setNumberOfGuests(num) {
	// TODO throw an error if num is not a positive integer. Then:
	// this.guests= TODO ;
    }

    /* Return the number of guests */ 
    getNumberOfGuests() {
	// return this.  TODO 
    }
    
    /* Return all the dishes on the menu. 
     */
    getMenu() {
	//TODO 
    }
    
    /* add a dish to the menu. If a dish with the same type already exists, remove it. 
     The dish object can be obtained as a result of DishSource.getDishDetails() or DishSource.searchDishes() 
    */
    addToMenu(dish) {
	//TODO  
    }
    
    /* Remove dish from the menu. Identify the dish by its id. Both of the following should work:
       model.removeFromMenu(DishSource.getDishData(3))
       model.removeFromMenu({id:3})
     */
    removeFromMenu(dish) {
	//TODO 
    }

    /* Return the dish of the given type from the menu, or undefined */
    getDishOfType(type){
	//TODO 
    }
    
    /* Week 2: Utility method do compute a dish price depending on its ingredient prices and quantities.
     This method could be declared static as it does not depend on the DinnerModel data */
    getDishPrice(dish){
	//TODO 
    }

    /* Week 2: Total price for the dinner given the number of guests */
    getDinnerPrice(){
	//TODO 
    }    
    /* Week 2: Return an array of ingredients for the DinnerModel dishes, 
       with each ingredient showing up maximum once, and the quantities added up.
       Assume that the ingredient price and measurement unit are the same in all dishes that use a certain ingredient.

       The implementation must be functional. The hints below define an object that collects all the ingredients, and then that object is changed by other functions (forEach callbacks) inside the method. 

       Advanced (bonus) : implement functionally without defining a const, e.g. return dishes.reduce(TODO collect all ingredients in an array).reduce(TODO group ingredients by name in an object)...
    */
    getIngredients(){
	// to make sure we have one entry for each ingredient name, the suitable data structure is a Dictionary,
	// with ingredient names as keys
	// All JavaScript objects are dictionaries, so we use an object called combinedIngredients to collect ingredient data. combinedIngredients[name] will return the ingredient object with the respective name
	const combinedIngredients={};
	
	// TODO  for each dish (this.dishes.forEach() ), for each dish ingredient, set  combinedIngredients[name] to
	// 1) a copy of the ingredient object if combinedIngredients[name] is falsy, i.e. we have not encoutered this ingredient yet during the forEach iterations
	// 2) a copy of the ingredient object with an increased amount if combinedIngredients[name] is truthy, i.e. we have encountered this ingredient before
	// functional code uses expressions rarhter than statements so use a ternary expression ? :  to distinguish between case (1) and (2)
	
	return /*TODO now we don't need the keys any longer, we just need an array of ingredients. Find the appropriate Object method for that */
    }
}

/* A source of dish data, implemented with data from dishesConst.js. Can be implemented with a database or a web API...

   We illustrate another way to define an object with methods: simply define an object constant rather than a class. 
   Since methods are object members, you neeed to separate them with comma 
*/
const  DishSource={
    /* Returns a dish of specific ID */
    getDishDetails(id) {
	//TODO 
    },

    /* 
       Week 2: Search for dishes 
       searchParam can have the following properties (search criteria):
       - type: the dish type
       - query: free text in dish name 
       If no search criterion is specified, all dishes are returned.
       Example use: 
       DishSource.searchDishes({type:"main course", query:"pizza"})
       DishSource.searchDishes({type:"main course"})
       DishSource.searchDishes({query:"Meatba"})
       DishSource.searchDishes({})  returns all dishes
    */
    searchDishes(searchParams) {
	//TODO 
    },

    /* Week 2: simulate retrieving the dish asynchronously: 
       assume that the callback parameter is a function.
       wait for a random time (minimum 10ms, maximum 1000msc), then call the callback with the requested dish as parameter 
       Example use:
       DishSource.getDishDetailsAsync(5, dish=>console.log(dish))
    */
    getDishDetailsAsync(id, callback) {
	let randomDelay = Math.random(); // returns random float from 0 to 1
	// if you multiply the random with 500 you will get a random number from 0 to 500
	// to ensure a certain minimum, just add that value to the random
	//TODO
    },


    /* advanced: asynchronous dish  retrieval as a Promise 
       This can be implemented using getDishDetailsAsync by using a Promise constructor. The requirements are the same,
       the promise should resolve after minimum 10 ms maximum 1000 ms. Example use:
              DishSource.getDishDetailsPromise(1).then(console.log).catch(console.err)
     */
    getDishDetailsPromise(id) {
	//TODO 
    },    // extra comma is legal in object properties
};  /* good to have a semicolon after a let or const declaration */


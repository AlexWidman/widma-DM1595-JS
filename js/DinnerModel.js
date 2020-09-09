//DinnerModel class
class DinnerModel {
    
    /* Note the default value of function parameters */
    constructor(guestsParam/* FIXME default value 2 */, dishesParam=[] ) {
	// note that you always need to use this when you refer to an object property!
	this.guests= guestsParam;  
	
	this.dishes= [...dishesParam]; // clone the dishesParam array using spread syntax.
	// We clone it to ensure that if the dishesParam array content is changed after the call to new DinnerModel(num, dishesParam),
	//    then our DinnerModel object is not affected.
	// same as this.dishes= new Array(dishesParam)
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
    /* Week 2: Return an ingredient list for the DinnerModel dishes, 
       with each ingredient showing up maximum once, and the quantities added up.
       Assume that the ingredient price is the same in all dishes that use a certain ingredient.

       You can implement this method procedurally, or with a mix procedural/ functional.

       Advanced (bonus) : implement functionally, without variable assignments, for/loops() or if()
    */
    getIngredients(){
	//TODO 
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

    /* Week 2: simulate fetching the dish asynchronously: 
       assume that the callback parameter is a function.
       wait for a random time (up to 1s), then call the callback with the requested dish as parameter 
       Example use:
       DishSource.getDishDetailsAsync(1, console.log)
    */
    getDishDetailsAsync(id, callback) {
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
    /* advanced: asynchronous dish  retrieval as a Promise 
              DishSource.getDishDetailsPromise(1).then(console.log).catch(console.err)
     */
    getDishDetailsPromise(id) {
	//TODO 
    },    // extra comma is legal in object properties
};  /* good to have a semicolon after a let or const declaration */


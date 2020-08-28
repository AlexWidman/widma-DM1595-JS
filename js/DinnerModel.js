//DinnerModel class
class DinnerModel {
    
    /* Note the default value of function parameters */
    constructor(guests/* FIXME default value 2 */, dishes=[] ) {
	// note that you always need to use this when you refer to an object property!
	this.guests= guests;
	// TODO
    }
    
    /* Set the number of guests to the given value. 
       The value must be a positive integer, throw an Error otherwise.
     */
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
    getDishPrice(dish){
	//TODO 
    }

    /* Total price for the dinner.  */
    getDinnerPrice(){
	//TODO 
    }    
}

/* A source of dish data, implemented with data from dishesConst.js. Can be implemented with a database or a web API...

   We illustrate another way to define an object with methods: simply define an object constant rather than a class. 
   Since methods are object members, you neeed to separate them with comma 
*/
const  DishSource={
    /* 
       Search for dishes. 
       searchParam can have the following properties (search criteria):
       - type: the dish type
       - query: free text in dish name and ingredients
       If no search criterion is specified, all dishes are returned.
    */
    searchDishes(searchParams) {
	//TODO 
    },
    
    //Returns a dish of specific ID
    getDishDetails(id) {
	//TODO 
    }, // extra comma is legal in object properties
};  /* good to have a semicolon after a let or const declaration */


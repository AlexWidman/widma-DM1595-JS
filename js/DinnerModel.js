//DinnerModel class
class DinnerModel {
    
    /* Note the default value of function parameters */
    constructor(guestsParam=2, dishesParam=[] ) {
        // note that you always need to use "this." when you refer to an object property!
        this.guests= guestsParam;  
        
        this.dishes= [...dishesParam];  // we store a copy (clone) of dishesParam to avoid sharing the array with some other code
        // see Functional JavaScript for more details
     }
    
    /* Set the number of guests to the given value. 
       The value must be a positive integer, throw an Error otherwise.
     */

    doThrow(msg){ throw new Error(msg); }

    validatePositiveInteger(x){ return x>0 && Number.isInteger(x)? x: this.doThrow("number of guests not a positive integer") }

    setNumberOfGuests(num) {
        this.guests = this.validatePositiveInteger(num)
    }

    /* Return the number of guests */ 
    getNumberOfGuests() {
        return this.guests
    }

    // in W1 after you are done with number of guests you have to switch your attention to DishSource below, and implement getDishDetails
    

    /* Return all the dishes on the menu. 
     */
    getMenu() {
        return this.dishes
    }
    
    /* add a dish to the menu. If a dish with the same type already exists, remove it first. 
    */
    addToMenu(dish) {
        this.dishes = this.dishes.filter(function(d){ return d.type !== dish.type })
        this.dishes.push(dish);
    }
    
    /* Remove dish from the menu. Identify the dish by its id. Both of the following should work:
       model.removeFromMenu(DishSource.getDishData(3))
       model.removeFromMenu({id:3})
     */
    removeFromMenu(dish) {
        this.dishes = this.dishes.filter(function(d){ return d.id !== dish.id })
    }

    /* Return the dish of the given type from the menu, or undefined */
    getDishOfType(type){
        return this.dishes.find(dish => dish.type === type)
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

       The hints below define an object that collects all the ingredients, and then that object is changed by other functions (forEach callbacks) inside the method. 

       Advanced (bonus) : implement functionally without defining a const, e.g. 
            return dishes.reduce(TODO collect all ingredients in an array).reduce(TODO group ingredients by name in an object)...
    */
    getIngredients(){
        // to make sure we have one entry for each ingredient name, the suitable data structure is a Dictionary,
        // with ingredient names as keys
        // All JavaScript objects are dictionaries, so we use an object called combinedIngredients to collect ingredient data. combinedIngredients[name] will return the ingredient object with the respective name
        const combinedIngredients={};
        
        // TODO  for each dish (this.dishes.forEach(CB) ), for each dish ingredient, set  combinedIngredients[name] to
        // 1) a copy of the ingredient object IN CASE combinedIngredients[name] is falsy, i.e. we have not encoutered this ingredient yet during the forEach iterations
        // 2) a copy of the ingredient object with an increased amount IN CASE combinedIngredients[name] is truthy, i.e. we have encountered this ingredient before
        // functional code uses expressions rather than statements so use a conditional operator ? :  to distinguish between case (1) and (2)
        
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
        return dishesConst.find(x => x.id === id)
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

    /* Week 2: Retrieve a dish asynhronously by returning a Promise.
       Read the dishes via fetch from this URL, which returns dishes in JSON format:
       http://standup.csc.kth.se:8080/iprog/file?DM1595/dishes.json
       Then filter for the dish with the respective ID. 
       Example use:
           DishSource.getDishDetailsPromise(2).then(console.log)

      Advanced: If the dish with the respective ID does not exist, the returned promise must not resolve to undefined, but must reject. The test below will print on console.error (in red)
           DishSource.getDishDetailsPromise(-1).then(console.log).catch(console.error)

      Optional-advanced: implement the promise rejection fully functionally (no statements), using e.g. a promise constructor  
            new Promise(function executorCB(resolve, reject){ fetch(...)....then(function that calls resolve and reject when appropriate); })
    */
    getDishDetailsPromise(id) {
        return fetch(/*TODO*/).then(/*TODO*/).then(/*TODO*/);
    },    // extra comma is legal in object properties
};  /* good to have a semicolon after a let or const declaration */

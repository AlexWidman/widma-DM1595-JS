const assert = chai.assert;
const expect = chai.expect;

describe("DinnerModel", function() {
    this.timeout(200000);
    let model = new DinnerModel();
    
    beforeEach(() => {
	model = new DinnerModel();
    });

    describe("number of guests", () => {
	it("default number of guests is 2", ()=> {
	    expect(model.getNumberOfGuests()).to.equal(2);
	});
		   

	it("can set and get number of guests", () => {
	    model.setNumberOfGuests(1);
	    expect(model.getNumberOfGuests()).to.equal(1);
	    
	    model.setNumberOfGuests(3);
	    expect(model.getNumberOfGuests()).to.equal(3);
	});

	it("number of guests is a positive integer", () => {
	    model.setNumberOfGuests(1);
	    expect(model.getNumberOfGuests()).to.equal(1);
	    
	    // this should not change the value
	    expect(()=>model.setNumberOfGuests(-1)).to.throw();
	    //expect(model.getNumberOfGuests()).to.equal(1);
	});
    });
    
    describe("getting individual dishes", () => {
	it("gets the correct dish", () => {
	    const dish1 = DishSource.getDishDetails(1);
	    expect(dish1.id).to.equal(1);
	    expect(dish1.name).to.equal("French toast");
	    
	    const dish100 = DishSource.getDishDetails(100);
	    expect(dish100.id).to.equal(100);
	    expect(dish100.name).to.equal("Meat balls");
	});
	
	it("returns undefined if dish is not found", () => {
	    const result1 = DishSource.getDishDetails(-1);
	    expect(result1).to.equal(undefined);
	    
	    const result2 = DishSource.getDishDetails();
	    expect(result2).to.equal(undefined);
	});
    });
    
    describe("filtering for dishes", () => {
	it("returns all dishes if no search criteria are specified", () => {
	    const allDishes = DishSource.searchDishes({});
	    expect(allDishes.length).to.equal(10);
	});
	
	it("returns the correct dish type", () => {
	    let dishes = DishSource.searchDishes({type:"starter"});
	    const onlyHasStarters = dishes.every(dish => dish.type === "starter");
	    expect(onlyHasStarters).to.equal(true);
	    
	    dishes = DishSource.searchDishes({type: "main dish"});
	    const onlyHasMain = dishes.every(dish => dish.type === "main dish");
	    expect(onlyHasMain).to.equal(true);
	});
	
	it("filters with keywords", () => {
	    let dishes = DishSource.searchDishes({type:"", query:"French"});
	    let allDishesMatch = dishes.every(dish => dish.name.includes("French"));
	    expect(dishes.length).to.be.above(0);
	    expect(allDishesMatch).to.equal(true);
	    
	    dishes = DishSource.searchDishes({type:"", query:"Meat"});
	    allDishesMatch = dishes.every(dish => dish.name.includes("Meat"));
	    expect(dishes.length).to.be.above(0);
	    expect(allDishesMatch).to.equal(true);
	});
	
	it("returns correct dishes with filter and type", () => {
	    const dishes = DishSource.searchDishes({type:"starter", query:"Sour"});
	    const allDishesMatch = dishes.every(
		dish => dish.name.includes("Sour") && dish.type === "starter"
	    );
	    expect(dishes.length).to.be.above(0);
	    expect(allDishesMatch).to.equal(true);
	});
    });
    
    describe("menu", () => {
	it("can add dishes", () => {
	    model.addToMenu(DishSource.getDishDetails(1));
	    expect(model.getMenu()).to.include(DishSource.getDishDetails(1));
	    
	    model.addToMenu(DishSource.getDishDetails(100));
	    expect(model.getMenu()).to.include(DishSource.getDishDetails(1));
	    expect(model.getMenu()).to.include(DishSource.getDishDetails(100));
	});
	
	it("overwrites dishes of the same type when adding", () => {
	    model.addToMenu(DishSource.getDishDetails(1));
	    expect(model.getMenu()).to.include(DishSource.getDishDetails(1));
	    
	    model.addToMenu(DishSource.getDishDetails(2));
	    // the old starter dish should no longer exist
	    expect(model.getMenu()).to.not.include(DishSource.getDishDetails(1));
	    // the new dish should exist
	    expect(model.getMenu()).to.include(DishSource.getDishDetails(2));
	});
	
	it("can remove dishes", () => {
	    model.addToMenu(DishSource.getDishDetails(1));
	    // dish 1 should be in the menu
	    expect(model.getMenu()).to.include(DishSource.getDishDetails(1));
	    
	    model.removeFromMenu({id:1});
	    // should now be removed
	    expect(model.getMenu()).to.not.include(DishSource.getDishDetails(1));
	});

	it("dish of type", () => {
	    model.addToMenu(DishSource.getDishDetails(2));
	    expect(model.getMenu()).to.include(DishSource.getDishDetails(2));
	    expect(model.getDishOfType(DishSource.getDishDetails(2).type)).to.equal(DishSource.getDishDetails(2));
	});
    });

    describe("totals", () => {
	it("ingredients", () => {
	    model.addToMenu(DishSource.getDishDetails(2));
	    model.addToMenu(DishSource.getDishDetails(100));
	    expect(model.getIngredients()).to.include.deep.members([{quantity: 5, price: 10, name: "eggs", unit:''}]);
	    expect(model.getIngredients()).to.include.deep.members([{quantity: 80, price: 0, name: "water", unit:'ml'}]);
	});
	it("dish price", () => {
	    expect(model.getDishPrice(DishSource.getDishDetails(2))).to.equal(52);
	    expect(model.getDishPrice(DishSource.getDishDetails(100))).to.equal(2559.5);
	});
	it("total price", () => {
	    model.addToMenu(DishSource.getDishDetails(2));
	    model.addToMenu(DishSource.getDishDetails(100));
	    expect(model.getDinnerPrice()).to.equal(2*(52+2559.5));
	});
    });
});

const assert = chai.assert;
const expect = chai.expect;

describe("DinnerModel", () => {
    let model = new DinnerModel();
    
    beforeEach(() => {
	model = new DinnerModel();
    });

    describe("number of guests", () => {
	it("can set and get number of guests", () => {
	    model.setNumberOfGuests(0);
	    expect(model.getNumberOfGuests()).to.equal(0);
	    
	    model.setNumberOfGuests(1);
	    expect(model.getNumberOfGuests()).to.equal(1);
	});
	
	it("won't allow negative number of guests", () => {
	    model.setNumberOfGuests(1);
	    expect(model.getNumberOfGuests()).to.equal(1);
	    
	    // this should not change the value
	    model.setNumberOfGuests(-1);
	    expect(model.getNumberOfGuests()).to.equal(1);
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
	it("returns all dishes if no args are specified", () => {
	    const allDishes = DishSource.searchDishes();
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
	    model.addToMenu(1);
	    expect(model.getMenu()).to.include(DishSource.getDishDetails(1));
	    
	    model.addToMenu(100);
	    expect(model.getMenu()).to.include(DishSource.getDishDetails(1));
	    expect(model.getMenu()).to.include(DishSource.getDishDetails(100));
	});
	
	it("overwrites dishes of the same type when adding", () => {
	    model.addToMenu(1);
	    expect(model.getMenu()).to.include(DishSource.getDishDetails(1));
	    
	    model.addToMenu(2);
	    // the old starter dish should no longer exist
	    expect(model.getMenu()).to.not.include(DishSource.getDishDetails(1));
	    // the new dish should exist
	    expect(model.getMenu()).to.include(DishSource.getDishDetails(2));
	});
	
	it("can remove dishes", () => {
	    model.addToMenu(1);
	    // dish 1 should be in the menu
	    expect(model.getMenu()).to.include(DishSource.getDishDetails(1));
	    
	    model.removeDishFromMenu(1);
	    // should now be removed
	    expect(model.getMenu()).to.not.include(DishSource.getDishDetails(1));
	});
    });
});

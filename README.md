# DM1595 JavaScript exercises

Your task is to program the data model (including application logic). The data model contains the abstract data of an interactive application, e.g. the non-graphical part.

The application logic is:
- the dinner may have 1 or more guests, the default should be 2
- only one dish of a certain type can exist in the menu

Dishes and ingredients are stored in an array constant. You need to implement dish search functionality (the DishSource object).

To implement this, you only need to modify [js/DinnerModel.js](/js/DinnerModel.js) If you modify the other files, merging might be a bit more tricky for you when moving to the next lab.

## Setting up
- set up your SSH key for the KTH GitHub
- create your own copy of this repository by pressing *Fork* at the top right.
- checkout your KTH GitHub repository (created at the fork above) on your working computer using *git clone*
- *commit* as you make progress with the code
- *push* to your KTH GitHub repository 

When you are done with your work, submit your KTH Git repository URL as answer to the Canvas assignment.

## Testing

Open `index.html` in the browser and tests should run automatically

## Basic procedural JavaScript (week 1)
Use your procedural programming knowledge (loops, conditionals) to implement the DinnerModel and the DishSource

## Functional and declarative JavaScript (week 2, work in progress)
Re-implement the DinnerPlanner and DishSource using higher-order functions (Array.map(), reduce(), filter())
Use immutable arrays
Use destructuring
Use spread syntax, object constants and other declarative notations to create objects and arrays declaratively


## What's in this repo
-----

* [index.html](/index.html) - open to run the tests. 
* [js/DinnerModel.js](/js/DinnerModel.js) - write code here. This is a skeleton for the model of the application, but it does not yet support the functionality needed (number of guests, selected dishes, et.c.). It also contains a first dummy hardcoded "database" to use as test data.
* [test/dinnerModel.test.js](/test/dinnerModel.test.js) - tests for the model. You do not need to modify these, but study how they are written. You might be asked to write more tests in the future. 


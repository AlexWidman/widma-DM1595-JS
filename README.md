# DM1595 JavaScript exercises

Your task is to program the data model (including application logic) for a "dinner planner" use case. The data model contains the abstract data of an interactive application, e.g. the non-graphical part.

The application logic is:
- the dinner may have 1 or more guests, the default should be 2
- only one dish of a certain type (starter, main course, dessert, etc) can exist in the menu

Dishes and ingredients are stored in an array constant. You need to implement dish search and retrieval functionality (the DishSource object).

To implement this, you only need to modify [js/DinnerModel.js](/js/DinnerModel.js). 

The tests are provided for your convenience. Passing the tests is only the first step of passing the lab. You must be able to explain your code and the code may still be problematic in other ways that are not covered by the tests. We may also add more tests that check the above application logic rules.

For troubleshooting, make sure to use the browser developer tools, which you can access by pressing F12 or Ctrl-Shift-i. Set a breakpoint at or before the line of code that fails.

## Setting up
- [set up your SSH key](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) for the KTH GitHub. Replace github.com in the instructions with  gits-15.sys.kth.se
- create your own copy of this repository by pressin **Fork** at the top right.
- checkout your KTH GitHub repository (created at the fork above) on your working computer using *git clone*
- git *add* the files you modified, and *commit* as you make progress with the code
- *push* to your KTH GitHub repository 

When you are done with your work, submit your KTH Git repository URL as answer to the Canvas assignment.

## Testing

Open `index.html` in the browser and tests should run automatically

Tests marked *W1* must pass during the JavaScript first week (individual). Week 1 is focused on simple procedural JavaScript.

Tests marked *W2* must pass during the second JavaScript week (work in pairs). Week 2 is focused on higher order functions (Array.filter, map, reduce) and asynchronous code. 

Tests marked Advanced(bonus) give one bonus each.

## Advanced
DinnerModel.getIngredients() implementeed without variable assignments, for() or if()

## What's in this repo
-----

* [index.html](/index.html) - open to run the tests. 
* [js/DinnerModel.js](/js/DinnerModel.js) - write code here. This is a skeleton for the model of the application, but it does not yet support the functionality needed (number of guests, selected dishes, et.c.).
* [js/dishesConst.js](/js/dishesConst.js) - a dummy hardcoded "database" to use as test data. Tests work with dishes 1, 2 and 100, you can modify the other dishes if you want to test more
* [test/dinnerModel.test.js](/test/dinnerModel.test.js) - tests for the model. You do not need to modify these, but study how they are written. You might be asked to write more tests in the future. 


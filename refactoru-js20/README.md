refactoru-js20
==============

restaurant ui

Objective
Create a user interface for the Restaurant Objects exercise. Display a restaurant's menu and allow users to place orders.

Requirements
Add a create method to each object. This create method should return a DOM element for that object. 
e.g.
return $('<div class="food-item">{name}</div>'.supplant(myFoodItem));
These create methods should all be pure functions. For code reuse, you can call create methods of contained objects, just like toString was used in the previous exercise.

When the page loads, render a restaurant with its name and menu.

When the user clicks on a plate, they get the option to add it to their order.

Display the user's order with total price.

Highlight the Plates that match the user's dietary preferences.

Note: It might be a good idea to write down your design ahead of time and run it by a peer or instructor to see if it makes sound sense before beginning to implement it! Good luck and have fun!

Bonus

Add your own unique customization to this exercise, such as an enhanced user interface, additional ordering options, or an expanded menu.


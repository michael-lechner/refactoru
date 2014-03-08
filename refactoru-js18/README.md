refactoru-js18
==============

handlebars store

Part I: The Foundation

Create an HTML5 page and include jQuery, Handlebars, and the products-data.js
Inside the body of your page, add a single div with an ID of #product-container
Create a script tag on your html page with an attribute of type="handlebars" and give it an id.
Add a single div to the contents of the script tag and give it a class name of product. This will represent 
each individual product on the page.
Select the script created in step 3 using jQuery and store it in variable
Here's What Happened Handlebars helps us to separate concerns and keep html with html. We created a 
template using normal html tags, selected it via jquery, and stored the resulting html into a variable in js.

Call Handlebars.compile and pass it the stored variable and store the result in a variable template
Inside your external JS file, use the variable defined by products-data.js and loop through productsData.productsList 
and do the following for each product:
Call the template function returned in step 6 and pass it the current product
Use jQuery to append the resulting template html to the #product-container
Here's What Happened For each product in our set, we are calling our handlebars-created template function 
and passing a context. This is very similar to supplant except that handlebars has to do a few behind-the-scenes 
calculations before it can utilize a context.

Part II: The Details

Add a header element to the template that will render the title property
Add an image element to the template that will render the image property
Add a separate element to the template to render the cost property
Using CSS, style your product list to be more user-friendly
Check Yo Self: You should see each item displayed on the page with each product showing a 
different title, cost, and image

Part III: Wishlist

Add a ul to your page that is outside of #product-container and give it the ID of #wishlist
Add a button to the page that asks the user to add an item to their wishlist
Create an additional handlebars template that has a single list item, since it will be going inside the #wishlist,
and displays a title and a remove button
Using the new handlebars template, add each clicked game to the wishlist
Set up the remove buttons to allow the user to remove each item from the wishlist
Check Yo Self: Besides seeing the store from part 1, you should see an add button on each product that, 
when clicked, adds that title as well as a remove button to your wishlist. Clicking each remove button 
should delete that specific item from the list.

Bonus

Handlebars Extras

Modify your product handlebars template to use the "if" directive by striking-through the old price and 
displaying the sale price if it exists
Modify your product handlebars template to make use of the "each" directive by showing the details list 
for each product

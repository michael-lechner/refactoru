refactoru-node8
===============

Handlebars: Mock Search Engine

Objective
Create a data driven UI using Handlebars

Skills
Creating an Express app
Understanding the relationship between client and server.
Creating Handebars templates
AJAX
jQuery
Resources
handlebarsjs.com
dummy data
Requirements
Part I

Setup an Express server
Define an Express route, "/search" in your Express app
Add the dummy data object listed above as a variable inside of your "/search" route
Create a form using Jade that contains a search input (like Google)
Add a div below it with the ID "results"
Create a Handlebars template for your "results" div
When a user enters a value into the search box and presses "Enter". Send the entered search term via AJAX to your "/search" endpoint
In your "/search" route take the search term that was sent to your server and find its corresponding description in the "data" object.
Use res.send to send the JSON back to the client.
When you recieve the response from the server, compile your Handlebars template Handlebars.compile, passing the data to it.
Take the resulting Handlebars string and append it to your results div using jQuery.
Bonus

Get really fancy with the search engine

Modify your code so that you are able to search for any text within the "dummy data" object.

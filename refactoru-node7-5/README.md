refactoru-node7.5
=================

Ajax Countries

Objective
Build an app that retrieves a list of all countries from the server using an Ajax request and renders them on the client. Add a search box that allows the user to search for a specific country.

Resources
countries.jsonsample data.
Requirements
Part I

Create an express app with a button that says "Load Countries". Clicking the button should do nothing at this step.
Create main.js file in /public/javascripts with console.log('TEST');. Add a script element to layout.jade which includes main.js. Confirm that the console.log is being printed when you load the page.
Note: We added our client-side Javascript to the public folder because that is the directory that is set up as our static file server. It will serve up the file 'as-is' when requested from the home page.

When the user clicks the button, make an Ajax request to /countries. The request should fail until we add an appropriate route on the backend. Check in the console to confirm that the Ajax request is failing.
Add a route to app.js which handles the /countries url. For testing purposes add a res.send('TEST'); to the body of the route handler. Confirm that the route is set up correctly by clicking the button and seeing that the Ajax request returns successfully. You should see a 200 success code in Dev Tools.
Copy countries.json into /models. In app.js, require your model file. In the /countries route, print the countries to the server-side console to confirm that the file is defined and required correctly.
In your /countries route handler, add res.send(countries);. On the client-side, where you make your Ajax request, modify the callback to print the response to the client-side console to confirm that the countries are being sent from the server to the client.
In your Ajax callback, loop through each country in the response and render a list item on the page.
Part II

Add a text box and a search button at the top of the page.
Add a click handler on the search button that makes an Ajax request to /search.
Add a /search route on the server-side. Confirm that the Ajax requests hits the correct endpoint using the same approach as step 4 in Part I.
In the /search route handler, print req.body to see if it contains the search query entered by the user. If not, make sure the text box has a name attribute.
Filter the countries array to only the names that match the user's search query, then send the matching countries back to the client.
On the client-side, where you make your Ajax request, modify the callback to print the response to the client-side console to confirm that only the filtered countries are being sent from the server to the client.
Render the filtered countries to the user interface using jQuery.
Bonus I

Add an icon next to each country that allows the user to toggle whether they have traveled to that country or not. When the icon is enabled, send an Ajax request to the server to add a hasTraveled flag to the correct country object.
Modify the code that renders the country items so that they check the hasTraveled property coming back from the server and renders the icon accordintly.
Refresh the page and test out the hasTraveled functionality. Because the countries array is stored in memory on the server, you should be able to refresh the page and maintain any changes that are made to the array (i.e. your Ajax request). (Restarting your server will reset the countries array back to the original.
Bonus II

Store, retrieve, and modify the countries using a MongoDB database.


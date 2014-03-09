refactoru-node2
===============

getting started with express

Part I: Express

Make sure "express" is installed globally on your system by running npm install -g express. You do not need to do this each time if express has already been installed!
Create a new folder in your projects directory
Navigate to that folder in Terminal
Run the "express" command to create a simple express app
Run the "npm install" command to install the express dependencies defined in "package.json"
Inside of the newly created app.js file, add a new route:
Underneath the app.get('/users', user.list); line add your new route
Use app.get, pass '/hi' as the first argument, and an inline anonymous function as argument two that takes in two parameters: request, and response
Inside the newly created callback, call res.send(...) to send a welcome message string
Run your server from terminal by running node app.js
Navigate to http://localhost:3000/hi
You should now see your welcome message printed to the screen!
Create 2 more unique routes in the same fashion and send unique messages to each url.
Restart your server and test your new routes!
Part II: Send and Receive

Create a basic HTML file in the root directory of your project.
Put the html boilerplate into the file and add a new form tag to the body
Put an input element into the form as well as a submit button
Set the action attribute on the form to "/formsubmit". This attribute tells the browser where to send the data from the form when it is submitted.
Set the method attribute on the form to "post". This tells the browser to send the data via "post" as opposed to "get".
Add a new route to your app.js that handles a "/form" url via 'get'. This should send your html file to the client using fs.readFile(...)
Add a new route to your app.js file that handles the "/formsubmit" path by using app.post(...)
When the user submits the form, it will be passed through this route
Instead of sending data back to the user, have the response utilize res.redirect(...) to redirect to the '/success' url.
Create an additional "get" route that will handle the '/success' path
Have the '/success' route send a success message to the client
Restart your node server and navigate to http://localhost:3000/form
You should see the form rendered to the page. Fill it out and submit it.
The browser should take you to the "success" url and show your success message!
Success! Using express helps to minimize the amount of code required to create a powerful web server! You've rendered messages and files and created numerous routes. Using the redirect function allowed you to send the client to a brand new url that contains a unique success message.

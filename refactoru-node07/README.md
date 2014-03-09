refactoru-node7
===============

Online Job Application

Objective
You are the CTO of Omega 3 Studios. You need to hire some badass web developers, and you decide to create an online job application.

Skills
Node.js
Express.js
MongoDB
jQuery
Jade
Resources
mongodb.org
Mongo Collection Commands
Mongoose
Requirements
Part I: Submitting the Form

Grab the starter code.
In the /applicant route handler console.log() the data req.body. Confirm that the information that was entered in the form and submitted to the server is shown in the console before moving on to the next step.
For testing purposes, send a response back to the client: res.send('Success!');.
When you see the Success message, now you can create something a little more user-friendly. Create a new route and view for the success message. In the /applicant route handler, redirect the user to the new route you created. Confirm the new functionality by submitting another form. Make sure you are correctly redirected to your new Success page.
Part II: MongoDB

Install Mongoose in your project npm install mongoose --save.
Include Mongoose in your app.js on the server var mongoose = require('mongoose');.
Call .connect() to connect to MongoDB. Give your DB a name and connect mongoose.connect('mongodb://localhost/mycompanyname');.
Start Mongodb by running sudo mongod in a new Terminal tab.
Based on the data received from the client in the "/applicant" endpoint, think about how you would structure the data in the database. Create a Mongoose model based on how the data should be structured. For example : var Cat = mongoose.model('Cat', { name: String });.
Remember that Mongoose will not create the database or the collections until you attempt to insert something into the database. 
You should see this after completing #2 in Part III
Part III: Storing the data

Now lets go back to the /applicant endpoint.
Store the recieved data from req.body in your "applicants" model that you previously created var kitty = new Cat({ name: 'Zildjian' }); kitty.save(). Use the example on the Mongoose homepage to guide you http://mongoosejs.com
Go into your Mongo Shell and see if the data was successfully stored after the form is submitted. db.applicants.find()
Run these commands in Mongo Shell to see your new DB and collection

> show dbs
> use applications
> show collections
You have successfuly submitted a form and stored the data in a database!
Part IV: Listing the applicants

Now in the /applicants route, lets pull out all of our applicants from your "applicants" collection Cat.find({}, ...)
Take that data and pass it to the "applicants" view using res.render('applicants', data)
In the applicants.jade file, write some jade to loop through the applicants you are passing and output the name of the applicant in a list.
Once you have written the jade logic to list out the applicants you should be able to hit http://localhost:3000/applicants and see a list of the submitted applications
Bonus I

Add a delete button to each of your applicant names in the applicants list /applicants.
When the button is clicked, send a request to the server to delete the item from your Mongo Collection.
Bonus II: Application renderer

Create a jade file that can render a job applicant.
Create a route that renders your new jade file and passes applicant data to it. This route should look like "/:userid". In Express this route will take anything that is passed to it and the :userid is accessed by using req.params.
In your list that displays your applicants. Make each name a link.
When you click on this link it should go to a route that looks something like "/5266ec1d3939f24149000001"
Success! You have successfully built a fully functional web app!


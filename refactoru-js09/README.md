refactoru-js9
=============

bug catcher

Objective
You are the lead developer at a large company building a brand new social media service. Tying together front and back end development, as well as managing a team of other developers, your job keeps you very busy. You are also in charge of a few interns who push their code through you before it gets added to the product. This means you have to debug their work before it can be pushed! You've received a few files and must identify and fix any bugs. You may not change the functionality, but must focus on fixing the bugs.

Skills
Javascript
Requirements
Catchin' Bugs

Login / Logout - file
Some helper functions for logging in and out, as well as printing out data about the current user. Should output:

Object {email: "john@doe.com", username: "John Doe", friends: [0,1,2,3]}
0, 1, 2, 3,
Not logged in
Send Message - file
A helper function for sending messages between two users. This should print out:

0 is sending 'Hey there!' to 1
0 is sending 'What's up?' to 2
2 is sending 'Nothing is up.' to 0
Friend List - file
This bit of code is meant to help set the sizing of the friends list dynamically. This should print out:

FriendWidth = 280
Friend Details - file
Given some mock functions for testing without a database, this intern was tasked with creating a function that gets user details.

This should print four objects that match:

{
  details: {name: "John Doe", uid: "0"},
  updates: [
    "Finally Home!",
    "Just had an entire chocolate cake. Regrets = 0.",
    "My dog is trying to eat the cat. Brb."
  ]
}
User Preferences - file
With user preferences coming from the database, we need the list to be dynamic. This functionality is supposed to support adding preferences via code. It also includes some test logging. It should print:

Data: private
Username: John Doe
Checking Username: {title: "Username", value: "John Doe"}

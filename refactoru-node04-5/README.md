refactoru-node4.5
=================

Contest App

Objective
Write a node application that models a video contest, including video submissions, voting, and declaring a winner.

Come up with your own contest theme, e.g. Best Snowboarding Trick, Best Crème Brûlée Tutorial Video, Best Lecture on Node, etc.

Model

Submission
Contest
View

Home
Submit an Entry
View Submissions
Winner
Controller

It is up to you to determine the correct routes and controllers based on the requirements below.

Requirements
Part I: Video Submissions

Create a page where the user can submit an entry for the contest. The page should consist of a form with the following fields:
Name
URL to Youtube video
Title
Description
Create a route to handle the form submission. Parse the form data using req.body (described here). Create a new Submission instance with the given data and push it onto an array of submissions which simulates a database.
Create a page to view current submissions. Embed each video on the page using the following Youtube embed code. You should generate the appropriate code dynamically from the given URL. For example, the video https://www.youtube.com/watch?v=v2ifWcnQs6M&list=PL5586336C26BDB324&index=2 can be embedded with the following code:
<iframe width="560" height="315" src="//www.youtube.com/embed/v2ifWcnQs6M?list=PL5586336C26BDB324" frameborder="0" allowfullscreen></iframe>
Stop accepting new submissions after 8 submissions have been submitted. Display a message on the submission page that the contest is full.
Part II: Voting

On the View Submissions page, display videos in competing pairs. Allow the user to vote on any video. The user should be able to click a button which makes a request to the server which routes to a handler that increments the vote for that video. Refresh the page the user is on to show the new number of votes.

For the purpose of this exercise, allow the user to vote as many times as they want. This will make testing easier.

Part III: Determining a Winner

Add a button that the user can click to determine the winner of the current round.

Every 2 videos will "face off" and the video with more votes is selected as the winner.
Losing videos are eliminated from the contest. The view submissions page should show which videos have been eliminated and only voting on videos that are still in the running.
When only a single video remains, the user should be sent to a separate page that declares the contest over and announces the winner. They should be able to click a button to restart the contest, which will clear the submissions and begin accepting entries again.

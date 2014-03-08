refactoru-js23
==============

Test Drive 101

Objective
Implement a pure (no side effects) splice function using test-driven development. (The unit tests have already been written for you.)

Background
In the Seatbelt exercise we wrote unit tests for a working function. Test-driven development reverses this: You write unit tests before your function is implemented. Then you can implement the function piece by piece until all the tests pass.

Resources
Unit Testing (Raine's Presentation)
Documentation for built-in (destructive) splice
Jasmine (docs)
How Do I Jasmine (up to "Make me my own matcher")
Requirements
Part I

Clone the exercise-starters repo, or do a git pull if you already have it.
Find the test-drive-101 starter code and copy it into a new project folder.
Open test-runner.html in your browser. Open the dev tools console. See the errors that say FAIL? Congratulations, you're already through the "red" phase of test-drive development!
Open spec.js in your editor. Implement the splice method so the accompanying tests all pass. You are not allowed to use the built-in splice method in your function; you are reproducing its functionality from scratch in a functional style.
Tip: Look over the included assert functions which serve as a barebones testing framework. Look over the unit tests at the end (where assert is called) to see the kinds of things that are being tested for. You will get to write your own unit tests soon!

Part II

Read the How Do I Jasmine tutorial, up to "Make me my own matcher."
Clone the student-sample-code repo, or do a git pull if you already have it.
Find the jasmine boilerplate and copy it into a new project folder.
Copy src.js from Part I, with your working implementation of splice, into the current project.
Modify SpecRunner.html to include src.js.
Open SpecRunner.html in your browser. You should see a single mock test that is failing.
In spec/my-spec.js, rewrite the unit tests from Part I using Jasmine. Write these in spec/my-spec.js which is already being included by SpecRunner.html. Make sure that the tests all pass, and that they cover all the cases originally covered in Part I.
Success! You should see 7 Jasmine tests passing upon completion.

refactoru-js24
==============

Test Drive 102

Objective
Go through a complete Test-Driven Development cycle, adding unit tests that fail, then writing code to make them pass, then write your own unit test that reveals the bug in a faulty join function.

Resources
Jasmine (docs)
How Do I Jasmine (up to "Make me my own matcher")
Unit Testing (Raine's Presentation)
Requirements
Part I

Clone or download the jasmine boilerplate from the student-sample-code repo. Save this into the local repo you will be submitting for this exercise.
Copy the following unit test into spec/my-spec.js. Go back and read How Do I Jasmine (up to "Make me my own matcher" if you don't understand this code:
describe('getDayName', function() {
 it('should return Sunday for 0', function() {
  expect(getDayName(0)).toBe('Sunday');
 });
 it('should return Monday for 1', function() {
  expect(getDayName(1)).toBe('Monday');
 });
 it('should return Tuesday for 2', function() {
  expect(getDayName(2)).toBe('Tuesday');
 });
 it('should return Wednesday for 3', function() {
  expect(getDayName(3)).toBe('Wednesday');
 });
 it('should return Thursday for 4', function() {
  expect(getDayName(4)).toBe('Thursday');
 });
 it('should return Friday for 5', function() {
  expect(getDayName(5)).toBe('Friday');
 });
 it('should return Saturday for 6', function() {
  expect(getDayName(6)).toBe('Saturday');
 });
})
Open SpecRunner.html in your browser to run the test suite. You should see all the tests fail initially.
Create a new Javascript file to contain the following source code. Modify SpecRunner.html to include the new Javascript file.
/** Given a day number from 0 to 6, return the full day of the week for that number. */
var getDayName = function(dayNumber) {
 var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 return dayNames[dayNumber];
};
Refresh SpecRunner.html. You should now see all the tests pass.
Congratulations! You have completed a cycle of test-driven development.
Write a unit test that fails.
Implement the code to make the test pass.
Part II

Clone or download the jasmine boilerplate from the student-sample-code repo.
Copy the following function into a new Javascript file. Modify SpecRunner.html to include the new Javascript file.
// Returns a string that concatenates each string from the array separated by 
// the given delimeter.
// e.g. join(['one', 'two', 'three'], ' and ') 
// returns: 'one and two and three'
var join = function(arr, delimeter) {
 var output = '';
 for(var i=0; i<arr.length; i++) {
  output += arr[i] + delimeter;
 }
 return output;
};
Open SpecRunner.html in your browser to run the test suite. You should see all the tests fail initially.
Edit spec/my-spec.js and write your own Jasmine-style unit test that verifies the functionality of the join function. Use describe, it, and expect as seen above.
Add as many tests as you need to adequately test the functionality of the join function. There is no easy way to tell whether you have written your tests correctly. You have to think through the logic and try to construct the minimum set of tests that sufficiently prove the correct behavior of the function.
Modify join to make your tests pass.
Bonus

Repeat Part II for the following faulty map and filter functions. Add Jasmine tests then fix the functions to pass the tests:

var map = function(arr, f) {
 var output = [];
 for(var i=0; i<arr.length; i++) {
  output.push(f(arr[i]));
  return output;
 }
};

var filter = function(arr, f) {
 var output = [];
 for(var i=0; i<arr.length; i++) {
  if(f(arr[i])) {
   output.push(i);
  }
  return output;
 }
};

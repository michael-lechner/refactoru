refactoru-js11-5
================

wakeup time

Render a clock using jQuery DOM creation ($('<div>...')) instead of writing HTML in your html file.

Warning: Static HTML and HTML templates are cleaner and easier to edit than jQuery DOM creation. 
Normally you would only use jQuery DOM creation for small bits of dynamic markup that 
have to be created on the fly. However, this exercise is good practice for honing your jQuery skills!

Requirements
Part I

Create a blank HTML document with only a container div in the body.
Include the latest version of jQuery.
Include your own js file.
When the document is ready, create DOM elements for each of the following components to approximate the clock pictured above:
Outer Shell (dark gray)
Inner Shell (black)
Left AM/PM & Auto Labels (white)
Clock Screen (dark red)
Clock AM/PM indicator (red)
Clock Text (red)
Bottom AM Label & Frequencies (white)
Bottom PM Label & Frequencies (white)
Create each component individually:
Good:

var outerShell = $('<div class="outer-shell"></div>');
var innerShell = $('<div class="inner-shell"></div>');
outerShell.append(innerShell);
Bad:

var html = $('<div class="outer-shell"><div class="inner-shell"></div></div>');
Why? While a single append might work for a large chunk of static HTML, it doesn't leave you with references to individual elements which you may need for attaching events or modifying other attributes. It is also difficult to modify if the string is constructed with multiple + operators. Both can be useful in different circumstances. Here we want you to get experience creating elements individually and then appending them correctly to the DOM.

Use append or other DOM manipulation methods to add the elements to the DOM. You will have to append elements to the correct element to get the desired HTML structure (i.e. not all elements will be appended directly to the container).
Style the elements appropriately to approximate the picture of the clock.
Bonus

Make the clock functional!


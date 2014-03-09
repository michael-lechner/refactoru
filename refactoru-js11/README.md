refactoru-js11
==============

hide a form

Objective
You are responsible for building a profile page for users on a social network. This profile page should give the user the ability to edit their information directly on the page, but we don't want to always show the form. Write an HTML page with a form which will edit the user's profile, but make the form initially hidden and add a 'Show Form' button which will toggle the visibility of the form.

Skills
DOM Manipulation
Event Handling
Requirements
Create all the HTML for your form and profile page. The form should appear on top and the user's profile should appear below. Include separate fields for the following:
name
bio
favorite books
favorite Javascript libraries
Add a submit handler to the form element. On submit, update the text of user's profile below. You will have to cancel the default browser behavior, otherwise the submit will refresh the page.
Change the CSS so that the form is hidden when the page loads.
Add a 'Show Form' button which, when clicked, makes the form visible for the user to edit. ('Toggling' css properties can be done by either with the .css method or the .addClass method. Which approach is better?)
When the form is hidden, the button should say 'Show Form'. When the form is shown, the button should say 'Hide Form' and perform the appropriate action.
Bonus

Add an 'auto-save' feature: Remove the submit button, and add keydown event handlers to the input elements to update the user's profile immediately when any value in the form changes.


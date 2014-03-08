refactoru-js15
==============

Infinite Agenda

Objective
Create an infinite-scroll agenda which uses delegated events to handle events on agenda items even as new ones are added.

Skills
DOM
delegated events
Resources
Events Order - Quirksmode
jQuery .on() - Direct and delegated events
Continuous Scrolling - ui-patterns
Infinite Scrolling: Let’s Get To The Bottom Of This - smashingmag
Infinite Scrolling Best Practices - uxmastery
Infinite Scrolling that Works
Requirements
Write a calendar app that displays the user’s appointments in an agenda format (that is, a linear list of days, not a calendar grid). Today should be at the top, tomorrow below, and so on.
The user can click on a day to add a new appointment.
The form will appear inline when the user clicks an add button and disappear again after the user submits.
The form should be empty again each time the user adds a new appointment.
The user should be able to hit enter to submit the form.
The user can click on an appointment to edit it. Convert the appointment into a form with the fields prefilled for the user to edit. Convert it back to non-editable text when they are done editing.
The page should load with one week shown, but as the user scrolls down, new days should be added dynamically.
All events for adding/removing appointments should be functional for newly added days without re-adding event handlers (delegation!).
Bonus I

Save the user's appointments to localStorage.

Bonus II

Create a calendar view.


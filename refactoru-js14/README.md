refactoru-js14
==============

gold rush
Background
You are an enterpresing individual in the recreational gold prospecting community and you've decided to build an app that allows you and your fellow weekend prospectors to identify locations where gold has been discovered. The app will display a large map and allow users to click on any point on the map to add a marker.

Skills
Event Handling
Using the event object
jQuery
Manipulating the DOM
Resources
Colorado Topo Map
Mouse Click Event Coordinates
Requirements
Part I

Create an HTML page that displays a large map that fits the entire page. (You may use the provided Colorado Topo Map or use your own.)
When the user clicks on the map, use jQuery to create a new DOM element and position it where they clicked. You can render a styled div or an image for the marker element.
You can access the mouse coordinates from the event object as indicated in Mouse Click Event Coordinates.
You can position the marker by setting it to position: absolute, its container to position: relative, and its left and top css properties to a calculated value based on the mouse coordinate.
Part II

When the user clicks on a marker, remove the marker element from the DOM.

Bonus I

Add functionality to allow notes to be saved with each marker.

When the adds a marker, prompt them to enter a note that will be saved with the marker. Show a styled div with a textarea as a popup for the user to enter a note.
When the user hovers over a marker, display the note in a read-only popup next to the marker.

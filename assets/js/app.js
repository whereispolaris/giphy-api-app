// PSEUDOCODE
// =============================
// When User Loads the page:
// - 10 buttons in a certain category (e.g. animals) will display on the page. 
// - When User Clicks on one of the button:
//      * An API call will be made to Giphy API with the value of the button (e.g. skunk)
//      * The response will generate 10 images STILL images to display on the page.
// - When User Clicks on one of the still images:
//      *  The image will animate.
//      * If the image is clicked again, it will stop animating.
// An input field will display to the page.
// - When user enters a string to the field:
//      * A button will generate and be added to the buttons (in an Array).
// Bonus:
//  - If page is refreshed, the added buttons will remain on the page.


// TO DO
// Buil Static Components first. 
// Set Up API Connection


// Create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.

// SETUP VARIABLES
//==============================================
var topics = [];

// FUNCTIONS
//==============================================

// renderButtons() - Checks items in array and creates buttons for each. 

// MAIN PROCESSES
//==============================================

// displayGifs() - Function that shows all the images on still mode to page
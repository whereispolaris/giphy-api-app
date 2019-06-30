// PSEUDOCODE
// =============================
// When User Loads the page:
// - 10 buttons in a certain category (e.g. animals) will display on the page. 
// - When User Clicks on one of the button:
//      * An API call will be made to Giphy API with the value of the button (e.g. skunk)
//      * The response will generate 10 images STILL images to display on the page along with the rating.
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
// Set Up API Connection.
// Generate loop that adds buttons from array to page.


// SETUP VARIABLES
//==============================================
var topics = ["yes", "no", "hello", "whatever", "bye"];
var queryURL = "https://api.giphy.com/v1/stickers/search?api_key=qhJIwssGhXgwPwJP5AYWCsZ5FixhUanJ&q=yes&limit=10&offset=0&rating=G&lang=en";
var apiKey = "qhJIwssGhXgwPwJP5AYWCsZ5FixhUanJ";
var numResults = 10;

// FUNCTIONS
//==============================================

// AJAX API 
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response.data[0].images.original.url);
});

// renderButtons() - Checks items in array and creates buttons for each. 



// MAIN PROCESSES
//==============================================

// displayGifs() - Function that shows all the images on still mode to page
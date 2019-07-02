"use strict";
// SETUP VARIABLES
//==============================================
var topics = ["yes", "no", "hello", "whatever", "bye"];
var apiKey = "qhJIwssGhXgwPwJP5AYWCsZ5FixhUanJ";
var queryURL = "https://api.giphy.com/v1/stickers/search?api_key=" + apiKey;
var numResults = 10;
var topicSelected;

// FUNCTIONS
//==============================================
// Display buttons on the page
function renderButtons() {
    $("#buttonDisplay").empty();
    topics.forEach(function (element) {
        var topicBtn = $("<button>");
        topicBtn.addClass("topic-button btn btn-dark");
        topicBtn.attr("data-topic", element);
        topicBtn.attr("type", "button");
        topicBtn.text(element);
        $("#buttonDisplay").append(topicBtn);
    });

}

//Function that shows all the images on still mode to page

// AJAX API 
function runQuery(queryURL) {

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#gifDisplay").empty();
        for (var i = 0; i < numResults; i++) {

            // Generates Bootstrap Card 
            var imageDiv = $("<div>");
            imageDiv.addClass("card");
            // Generates image
            var image = $("<img>");
            image.attr({
                class: "giphy card-img-top",
                src: response.data[i].images.original_still.url,
                // status = still/animate
                "data-status": "still",

                "data-still": response.data[i].images.original_still.url,
                "data-animate": response.data[i].images.original_still.url,

                // data-still = still image
                // data-animate = animated image
            });
            var imageBody = $("<div>");
            imageBody.addClass("card-body");
            var rating = $("<h5>");
            rating.addClass("card-title");
            rating.text("Rating: " + response.data[i].rating);
            imageBody.append(rating);
            imageDiv.append(image, imageBody);
            $("#gifDisplay").append(imageDiv);

        }
    });
}

// MAIN PROCESSES
//==============================================

// Event to Add more buttons to page
$("#add-button").on("click", function () {
    var value = $("#topic-value").val().trim();
    topics.push(value);
    renderButtons()
    return false;

});

// Event to display Gifs to the page
$(document).on("click", ".topic-button", function (event) {
    event.preventDefault();
    topicSelected = $(this).attr("data-topic");
    var newURL = queryURL + "&q=" + topicSelected
    newURL = newURL + "&limit" + numResults;
    runQuery(newURL);

});

renderButtons();

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
                    //==============
                    // Create Div that contains each gif and:
                    // - Add rating to image
                    // - Add Still/Animate URLs as data
                    // - Create contitions to animate/pause
// Add localStorage feature to the buttons.
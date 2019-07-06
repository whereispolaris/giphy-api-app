"use strict";
// SETUP VARIABLES
//==============================================
var topics = ["yes", "no", "wtf", "whatever", "lol"];
var apiKey = "qhJIwssGhXgwPwJP5AYWCsZ5FixhUanJ";
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey;
var numResults = 10; //Create option dropdown
var topicSelected;


// FUNCTIONS
//==============================================
// Display buttons on the page
function renderButtons() {
    $("#buttonDisplay").empty();
    // Loop that generates buttons and appends them to #buttonDisplay div
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
function runQuery(queryURL) {
    // AJAX API call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Clear out #gifDisplay div
        $("#gifDisplay").empty();
        for (var i = 0; i < numResults; i++) {
            // Generates Bootstrap Card 
            var imageDiv = $("<div>");
            imageDiv.addClass("card");
            // Generates image
            var image = $("<img>");
            image.attr({
                "class": "giphy card-img-top",
                "src": response.data[i].images.original_still.url,
                "data-state": "still",
                "data-still": response.data[i].images.original_still.url,
                "data-animate": response.data[i].images.original.url,
            });
            // Create card body
            var imageBody = $("<div>");
            imageBody.addClass("card-body");
            // Create rating element
            var rating = $("<h5>");
            rating.addClass("card-title");
            rating.text("Rating: " + response.data[i].rating);
            // Append rating to card body
            imageBody.append(rating);
            // Append image and card body to Bootstrap card
            imageDiv.append(image, imageBody);
            $("#gifDisplay").append(imageDiv);
        }
    });
}

// MAIN PROCESSES
//==============================================
// Get ite array to localStogare
// localStorage.setItem("topics", JSON.stringify(topics));


// Event to Add more buttons to page
$("#add-button").on("click", function () {
    var value = $("#topic-value").val().trim();
    // Add new value to topics array
    topics.push(value);
    console.log(topics);
    // localStorage.setItem("topics", JSON.stringify(topics));
    renderButtons();
    return false;

});

// Event to display Gifs to the page
$(document).on("click", ".topic-button", function (event) {
    event.preventDefault();
    topicSelected = $(this).attr("data-topic");
    // Creates new URL to append query strings. Adds topic selected.
    var newURL = queryURL + "&q=" + topicSelected;
    // Adds number of results to limit query
    newURL = newURL + "&limit=" + numResults;
    console.log(newURL);

    runQuery(newURL);
});

$(document).on("click", ".giphy", function (event) {
    event.preventDefault();
    var giphy = $(this);
    var status = giphy.attr("data-state");
    if (status === "still") {
        giphy.attr({
            src: giphy.data("animate"),
            "data-state": "animate"
        });
    }
    else {
        giphy.attr({
            src: giphy.data("still"),
            "data-state": "still"
        });
    }
});

renderButtons();

// Not working yet
// localStorage.setItem("topics", JSON.stringify(topics));


// TO DO
//==============
// Fix REPLAY bug (lines 97-104). - DONE
// Add localStorage feature to the buttons. - NOT WORKING YET (Lines 15, 71, 80 and 118)
// Create option dropdown for user to choose 1, 5, 10 gifs results
// Line 16 - Add object notation to attr() and remove extra code. 
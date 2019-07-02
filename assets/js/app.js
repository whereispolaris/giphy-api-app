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
                "data-state": "still",

                "data-still": response.data[i].images.original_still.url,
                "data-animate": response.data[i].images.original.url,
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

$(document).on("click", ".giphy", function (event) {
    event.preventDefault();
    var giphy = $(this);
    var status = giphy.data("state");
    if (status === "still") {
        giphy.attr({
            src: giphy.data("animate"),
            "data-state": "animate"
        });
    }
    else {
        // THIS IS NOT WORKING
        console.log("else");
        giphy.attr({
            src: giphy.data("still"),
            "data-state": "still"
        });
    }
});

renderButtons();




// TO DO
//==============
// Fix REPLAY bug (lines 97-104).
// Add localStorage feature to the buttons.
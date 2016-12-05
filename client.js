//In this challenge you will be creating an application that will create colored <div> tag each
//time the corresponding color is clicked. Also, as each color (button) is clicked, it should
//increment the corresponding label. HTML and CSS are provided, the focus here is jQuery.

var i = 1;

$(document).ready(function() {
    $(".color-button").on('click', function() {
        var buttonColor = $(this).attr('data-color');
        console.log('buttonColor:', buttonColor);
        if (buttonColor === "red") {
            $(".container").append("<div class='color-cube red'></div>");
        } else if (buttonColor === "yellow") {
            $(".container").append("<div class='color-cube yellow'></div>");
        } else if (buttonColor === "green") {
            $(".container").append("<div class='color-cube green'></div>");
        } else {
            $(".container").append("<div class='color-cube blue'></div>");
        }
    });


}); //end doc ready function

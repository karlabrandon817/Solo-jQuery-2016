//In this challenge you will be creating an application that will create colored <div> tag each
//time the corresponding color is clicked. Also, as each color (button) is clicked, it should
//increment the corresponding label. HTML and CSS are provided, the focus here is jQuery.

red = 0;
yellow = 0;
green = 0;
blue = 0;

$(document).ready(function() {
    $(".color-button").on('click', function() {
        var buttonColor = $(this).attr('data-color');
        console.log('buttonColor:', buttonColor);
        if (buttonColor === "red") {
            red++;
            $(".container").append("<div class='color-cube red'></div>");
            $("#red").html("Total red: " + red);
        } else if (buttonColor === "yellow") {
            yellow++;
            $(".container").append("<div class='color-cube yellow'></div>");
            $("#yellow").html("Total yellow: " + yellow);
        } else if (buttonColor === "green") {
            green++;
            $(".container").append("<div class='color-cube green'></div>");
            $("#green").html("Total green: " + green);
        } else {
            blue++;
            $(".container").append("<div class='color-cube blue'></div>");
            $("#blue").html("Total blue: " + blue);
        }
    });


}); //end doc ready function

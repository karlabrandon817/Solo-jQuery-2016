//In this challenge you will be creating an application that will create colored <div> tag each
//time the corresponding color is clicked. Also, as each color (button) is clicked, it should
//increment the corresponding label. HTML and CSS are provided, the focus here is jQuery.


$(document).ready(function() {
    $(".color-button").on('click', function() {
        var buttonColor = $(this).attr('data-color');
        console.log('buttonColor:', buttonColor);
    });
});

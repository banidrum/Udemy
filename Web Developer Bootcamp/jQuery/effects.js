//Fade out all the divs on click, and then removes the divs
$("button").on("click", function(){
    $(' div').fadeOut(1000, function(){ // Callback function
      $(this).remove();
    });
});

//Fade in the divs when button is clicked
$("button").on("click", function(){
    $(' div').fadeIn(1000, function(){ // Callback function
      // $(this).remove();
    });
});

//Fade toggle
$("button").on("click", function(){
    $('div').fadeToggle(500); // Callback function
});

//Slide down
$("button").on("click", function(){
    $('div').slideDown(); //
});

//Slide up
$("button").on("click", function(){
    $('div').slideUp(); //
});

//Slide toggle
$("button").on("click", function(){
    $('div').slideToggle(); //
});

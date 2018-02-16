$("h1").text();

$("ul").text();

$("h1").text("New Text");

$("ul").html();

$("ul").html("<li>I hacked your UL!</li>");

$('li').html("<a href='google.com'>Click Me</a>");

// Updates the image
$("img").attr("src", "Image URL");

//Changes input type
$("input").attr("type", "checkbox");

//Changes ONLY the first image
$("img:first-of-type").attr("src", "https://i.imgur.com/TUQvrsV.jpg");

//Changes the last image
$("img").last().attr("src", "https://i.imgur.com/TUQvrsV.jpg");

// Changes ALL the images
$("img").attr("src", "https://i.imgur.com/TUQvrsV.jpg");

//Gets the value of an input
$("input").val();

$("select").val();

//Adding a class
$('h1').addClass("correct");

//Removing a class
$('h1').removeClass("correct");

//Toggle a class
$('li').toggleClass("wrong");

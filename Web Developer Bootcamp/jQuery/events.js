//JS file created for taking notes of
// jQuery events

//Selecting all buttons and adding the .click event
$("button") .click(function(){
  alert("Button Clicked!");
});

//Changes the button background when clicked
$("button").click(function(){
	$(this).css("background", "pink");
});

//Keypress
$('input').keypress(function(){
  console.log("You pressed a key!");
});

//Triggering an event when user hits enter
$('input').keypress(function(event){
  if(event.which === 13){
    alert("YOU HIT ENTER!");
  }
});

//Changes the h1 color when clicked
$('h1').on("click", function(){
  $(this).css("color", "green");
});

//Logs keypressed everytime something is typed on the input
#('input').on("keypress", function(){
  console.log("Keypressed");
});

//Makes the font of the buttons bold when hovered
$("button").on("mouseenter", function(){
  $(this).css("font-weight", "bold");
});

//Turns the hover effect off
$("button").on("mouseleave", function(){
  $(this).css("font-weight", "normal");
});

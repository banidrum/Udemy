//Create secret number
var secretNumber = 4;

// ask user for a guess
var guess = Number(prompt("Guess a number"));

// check Guess

if(guess === secretNumber){
  alert("Right!");
}

// check if higher or lower

else if(guess > secretNumber) {
  alert("Too high!");
}

else {
  alert("Too low!");
}

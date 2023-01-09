var location1 = 3;
var location2 = 4;
var location3 = 5;

//Guess is undefined
var guess;
var hits = 0;
var guesses = 0;
var names;
var isSunk = false;

//loop setup
while (isSunk == false) {
  //guess assigned a value of prompt message
  guess = prompt("Ready, Aim, Fire (Enter number from 0 - 6)");
  //check if user enters number from 0 - 6
  if (guess < 0 || guess > 6) {
    //alert message
    alert("please enter a valid number");
    //otherwise add one to  box of guesses
  } else {
    guesses = guesses + 1;
    //check if user hits the three location- conditions OR
    if (guess == location1 || guess == location2 || guess == location3) {
      //alerts the user with a 'HIT message'
      alert("HIT😮");
      // then add one to box of HITS
      hits = hits + 1;
      //check if hits is 3- condition- double equals
      if (hits == 3) {
        // if condition is met isSunk becomes True
        isSunk = true;
        //alert user the battle ship was sunk.
        alert("You sank my battle ship😪");
      }
      //otherwise alert a MISS
    } else {
      alert("MISS😂");
    }
  }
} //execution gets poped off the code stack

//post game analysis with a statistic variable
var stats = `you took ${guesses} guesses to sink the battle ship which means your shooting accuracy is 3 / ${guesses}`;
alert(stats);

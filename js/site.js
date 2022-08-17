

var randomLoc = Math.floor(Math.random() * 5);

var l1 = randomLoc;
var l2 = l1 + 1;
var l3 = l2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {

    guess = prompt("Ready Cannons, Arm Torpedoes, Fire!   Pick a number between 0 and 6: ");

    if (guess < 0 || guess > 6) {
        alert ("Please choose a number between 0 and 6.");
    } else {
        guesses = guesses + 1;
        if (guess == l1 || guess == l2 || guess == l3) {
            hits = hits + 1;
            alert ("Hit!");

            if (hits == 3) {
                isSunk = true;
                alert ("You Sunk My Battelship!");
            } 
            } else {
            alert ("Miss");
        }
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " + 
            "which means your shooting accuracy was " + (3/guesses);
alert(stats);
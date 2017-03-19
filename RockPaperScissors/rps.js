var wrongChoice ="Invalid Input";
var userWins = "Winner Winner Chicken Dinner";
var computerWins = "LUUUHZZER!";
var roundCounter = 0;

var gameRound = function(){
    var userChoice = prompt("Choose Rock, Paper, or Scissors by typing 'R', 'P', or 'S'")

    var computerChoice = "R";
    var rng = Math.random();

    if(rng > 0.66) {
        computerChoice = "P";
    } else if (rng > 0.33) {
        computerChoice = "S";
    }

console.log(computerChoice)
console.log(userChoice)
    if(computerChoice !== userChoice){
        if(computerChoice === "R"){
            if (userChoice === "S") {
                alert(computerWins);
            } else {
                alert(userWins);
            }
        } else if (computerChoice === "P") {
            if( userChoice === "R") {
                alert(computerWins);
            } else {
                alert(userWins) ;
            }
        } else {
            if( userChoice === "P") {
                alert(computerWins);
            } else {
                alert(userWins);
            }
        }
    } else {
        alert('Tie!');
    }
};


while (roundCounter < 5) {
    gameRound();
    roundCounter++;
}

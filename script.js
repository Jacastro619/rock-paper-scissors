
var win = 0;
var lose = 0;
var tie = 0;

document.addEventListener('DOMContentLoaded', rockPaperScissorsGame())

function rockPaperScissorsGame() {
    var userResponse = prompt("Type r, p, s")
    
    
    var choiceArray = ["r", "p", "s"]
    var compResFromula = Math.floor(Math.random() * choiceArray.length)
    var compResponse = choiceArray[compResFromula]
    
    alert(`The computer chose ${compResponse}`)
    
    if(compResponse === userResponse) {
        alert("you tied!");
        tie++
    } else if (
        (userResponse === "r" && compResponse === "s") ||
        (userResponse === "s" && compResponse === "p") ||
        (userResponse === "p" && compResponse === "r")
    ) {
        alert("you win!");
        win++
    } else {
        alert("you lose!")
        lose++
    }

alert(`Wins: ${win} Loses: ${lose} Ties: ${tie}`)

var playAgain = confirm("Do you want to play again?")

if(playAgain) rockPaperScissorsGame()
}

//set varables to win/lose/tie to Zero

//Set Prompt to ask user to choose r-p-s

//Computer ramdom slect r-p-s - Create function for the automated responce

//eval user responce vs computer responce

/*if-else statment for win/lose/tie conditions
r>s s>p p>r Tie - Win formulas 
s<r p<s r<p - lose formulas*/

//log user wins to computer wins

//based on results incurment the varible by 1

//Display results with the alert

/*prompt user to play again
    if yes, begin again
    if no, display "thank you come back later"*/

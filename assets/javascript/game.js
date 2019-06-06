// make list of guessable words
var correctAnswers = ["daenerys", "littlefinger", "westeros", "winterfell", "stark", "lannister", "tyrell", "ghost"]
// randomly choose a word
var chosenWord = wordPicker();


function wordPicker (){
    var randomNum = Math.floor(Math.random() *correctAnswers.length);
    var newWord= correctAnswers[randomNum]
    console.log(newWord);
        return newWord;
    }
//empty arrays for underscores, the correct letters, and the incorrect letterse
var underscores = [];
var correctGuess = [];
var wrongGuess = [];
//counter variables for win count and remaining guesses
var winCounter = 0;
var guessCounter = 6;

//DOM manipulation
var underscoreDiv = document.getElementById("underscore");
var wrongGuessDiv = document.getElementsByClassName("wrongUnderscores");
var winCounterDiv = document.getElementsByClassName("wins");
var guessCounterDiv = document.getElementsByClassName("remaining");


// make length of underscores equal length of chosed word
function makeUnderscores() {
    underscores = [];
    for (var i = 0; i < chosenWord.length; i++) {
        underscores.push("_");
    }
    document.getElementById("underscore").textContent = underscores.join(" ");
}
document.addEventListener("load", makeUnderscores());
console.log(underscores);

//event for user's key press
document.onkeypress = function(event) {
    console.log(event.key);
        for (var i = 0; i < chosenWord.length; i++) {
        // push correct letter into correctGuess array     
            if (chosenWord[i] === event.key) {
            correctGuess.push(event.key);
            console.log(correctGuess);
            //replace underscores with key pressed
            underscores[i] = event.key; 
            underscoreDiv.innerHTML = underscores.join(" ");
            }
            //set the image to the correct picture upon winning
              if (underscores.join("") === "ghost") {
            document.getElementById("image").src= "assets/images/ghost.jpg";

            } if (underscores.join("") === "stark") {
            document.getElementById("image").src= "assets/images/stark.jpg";

            } if (underscores.join("") === "lannister") {
            document.getElementById("image").src= "assets/images/lannister.jpg";

            } if (underscores.join("") === "winterfell") {
            document.getElementById("image").src= "assets/images/winterfell.jpg";

            } if (underscores.join("") === "daenerys") {
            document.getElementById("image").src= "assets/images/daenerys.jpg";

            } if (underscores.join("") === "littlefinger") {
            document.getElementById("image").src= "assets/images/littlefinger.jpg";

            } if (underscores.join("") === "tyrell") {
            document.getElementById("image").src= "assets/images/tyrell.jpg";

            } if (underscores.join("") === "westeros") {
            document.getElementById("image").src= "assets/images/westeros.jpg";         
            }
        }
            //if all the underscores are exchanged for letters, alert and reset the underscores
            //and increase the win counter, and pick a new word
            if (underscores.indexOf("_") === -1) {
                alert("You win");  
                winCounter++;
                winCounterDiv[0].innerHTML = winCounter; 
                correctGuess = [];
                wrongGuess = [];
                chosenWord = wordPicker();
                makeUnderscores();
            } else if (chosenWord.indexOf(event.key) < 0){
                wrongGuess.push(event.key);
                wrongGuessDiv[0].textContent = wrongGuess.join();
                guessCounter--;
                guessCounterDiv[0].innerHTML = guessCounter;
                console.log(guessCounter);
            };
            //if six incorrect guesses are made, the game is over
            if (wrongGuess.length === 6){
            alert("GAME OVER");
            }
        
}
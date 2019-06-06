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
// acquire user guess
console.log(underscores);
document.onkeypress = function(event) {
    console.log(event.key);
    // check user guess against correct answer
    for (var i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === event.key) {
    // push correct letter into correctGuess array 
        correctGuess.push(event.key);
        console.log(correctGuess);
    // replace underscores in [underscores] with letters
        underscores[i] = event.key; 
        underscoreDiv.innerHTML = underscores.join(" ");
        } 
        if (underscores.indexOf("_") === -1) {
            alert("You win");  
            winCounter++;
            winCounterDiv[0].innerHTML = winCounter; 
            correctGuess = [];
            console.log(winCounter);
            console.log("string" + underscores);
            chosenWord = wordPicker();
            makeUnderscores();

        }
        else if (chosenWord.indexOf(event.key) < 0){
        wrongGuess.push(event.key);
        console.log(wrongGuess);
        wrongGuessDiv[0].innerHTML = wrongGuess.join(" ");
        //   if (wrongGuess)
        }
    // push wrong letter to wrongGuess array 
   

    
    // alert if all the letters are guessed correctly
   
    };  
    }        
    // alert if six wrong letters are guessed
    if (wrongGuess.length === 6){
        alert("GAME OVER");
    }
    

    //DOM manipulation to change image when the right word is guessed
    if (underscores.join("") === "ghost") {
    document.getElementById("image").src= "assets/images/ghost.jpg";
    } else if (underscores.join("") === "stark") {
    document.getElementById("image").src= "assets/images/stark.jpg";
    }

wordPicker();
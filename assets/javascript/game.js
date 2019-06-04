// make list of guessable words
var correctAnswers = ["daenerys", "littlefinger", "westeros", "winterfell", "stark", "lannister", "tyrell", "ghost"]
// randomly choose a word
var randomNum = Math.floor(Math.random() *correctAnswers.length);
var chosenWord = correctAnswers[randomNum];
var underscores = [];
var correctGuess = [];
var wrongGuess = [];

//DOM manipulation
var underscoreDiv = document.getElementsByClassName("underscores");
var wrongGuessDiv = document.getElementsByClassName("wrongGuess");

console.log(chosenWord);
// make length of underscores equal length of chosed word
function makeUnderscores() {
    for (var i = 0; i < chosenWord.length; i++) {
        underscores.push("_");
    }
    return underscores;
}
// acquire user guess
console.log(makeUnderscores());

document.onkeypress = function(event) {
    console.log(event.key);
    // check user guess against correct answer
    if (chosenWord.indexOf(event.key) > -1){
    // push correct letter into correctGuess array
        correctGuess.push(event.key);
        console.log(correctGuess);
    // replace underscores in [underscores] with letters
        underscores[chosenWord.indexOf(event.key)] = event.key;
        underscoreDiv[0].innerHTML = underscores.join(" ");
    // push wrong letter to wrongGuess array
    } else if (chosenWord.indexOf !== event.key){
        wrongGuess.push(event.key)
        console.log(wrongGuess);
        wrongGuessDiv[0].innerHTML = underscores.join(" ");
    };
    // alert if all the letters are guessed correctly
    if (underscores.join("") === chosenWord){
        alert("You win");
    };
};

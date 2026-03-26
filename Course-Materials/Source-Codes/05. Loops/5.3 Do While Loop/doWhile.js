let correctPassword = "12345";
let userInput;
do {
    userInput = prompt("Give your correct password.");
} while( userInput != correctPassword );
console.log("login successful.");
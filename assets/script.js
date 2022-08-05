// Assignment Code
var generateBtn = document.querySelector("#generate");
//varible to hold numerical values
var numberCharacters = "1234567890";
//variable to hold upper case letters
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//varible to hold lower case letters
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
//variable to hold special characters
var specialCharacters = " ~`!@#$%^&*()_-+={[}]|:;<,>.?/";
//variable to hold generated password
var createdPassword = "";

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function createPassword() {
  //request password length and validate it falls between the 8 and 128 character requirement, if it validates it moves on to the next step in the if statement, if it fails it returns and alert asking the user to follow instructions.
  //variable to hold user selected characters
  var globalCharacters = "";
  var passwordLength = prompt("How long would you like your password to be?(Enter a whole number between 8 and 128.")
  if (passwordLength <8 || passwordLength > 128|| passwordLength === NaN){
    alert("Please follow instructions.");
    createPassword();
  } else {
    var lowercaseP = window.confirm("Would you like lowercase letters in your password?\n(hit 'ok' for yes, hit 'cancel' for no.");
    var uppercaseP = window.confirm("Would you like uppercase letters in your password?\n(hit 'ok' for yes, hit 'cancel' for no.");
    var numericP = window.confirm("Would you like numbers in your password?\n(hit 'ok' for yes, hit 'cancel' for no.");
    var specialP = window.confirm("Would you like special characters in your password?\n(hit 'ok' for yes, hit 'cancel' for no.");

    if (lowercaseP === true) {
      globalCharacters = globalCharacters.concat(lowerCharacters);
    }
    if (uppercaseP === true) {
      globalCharacters = globalCharacters.concat(upperCharacters);
    }
    if (numericP === true) {
      globalCharacters = globalCharacters.concat(numberCharacters);
    }
    if (specialP === true) {
      globalCharacters = globalCharacters.concat(specialCharacters);
    }
    if (!lowercaseP&&!uppercaseP&&!numericP&&!specialP) {
      alert("you failed at following simple instructions.")
      return"";
    }
    for (var i = 0; i < passwordLength; i++) {
      let currentCharacter = Math.floor(Math.random()* globalCharacters.length)
      createdPassword += globalCharacters[currentCharacter]
      
    }
    return createdPassword;
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


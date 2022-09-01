// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Prompts the user for the password criteria
  var userInput = window.prompt("How many characters do you want your password to be?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Please enter a number!")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Your password must be between 8 and 128 characters!")
    return
  }

  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")
  var userWantsNumeric = window.confirm("Would you like to include numbers in your password?")
  var userWantsSpecialCharacters = window.confirm("Would you like to include special characters in your password?")

// 1. Prompt the user for the password criteria
//    a. Password length 8 < 128
//    b. lowercase, uppercase, numbers, special characters
// 2. Validate the input
// 3. Generate password based on criteria

// 4. Display password to the page.
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
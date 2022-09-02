var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomCharacter(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

  while (true) {

    var userInput = window.prompt("How many characters do you want your password to be?")

    if (userInput === null) {
      return
    }

    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
      window.alert("Please enter a number!")
    } else if (passwordLength < 8 || passwordLength > 128){
      window.alert("Invalid password length. The password length should be between 8 and 128 characters.")
    } else {
      break
    }

  }

  var userWantsNumeric = window.confirm("Would you like to include numbers in your password?")
  var userWantsSpecialCharacters = window.confirm("Would you like to include special characters in your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")

  var numeric = [0,1,2,3,4,5,6,7,8,9]
  var specialCharacters = ["!", "”", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercase = []

  var characterType = []

  for (var i = 0; i <lowercase.length; i++) {
     uppercase[i] = lowercase[i].toUpperCase()
  } 

  if (userWantsLowercase === true) {
    characterType.push(lowercase)
  }

  if (userWantsUppercase === true) {
    characterType.push(uppercase)
  }

  if (userWantsNumeric === true) {
    characterType.push(numeric)
  }

  if (userWantsSpecialCharacters === true) {
    characterType.push(specialCharacters)
  }

  if (characterType.length === 0) {
    characterType.push(specialCharacters)
  }
  
  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomCharacter(characterType)
    var randomChar = getRandomCharacter(randomList)
    generatedPassword += randomChar
  } 

  return generatedPassword

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }

}

generateBtn.addEventListener("click", writePassword);
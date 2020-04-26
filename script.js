// Assignment Code
var generateBtn = document.querySelector("#generate");
var wantLength
var wantLower
var wantUpper
var wantNumbers
var wantSpecial

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

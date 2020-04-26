// Assignment Code
var generateBtn = document.querySelector("#generate");
var wantLength = prompt("Please enter a number for the length you want your password to be.");
var wantLower = confirm("Do you want to include lower cases in your password?");
var wantUpper = confirm("Do you want to include upper cases in your password?");
var wantNumbers = confirm("Do you want to include numbers in your password?");
var wantSpecial = confirm("Do you want to include special characters in your password?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log("Please enter a number for the length you want your password to be = " + wantLength);
console.log("Do you want to include lower cases in your password? = " + wantLower);
console.log("Do you want to include upper cases in your password? = "+ wantUpper);
console.log("Do you want to include numbers in your password? = "+ wantNumbers);
console.log("Do you want to include special characters in your password? = "+ wantSpecial);
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

/* 2*2*2*2 = 16 if and else (somehow include length), convert using switch */

/* <script>
var day;
switch (xxxxx) {
  case 1:
    user selects = YYYY;
    break;
  case 2:
    user selects = YYYN;
    break;
  case 3:
    user selects = YYNY;
    break;
  case 4:
    user selects = YNYY;
    break;
  case 5:
    user selects = YNNY;
    break;
  case 6:
    user selects = YNYN;
    break;
  case 7:
    user selects = YNNN;
    break;
  case 8:
    user selects = YYNN;
    break;
  default:
    text = "Please select again";
} */
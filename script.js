// Assignment Code
var generateBtn = document.querySelector("#generate");
var wantLength = prompt("Please enter a number between 8-128, this will be the length of your password.");
var wantLower = confirm("Do you want to include lower cases in your password?");
var wantUpper = confirm("Do you want to include upper cases in your password?");
var wantNumbers = confirm("Do you want to include numbers in your password?");
var wantSpecial = confirm("Do you want to include special characters in your password?");

// logs to confirm user selections 
console.log("Please enter a number for the length you want your password to be = " + wantLength);
console.log("Do you want to include lower cases in your password? = " + wantLower);
console.log("Do you want to include upper cases in your password? = "+ wantUpper);
console.log("Do you want to include numbers in your password? = "+ wantNumbers);
console.log("Do you want to include special characters in your password? = "+ wantSpecial);
console.log(typeof wantLength) // string
console.log(typeof Lower); // boolean
console.log(typeof Upper); // boolean
console.log(typeof Numbers); // boolean
console.log(typeof Special); // boolean

// Assignment of character code, loop that runs towards bottom
const lowerCharCode = arrayFromStartToEnd(65,90);
const upperCharCode = arrayFromStartToEnd(97,122);
const numbersCharCode = arrayFromStartToEnd(48,57);
const specialCharCode = arrayFromStartToEnd(34,47);

/* const randomFunction = {
  lower: lowerCharCode,
  upper: upperCharCode,
  number: numbersCharCode,
  symbol: specialCharCode
}; */

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  
  

function arrayFromStartToEnd(start, end) {
  const array = [] // array starts as blank
  for (let i = start; i <= end; i++ ) {
    array.push(i) // push inserts into the current array list
  }
  return array
}

/* 2*2*2*2 = 16 combinations of if and else (somehow include length), reduce using switch */

/* var day;
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
} this cant be the correct path, this was only half of outcomes*/
// Assignment Code
var generateBtn = document.querySelector("#generate");
var wantLength = prompt("Please enter a number between 8-128, this will be the length of your password.");
var wantLower = confirm("Do you want to include lower cases in your password?");
var wantUpper = confirm("Do you want to include upper cases in your password?");
var wantNumbers = confirm("Do you want to include numbers in your password?");
var wantSpecial = confirm("Do you want to include special characters in your password?");
var writePassword

// logs to confirm user selections 
console.log("Please enter a number for the length you want your password to be = " + wantLength);
console.log("Do you want to include lower cases in your password? = " + wantLower);
console.log("Do you want to include upper cases in your password? = "+ wantUpper);
console.log("Do you want to include numbers in your password? = "+ wantNumbers);
console.log("Do you want to include special characters in your password? = "+ wantSpecial);
console.log(typeof wantLength); // string
console.log(typeof wantLower); // boolean
console.log(typeof wantUpper); // boolean
console.log(typeof wantNumbers); // boolean
console.log(typeof wantSpecial); // boolean

// Assignment of character code, loop that runs towards bottom
const lowerCharCodes = arrayFromStartToStop(65,90);
const upperCharCodes = arrayFromStartToStop(97,122);
const numbersCharCodes = arrayFromStartToStop(48,57);
const specialCharCodes = arrayFromStartToStop(34,47);

/* const randomFunction = {
  lower: lowerCharCode,
  upper: upperCharCode,
  number: numbersCharCode,
  symbol: specialCharCode
}; */

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword(wantLength, lowerCharCodes, upperCharCodes, numbersCharCodes, specialCharCodes));

// Write password to the #password input
function writePassword(wantLength, wantLower, wantUpper, wantNumbers, wantSpecial) {
  let generatePassword = []
  let charCodes = lowerCharCodes
  //var password = generatePassword;
  //passwordText.value = password;
  //generatePassword.value = document.querySelector("#password");

  if(wantLower) charCodes = charCodes.concat(lowerCharCodes);
  if(wantUpper) charCodes = charCodes.concat(upperCharCodes);
  if(wantNumbers) charCodes = charCodes.concat(numbersCharCodes);
  if(wantSpecial) charCodes = charCodes.concat(specialCharCodes);

  for (let i = 0; i < wantLength; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    generatePassword.push(String.fromCharCode(characterCode))
  }
  console.log(generatePassword);
  let result = generatePassword.join("")
  console.log(wantLength);
  document.getElementById(password).innerHTML = result //piecing together on blank

  // console.log(lowerCharCode);
  // console.log(upperCharCode);
  // console.log(numbersCharCode);
  // console.log(specialCharCode);
}

function arrayFromStartToStop(start, stop) {
  const array = [] // array starts as blank
  for (let i = start; i <= stop; i++ ) {
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
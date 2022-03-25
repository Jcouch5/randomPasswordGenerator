// Assignment Code
var generateBtn = document.querySelector("#generate");
// created array variables for each combination of Character types
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',,']','{','}',';',':','|','<','>','?'];
var lowerUpper = lowerCase.concat(upperCase);
var lowerUpperNum = lowerUpper.concat(number);
var all = lowerUpperNum.concat(specialChar);
var lowerNum = lowerCase.concat(number);
var lowerSpecial = lowerCase.concat(specialChar);
var lowerUpperSpecial = lowerUpper.concat(specialChar);
var upperNum = upperCase.concat(number);
var upperSpecial = upperCase.concat(specialChar);
var upperNumSpecial = upperNum.concat(specialChar);
var numberSpecial = number.concat(specialChar);

// Function that generators a password based on users responses
function generatePassword() {
  // prompts user for number of characters in the password
  chars = prompt('How many Characters would you like? 8-128', 'Number between 8 and 128');
  // if user inputs a number higher than 128 an alert will come and they will be prompted again
  if(chars > 128) {
    alert('Please enter a number lower than 128');
    chars = prompt('How many Characters would you like? 8-128', 'Number between 8 and 128');
  } 
    // if user inputs a number lower than 8 an alert will come and they will be prompted again
  else if (chars < 8) {
    alert('Please enter a number higher than 8');
    chars = prompt('How many Characters would you like? 8-128', 'Number between 8 and 128');
  }
  // prompts user for whether or not they want lower case letters in the password
  lower = confirm('Would you like Lower case letters?');
  // // prompts user for whether or not they want upper case letters in the password
  upper = confirm('Would you like Upper case letters?', "Upper Case A-Z");
  // prompts user for whether or not they want numbers in the password
  num = confirm('Would you like Numbers?', "Number 0-9");
  // prompts user for whether or not they want special characters in the password
  specialChar = confirm('Would you like Special Characters?');
  // checks to make sure user selected at least character type
  // notifies the user if they made a mistake then prompts again
  if(!lower && !upper && !num && !specialChar) {
    alert('You must pick atleast one type of character');
    lower = confirm('Would you like Lower case letters?');
    upper = confirm('Would you like Upper case letters?', "Upper Case A-Z");
    num = confirm('Would you like Numbers?', "Number 0-9");
    specialChar = confirm('Would you like Special Characters?');
  }
  var password = "";
  // iterates over the different combination available for the password to create a password
  for (i=0; i <= chars; i++) {
    if(lower && upper && num && specialChar){
      randomNum = Math.floor(Math.random() * all.length);
      password += all[randomNum]
    } else if (lower && upper && num && !specialChar) {
      randomNum = Math.floor(Math.random() * lowerUpperNum.length);
      password += lowerUpperNum[randomNum];
    } else if (lower && !upper && num && specialChar) {
      randomNum = Math.floor(Math.random() * lowerNumSpecial.length);
      password += lowerNumSpecial[randomNum];
    } else if (!lower && upper && num && specialChar) {
      randomNum = Math.floor(Math.random() * upperNumSpecial.length);
      password += upperNumSpecial[randomNum];
    }  else if (lower && upper && !num && !specialChar){
      randomNum = Math.floor(Math.random() * lowerUpper.length);
      password += lowerUpper[randomNum];
    } else if (lower && !upper && num && !specialChar) {
      randomNum = Math.floor(Math.random() * lowerNum.length);
      password += lowerNum[randomNum];
    } else if (lower && !upper && !num && specialChar) {
      randomNum = Math.floor(Math.random() * lowerSpecial.length);
      password += lower[randomNum];
    } else if (!lower && upper && num && !specialChar) {
      randomNum = Math.floor(Math.random() * upperNum.length);
      password += upperNum[randomNum];
    } else if (!lower && upper && !num && specialChar) {
      randomNum = Math.floor(Math.random() * upperSpecial.length);
      password += upperSpecial[randomNum];
    } else if (!lower && !upper && num && specialChar) {
      randomNum = Math.floor(Math.random() * numberSpecial.length);
      password += numberSpecial[randomNum];
    } else if (lower && !upper && !num && !specialChar) {
      randomNum = Math.floor(Math.random() * lowerCase.length);
      password += lowerCase[randomNum];
    } else if (!lower && upper && !num && !specialChar) {
      randomNum = Math.floor(Math.random() * upperCase.length);
      password += upperCase[randomNum];
    } else if (!lower && !upper && num && !specialChar) {
      randomNum = Math.floor(Math.random() * number.length);
      password += number[randomNum];
    } else if (!lower && !upper && !num && specialChar) {
      randomNum = Math.floor(Math.random() * specialChar.length);
      password += specialChar[randomNum];
    }
  }
  // returns the password that was created
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
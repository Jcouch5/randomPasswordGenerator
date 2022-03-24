// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',,']','{','}',';',':','|','<','>','?'];

function generatePassword() {
  chars = prompt('How many Characters would you like? 8-128', 'Number between 8 and 128');
  if(chars > 128) {
    alert('Please enter a number lower than 128');
    chars = prompt('How many Characters would you like? 8-128', 'Number between 8 and 128');
  } else if (chars < 8) {
    alert('Please enter a number higher than 8');
    chars = prompt('How many Characters would you like? 8-128', 'Number between 8 and 128');
  }
  lower = confirm('Would you like Lower case letters?');
  upper = confirm('Would you like Upper case letters?', "Upper Case A-Z");
  num = confirm('Would you like Numbers?', "Number 0-9");
  specialChar = confirm('Would you like Special Characters?');
  if(!lower && !upper && !num && !specialChar) {
    alert('You must pick atleast one type of character');
    lower = confirm('Would you like Lower case letters?');
    upper = confirm('Would you like Upper case letters?', "Upper Case A-Z");
    num = confirm('Would you like Numbers?', "Number 0-9");
    specialChar = confirm('Would you like Special Characters?');
  }
  for (i=0; i < chars; i++) {

  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

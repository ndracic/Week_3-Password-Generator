// Assignment Code
var generateBtn = document.querySelector("#generate");


var lower = ["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upper = ["A",'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var special = ["!", '#', '$', '~', '%', '&', '&', '*', '(', ')', '+', '-', '.',',', '/', ':', ';', '@','_', '^' ]
var numbers = ["1","2","3","4","5","6","7","8","9"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
var finalpassword = [] 
var characterchoices =[]
var counter = 0

// .prompt brings up a window asking the user to input text for data
var lengthq = window.prompt("How many Characters would you like?")

if (lengthq>128||lengthq<8) {
return alert ("Password must be between 8 and 128 characters");
}

// .confirm brings up pop window asking a boolean to the question
var upperq = window.confirm("Would you like Upper case")
var lowerq = window.confirm("Lower case?")
var specialq = window.confirm("special?")
var numbersq = window.confirm("number?")

if (upperq === true){
  var random = Math.floor(Math.random() * upper.length);
  finalpassword.push(upper[random]) 
  counter++
characterchoices = characterchoices.concat(upper)
}

if (lowerq === true){
  var random = Math.floor(Math.random() * lower.length);
  finalpassword.push(lower[random])
counter++
characterchoices = characterchoices.concat(lower)
}

if (specialq === true){
  var random = Math.floor(Math.random() * special.length);
  finalpassword.push(special[random])
counter++
characterchoices = characterchoices.concat(special)
}

if (numbersq === true){
  var random = Math.floor(Math.random() * numbers.length);
  finalpassword.push(numbers[random])
counter++
characterchoices = characterchoices.concat(numbers)
}

console.log(characterchoices)


for (var i = 0; i < lengthq-counter; i++){
  var random = Math.floor(Math.random() * characterchoices.length);
  finalpassword.push(characterchoices[random])
}
console.log(finalpassword)

  return finalpassword.join("")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

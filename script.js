// Assignment Code
var generateBtn = document.querySelector("#generate");

var charactersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charactersLowercase = "abcdefghijklmnopqrstuvwxyz";
var characterNumbers = "0123456789";
var characterSpecial = "!@#$%^&*()";
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

// Write password to the #password input

function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}
function generatePassword() {
  var characters = "";
  passwordLength = prompt("Enter password legnth (8-128 characters");
  if (passwordLength <8 || passwordLength > 128) {
    alert("Invalid length");
    return;
  }

  isUppercase = confirm("Click OK to include uppercase characters");

  isLowercase = confirm("Click OK to include lowercase characters");

  isNumber = confirm("Click OK to include numbers");

  isSpecial = confirm("Click OK to include special characters");

  if (!isUppercase && !isLowercase && !isNumber && !isSpecial) {
    alert("You must select at least one of the character options")
    return;
  }

  if (isUppercase) {
    characters += charactersUppercase
  }

  if (isLowercase) {
    characters += charactersLowercase
  }

  if (isNumber) {
    characters += charactersLowercase
  }

  if (isSpecial) {
    characters += characterSpecial
  }

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * characters.length);
    password += characters[index]
  }
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

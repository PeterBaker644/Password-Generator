// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
    var passwordFeatures;
   
    alert("Please select from the following criteria to generate your password:");
    
    do {
        passwordFeatures.length = prompt("Provide a password length between 8 and 128.");
        if (!passwordFeatures.length) {
            alert ("Using default length.");
            passwordFeatures.length = 12;
        }
        else if (isNaN(passwordFeatures.length)) {
            alert(`Sorry, ${passwordFeatures.length} is not a number.`);
        } 
        else if (passwordFeatures.length < 8) {
            alert("Password must be at least 8 characters long.");
        }
        else if (passwordFeatures.length > 128) {
            alert("Password cannot exceed 128 characters.");
        }
    } while (passwordFeatures.length < 8 || passwordFeatures.length > 128 || isNaN(passwordFeatures.length));

    passwordFeatures.special = confirm("Click OK to confirm including special characters");
    passwordFeatures.numeric = confirm("Click OK to confirm including numeric characters");
    passwordFeatures.lowercase =  confirm("Click OK to confirm including lowercase characters");
    passwordFeatures.uppercase = confirm("Click OK to confirm including uppercase characters");

    if (!Object.values(passwordFeatures).includes(true)) {
        alert("No characters chosen, using default settings");
        passwordFeatures.numeric, passwordFeatures.lowercase = true;
    } else {
        alert("You have chosen valid entries")
    }

    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    // WHEN the password is generated
    // THEN the password is either displayed in an alert or written to the page

    // Figure out what to do if no options are selected.

}
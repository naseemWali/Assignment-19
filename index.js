// STRINGS METHODS  QUIZ QUESTIONS


// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var userinput1=prompt('Enter you first anme');
// userinput1=userinput1.toLowerCase();
// var userinput2=prompt('Enter your lastname');
// userinput2=userinput2.toLowerCase()

// var Fullname=userinput1 + " " +  userinput2;

//     alert('your full name is ' +  " " + Fullname);

   // my method

// var userinput1=prompt('Enter you first anme');
// userinput1=userinput1.toLowerCase();
// var userinput2=prompt('Enter your lastname');
// userinput2=userinput2.toLowerCase()

// var Fullname=userinput1 + userinput2;

// if (userinput1+userinput2==Fullname) {
//     alert('your full name is ' + ' ' + Fullname);
//    }
  

// Q 2. Write a programme  to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser?
//var userinput=prompt('enter your favourite mobile phone model');
//  document.write('My favourite phone is : ' +  userinput + '<br>' + ' Length is : '  +   userinput.length);


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
    

// var string='pakistan';
// var d=string.indexOf('n');
// document.write('String : '+  string + '<br> ' + 'index of "n" : '  + d);



// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.


// var e='hello world';
// f=e.lastIndexOf('l');
// document.write('string : ' + e + '<br>' +  ' last  index of l : ' + f);


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var s='pakistani'; 
// let r=s.charAt(3);
// document.write('string : pakistan' + '<br>' + 'character at index 3 : ' + r)


// Q6 already done with both methods in q1


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var z='Hyderabad';
// for (let index = 0; index < z.length; index++) {
//     if (z.slice(index,index+5)==='Hyder') {
//       var h=  "Islam"+ z.slice(index+5)
//       document.write('city : ' + z + ' <br> ' + 'After replacement: ' + h)
      
//     }
    
// }


// by using replace method
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
//  var message ='Ali and Sami are best friends. They play cricket and football together.';

// var t=message.replace(/and/g,'&');
// document.write(t)


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var h = '472';
// var d = Number(h);

// document.write('Value: ' + h + '<br>' + 'Type: ' + (typeof h) + '<br>');
// document.write('Value: ' + d + '<br>' + 'Type: ' + (typeof d));


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var a=prompt('Enter you favourite fruit');
// var x=a.toUpperCase();
// document.write('user input: ' + a + '<br>' + 'uppercase: ' +  x);


// 11. Write a program that takes user input. Convert and
// show the input in title case.

// Take user input
// var input = prompt("Enter a string:");

// Convert to title case
// function toTitleCase(str) {
//     return str
//         .toLowerCase()
//         .split(' ')
//         .map(function(word) {
//             return word.charAt(0).toUpperCase() + word.slice(1);
//         })
//         .join(' ');
// }

// // Display the result
// var titleCase = toTitleCase(input);
// document.write("Title Case: " + titleCase);


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num=35.3633;
// var string=num.toString().replace('.','')
// document.write('number:' + num + '<br> ' + 'result: ' + string);


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// function isValidUsername(username) {
//    // Check for special symbols: @, ., ,, !
//    var specialSymbols = ['@', '.', ',', '!'];

//    // Loop through each character of the username
//    for (var i = 0; i < specialSymbols.length; i++) {
//        if (username.includes(specialSymbols[i])) {
//            return false; // Invalid if any special symbol is found
//        }
//    }
//    return true; // Valid if no special symbols are found
// }

// var username = prompt("Enter your username:");

// while (!isValidUsername(username)) {
//    alert("Invalid username! Special characters like @ . , ! are not allowed.");
//    username = prompt("Please enter a valid username:");
// }

// alert("Username accepted: " + username);


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// Array of items
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Take user input
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");
// var item = userInput.toLowerCase();

// var found = false;

// // Loop through the array to check if the item is available
// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === item) {
//         found = true;
//         break;
//     }
// }

// // Show the result
// if (found) {
//     alert(userInput + " is available in our bakery.");
// } else {
//     alert("We are sorry, " + userInput + " is not available in our bakery.");
// }



// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



// function isValidPassword(password) {
//    // Check if password is at least 6 characters long
//    if (password.length < 6) {
//        alert("Password must be at least 6 characters long.");
//        return false;
//    }

//    // Check if the first character is a number
//    if (!isNaN(password.charAt(0))) {
//        alert("Password should not start with a number.");
//        return false;
//    }

//    // Check if the password contains both letters and numbers
//    var hasLetters = /[a-zA-Z]/.test(password);
//    var hasNumbers = /[0-9]/.test(password);

//    if (!hasLetters || !hasNumbers) {
//        alert("Password must contain both letters and numbers.");
//        return false;
//    }

//    return true; // If all conditions are satisfied
// }

// var password = prompt("Enter your password:");

// while (!isValidPassword(password)) {
//    password = prompt("Please enter a valid password:");
// }

// alert("Password accepted.");


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// var university ='University of Karachi';

// // Convert the string to an array using the split method
// var universityArray = university.split("");

// // Display the elements of the array in the browser
// document.write("Elements of the array:<br>");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write( (i+1) + universityArray[i] + " <br> ");
// }


// 17. Write a program to display the last character of a user
// input.

// Take user input
// var userInput = prompt("Enter something:");

// // Check if the input is not empty
// if (userInput) {
//     // Get the last character of the input
//     var lastCharacter = userInput.charAt(userInput.length - 1);
//     // Display the last character
//     alert("The last character is: " + lastCharacter);
// } else {
//     alert("You did not enter anything.");
// }



// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


// Given string
// var sentence = "The quick brown fox jumps over the lazy dog";

// // Convert the string to lowercase to make the search case-insensitive
// var lowerCaseSentence = sentence.toLowerCase();

// // Split the string into an array of words
// var wordsArray = lowerCaseSentence.split(" ");

// // Initialize a counter for the occurrences of "the"
// var count = 0;

// // Loop through the array and count occurrences of "the"
// for (var i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i] === "the") {
//         count++;
//     }
// }

// // Display the result
// alert("The word 'the' occurs " + count + " times in the given string.");


// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// Take a positive integer from the user
// var number = prompt("Please enter a positive integer:");

// // Convert the input to a number
// number = parseFloat(number);

// // Check if the number is positive
// if (number >= 0) {
//     // Calculate the rounded, floored, and ceiling values
//     var roundedValue = Math.round(number);
//     var floorValue = Math.floor(number);
//     var ceilValue = Math.ceil(number);

//     // Display the results in the browser
//     document.write("Number: " + number + "<br>");
//     document.write("Rounded value: " + roundedValue + "<br>");
//     document.write("Floor value: " + floorValue + "<br>");
//     document.write("Ceil value: " + ceilValue + "<br>");
// } else {
//     document.write("Please enter a positive integer.");
// }



// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// Take a negative floating-point number from the user
// var number = prompt("Please enter a negative floating-point number:");

// // Convert the input to a number
// number = parseFloat(number);

// // Check if the number is negative
// if (number < 0) {
//     // Calculate the rounded, floored, and ceiling values
//     var roundedValue = Math.round(number);
//     var floorValue = Math.floor(number);
//     var ceilValue = Math.ceil(number);

//     // Display the results in the browser
//     document.write("Number: " + number + "<br>");
//     document.write("Rounded value: " + roundedValue + "<br>");
//     document.write("Floor value: " + floorValue + "<br>");
//     document.write("Ceil value: " + ceilValue + "<br>");
// } else {
//     document.write("Please enter a negative floating-point number.");
// }


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// Take a number from the user
// var number = prompt("Please enter a number:");

// // Convert the input to a number
// number = parseFloat(number);

// // Calculate the absolute value
// var absoluteValue = Math.abs(number);

// // Display the result in the browser
// document.write("The absolute value of " + number + " is " + absoluteValue + ".");



// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
//browser.:

// Simulate a dice roll
// var diceValue = Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6

// // Display the value of the dice in the browser
// document.write("The value of the dice is: " + diceValue);



// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// Simulate a coin toss
// var tossResult = Math.random() < 0.5 ? "Heads" : "Tails"; // Generates "Heads" or "Tails"

// // Display the result of the coin toss in the browser
// document.write("The result of the coin toss is: " + tossResult);


// 6. Write a program that shows a random number between 1
// and 100 in your browser.


// Generate a random number between 1 and 100
// var randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100

// // Display the random number in the browser
// document.write("The random number between 1 and 100 is: " + randomNumber);


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// Ask the user for their weight
// var weightInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");

// // Use a regular expression to extract the numeric part of the input
// var weight = parseFloat(weightInput);

// // Check if the parsed weight is a valid number
// if (!isNaN(weight)) {
//     // Display the weight in the browser
//     document.write("Your weight is: " + weight + " kg");
// } else {
//     document.write("Invalid input. Please enter a valid weight.");
// }



// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// Store a random secret number between 1 and 10
// var secretNumber = Math.floor(Math.random() * 10) + 1; // Generates a number between 1 and 10

// // Ask the user to input a number between 1 and 10
// var userInput = prompt("Guess a number between 1 and 10:");

// // Convert the user input to a number
// var userNumber = parseInt(userInput);

// // Check if the user input equals the secret number
// if (userNumber === secretNumber) {
//     document.write("Congratulations! You guessed the secret number: " + secretNumber);
// } else {
//     document.write("Sorry, the secret number was: " + secretNumber + ". Better luck next time!");
// }




document.getElementById('generate').addEventListener('click', function() {
   var length = parseInt(document.getElementById('length').value);
   var password = generatePassword(length);
   
   // Display the generated password
   document.getElementById('result').innerText = "Generated Password: " + password;
});

function generatePassword(length) {
   var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
   var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var numbers = "0123456789";
   var specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";
   
   var allCharacters = lowercaseLetters + uppercaseLetters + numbers + specialCharacters;
   var password = "";

   // Check if the length is valid
   if (length < 8 || length > 20) {
       return "Please enter a valid length between 8 and 20.";
   }

   for (var i = 0; i < length; i++) {
       var randomIndex = Math.floor(Math.random() * allCharacters.length);
       password += allCharacters[randomIndex];
   }
   
   return password;
}


//  create a palindrome programme ?

document.getElementById('check').addEventListener('click', function() {
   var word = document.getElementById('word').value;
   var result = checkPalindrome(word);
   
   // Display the result
   document.getElementById('result').innerText = result;
});

function checkPalindrome(word) {
   // Normalize the word: convert to lowercase and remove non-alphanumeric characters
   var normalizedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
   
   // Reverse the normalized word
   var reversedWord = normalizedWord.split('').reverse().join('');
   
   // Check if the word is a palindrome
   if (normalizedWord === reversedWord) {
       return "'" + word + "' is a palindrome.";
   } else {
       return "'" + word + "' is not a palindrome.";
   }
}

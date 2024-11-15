// Function Exercise 1
// The conversion formula converts to Celsius value to Fahrenheit
// Use the formula (Celsius × 9/5) + 32 = Fahrenheit
// Write a function to calculate Fahrenheit
// Takes one argument: celsius
// Do the calculations
// Return the value
// Call the function three times with different sets of values(arguments). 
// Example calculate Fahrenheit(20); 
// Use console.log to verify the return value

function fahrenheit(celcius) {
    console.log(( celcius * 9 / 5 ) + 32 );
}

fahrenheit(68);
fahrenheit(75);
fahrenheit(95);

///  Function Exercise 2
// How old is a dog in human years? Calculate it!
// Write a function named calculateDogAge that:
// Takes one argument: the dog's age.
// Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
// Outputs the result to the screen: "Your doggie is NN years old in dog years!"
// Return the value 
// Call the function three times with different sets of values(arguments). 
// EXAMPLE: calculateDogAge(1);

// Bonus: Add an additional parameter to the function that takes the conversion rate of human to dog years.
// EXAMPLE: calculateDogAge(1, dog name);
// Outputs the result to the screen like so: "Name of the dog is NN years old in dog years!"
// Use console.log to verify the return value

function calculateDogAge(dogAge) {
    console.log ("Your doggie is " + dogAge * 7 + " years old in human years!");
}
calculateDogAge(7);
calculateDogAge(3);
calculateDogAge(10);

// Bonus
function calculateDogNameAge(dogNameAge, dogName) {
    console.log (dogName + " is " + dogNameAge * 7 + " years old in human years!");
}
calculateDogNameAge(7, "Bernice");
calculateDogNameAge(3, "Tofu");
calculateDogNameAge(10, "Lucky");

/// Function syntax
// function name(parameter1, parameter2, parameter3) {
//   // code to be executed
//  }
// name("My parameter1"); // this is an arguement
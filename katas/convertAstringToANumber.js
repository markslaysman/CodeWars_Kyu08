/*

https://www.codewars.com/kata/544675c6f971f7399a000e79


Description
We need a function that can transform a string into a number. What ways 
of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly 
valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7


Original Solve Data: 12/2/2021
*/


var stringToNumber = function(str){
    // put your code here
    return parseInt(str);
}


// Sample Data

// All Returns should be of Type Number
console.log('1234 is of type ' + typeof stringToNumber("1234"));
console.log('605 is of type ' + typeof stringToNumber("605"));
console.log('1405 is of type ' + typeof stringToNumber("1405"));
console.log('-7 is of type ' + typeof stringToNumber("-7"));
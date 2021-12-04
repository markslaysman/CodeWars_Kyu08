/*

https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

Write a function to convert a name into initials. This kata 
strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F


Original Solve Data: 12/2/2021
*/

function abbrevName(name){
    // code away
    let splitName = name.split(" ");
      
    let initials = splitName[0][0] + "." + splitName[1][0];
    
    return (initials.toUpperCase());
}


// Sample Data

// Should return S.H
console.log("Sam Harris");

// Should return P.F
console.log("patrick feeney");
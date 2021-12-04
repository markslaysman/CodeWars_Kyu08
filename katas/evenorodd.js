/*

https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

Create a function that takes an integer as an argument and returns "Even" 
for even numbers or "Odd" for odd numbers.


Original Solve Date: 12/2/2021

*/

function even_or_odd(number) {
    return number % 2 == 0 ? 'Even' : 'Odd';
}


// Sample Data

// Should return Even
console.log(2);

// Should return Odd
console.log(5);

// Should return Even
console.log(8);

// Should return Odd
console.log(9)



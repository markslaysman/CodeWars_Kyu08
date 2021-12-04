/*

https://www.codewars.com/kata/555086d53eac039a2a000083

Timmy & Sarah think they are in love, but around where they live, 
they will only know once they pick a flower each. If one of the 
flowers has an even number of petals and the other has an odd number 
of petals it means they are in love.

Write a function that will take the number of petals of each flower 
and return true if they are in love and false if they aren't.



Original Solve Date: 11/12/2021

*/

function isEven(number){
    // return if the provided number is even
    return (number % 2 == 0);
  }
  
  function lovefunc(flower1, flower2){
    // moment of truth
    if (isEven(flower1) != isEven(flower2)) {
        return true;
    } else {
        return false;
    }
}


// Sample Data

// Should return true
console.log(lovefunc(1,4));

// Should return false
console.log(lovefunc(2,2));

// Should return true
console.log(lovefunc(0,1));

// Should return false
console.log(lovefunc(0,0));
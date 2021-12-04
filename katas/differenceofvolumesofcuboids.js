/*

https://www.codewars.com/kata/58cb43f4256836ed95000f97


In this simple exercise, you will create a program that will take 
two lists of integers, a and b. Each list will consist of 3 positive 
integers above 0, representing the dimensions of cuboids a and b. You 
must find the difference of the cuboids' volumes regardless of which is 
bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), 
the volume of a is 12 and the volume of b is 20. Therefore, the 
function should return 8.

Your function will be tested with pre-made examples as well as random 
ones.

If you can, try writing it in one line of code.





Original Solve Date: 11/12/2021
*/

function calculateDimension(a){
    let dimension = 1;
    
    for (let i = 0; i < a.length; i++){
      dimension *= a[i];
    }
    
    return dimension;
}

function findDifference(a, b) {
    //loading...
    return (Math.abs(calculateDimension(a) - calculateDimension(b)));
}


// Sample Data

// Should return 8
console.log(findDifference([2, 2, 3], [5, 4, 1]));
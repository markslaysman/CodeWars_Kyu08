/*

https://www.codewars.com/kata/551b4501ac0447318f0009cd


Implement a function which convert the given boolean value into 
its string representation.

Note: Only valid inputs will be given.




Original Solve Data: 12/2/2021
*/

function booleanToString(b){
    //your code here
    if (b){
      return 'true';
    }
    else {
      return 'false';
    }
}


// Sample Data

//Should return 'true' is of type string
console.log('True is of type ' + typeof booleanToString(true));

//Should return 'false' is of type string
console.log('False is of type ' + typeof booleanToString(false));


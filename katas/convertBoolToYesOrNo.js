/*

https://www.codewars.com/kata/53369039d7ab3ac506000467

Complete the method that takes a boolean value and return a "Yes" string 
for true, or a "No" string for false.


Original Solve Data: 12/2/2021

*/

function boolToWord( bool ){
    //...
    if (bool){
      return 'Yes';
    } else {
      return 'No';
    }
}



// Sample Data

// Should return 'Yes'
console.log(boolToWord(true));

// Should return 'No'
console.log(boolToWord(false));
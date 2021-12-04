/*

https://www.codewars.com/kata/56f173a35b91399a05000cb7


Simple challenge - eliminate all bugs from the supplied code 
so that the code runs and outputs the expected value. Output 
should be the length of the longest word, as a number.

There will only be one 'longest' word.


function findLongest(str) (
  
  var spl = str.split(" ");
  var longest = 0
  
  for (var i = 0; i > spl.length; i+) (
    if (spl(i).length > longest) {
      longest = spl[i].length
    )
    }
    return longest
)




Original Solve Date: 11/12/2021
*/

function findLongest(str) {
    var spl = str.split(" ");
    var longest = 0;
    
    for (var i = 0; i < spl.length; i++){
      if (spl[i].length > longest) {
        longest = spl[i].length;
      }
    }
    return longest;
}

// Sample Data

// Should return 7
console.log(findLongest("The quick white fox jumped around the massive dog"));

// Should return 10
console.log(findLongest("Take me to tinseltown with you"));

// Should return 7
console.log(findLongest("Sausage chops"));

// Should return 6
console.log(findLongest("Wind your body and wiggle your belly"));

// Should return 7
console.log(findLongest("Lets all go on holiday"));
  
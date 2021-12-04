/*

https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

Write a function, gooseFilter / goose-filter / goose_filter / 
GooseFilter, that takes an array of strings as an argument and 
returns a filtered array containing the same elements but with 
the 'geese' removed.

The geese are any strings in the following array, which is 
pre-populated in your solution:

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

For example, if this array were passed as an argument:
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

Your function would return the following array:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

The elements in the returned array should be in the same order 
as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.




Original Solve Date: 11/12/2021
*/

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    // return an array containing all of the strings in the input 
    // array except those that match strings in geese
    var noGeese = [];
    
    for (let i = 0; i < birds.length; i++){
      for (let j = 0; j < geese.length; j++){
        if (birds[i] == geese[j]){
          break;
        } else if (j >= geese.length - 1){
          {
            noGeese.push(birds[i]);
          }
        }
      }
    }
    return noGeese;
}



// Sample Data


// Should return ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));
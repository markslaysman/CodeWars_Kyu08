/*

https://www.codewars.com/kata/5168bb5dfe9a00b126000018

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

Original Solve Date - 12/2/2021
*/



function solution(str){
    let word = str.split('');
    let revArray = word.reverse();
    let revWord = revArray.join('');
    
    return revWord;
}

//Test Cases

// Should return 'dlrow'
console.log(solution('world'));

// Should return 'drow'
console.log(solution('word'));
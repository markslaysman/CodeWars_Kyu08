/*
https://www.codewars.com/kata/59c287b16bddd291c700009a


Task:
A magician in the subway showed you a trick, he put an ice brick in a bottle 
to impress you. The brick's width and height are equal, forming a square. Just 
for fun and also to impress the magician and people around, you decided to 
calculate the brick's volume. Write a function iceBrickVolume that will accept 
these parameters:

radius - bottle's radius (always > 0);
bottleLength - total bottle length (always > 0);
rimLength - length from bottle top to brick (always < bottleLength);
And return volume of ice brick that magician managed to put into a bottle.

Note:
All inputs are integers. Assume no irregularities to the cuboid brick. You may 
assume the bottle is shaped like a cylinder. The brick cannot fit inside the rim.

All inputs are integers.

Example 1:
radius = 1
bottle_length = 10
rim_length = 2

volume = 16


Example 2:
radius = 5
bottle_length = 30
rim_length = 7

volume = 1150



Original Solve Date: 12/2/2021

*/


function iceBrickVolume(radius, bottleLength, rimLength) {
    // Your code should be here ;)
    return (2 * (radius ** 2) * (bottleLength - rimLength));
}


// Sample Data

//Should return 16
console.log(iceBrickVolume(1, 10, 2));

// Should return 1150
console.log(iceBrickVolume(5, 30, 7));
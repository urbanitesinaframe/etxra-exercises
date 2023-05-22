function countSheeps(arrayOfSheep) {
let countBoolean = arrayOfSheep.filter(Boolean); //filters the items of the array that was passed into "arrayOfSheep" (--> array1) by checking if it's boolean type is true. All values that are true will be stored into a new array
return countBoolean.length; // Counts all items in the new Array
}

Wrote a shorter solution:

function countSheeps (arrayOfShees) {
return arrayOfSheeps.filter(boolean).length} 

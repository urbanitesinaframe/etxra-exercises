//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(arrayOfSheep) {
  let countBoolean = arrayOfSheep.filter(Boolean); //filters the items of the array that was passed into "arrayOfSheep" (--> array1) by checking if it's boolean type is true. All values that are true will be stored into a new array
  return countBoolean.length; // Counts all items in the new Array
}

// type this into the console:
// countSheeps(array1)

<https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript>

function evenNumbers(array, number) {
  // need to browse through the array from the back and put the number that is found to a new array
  // new numbers need to be unshift to the new array
  // the loop is only as long as the 2nd parameter declares

  let newArray = [ ];
  for (let i=array.length-1; newArray.length<number ; i--){
    if(array[i] % 2 === 0){
      newArray.unshift(array[i]);
      //console.log(newArray.length);
}}
  return newArray
          
  
}

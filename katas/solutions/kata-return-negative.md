function makeNegative(num) {
  if(num <= 0){ //checks if num is already negative or 0
    return num} else {
      return -num //returns num as negative number
    }
  }
  
  
  // even shorter
  
  function makeNegative(num) {
  return num >= 0 ? -num : num;
    }

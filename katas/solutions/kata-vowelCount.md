function getCount(str) {
  let newArray = str.split('');
  let sum = 0
  for (let i = 0; i < newArray.length; i++) {
   switch(newArray[i]) {
       case 'a':
        sum++;
        break;
       case 'e':
        sum++;
        break;
       case 'i':
        sum++;
        break;
       case 'o':
        sum++;
        break;
       case 'u':
        sum++;
       }
    }
   
  return sum
}
  

Steps:
String needs to be converted to an array.
The separation must be each letter/symbol, thats why split("")
The order of the array can be reversed
the new order must be joined without separator

function solution(str){
  return str.split('').reverse().join('');  
}

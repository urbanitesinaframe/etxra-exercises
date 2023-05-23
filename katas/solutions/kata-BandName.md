<https://www.codewars.com/kata/59727ff285281a44e3000011/solutions/javascript?filter=me&sort=best_practice&invalids=false>

Thoughts:
First create a check, if first and last letter is the same
Then Modify first letter and add either "The " or the same word without letter accordingly.
Use of toUpperCase and Slice

function bandNameGenerator(str) {
  if (str[0] === str[str.length-1] ){
return str.charAt(0).toUpperCase() +  str.slice(1) + str.slice(1) 
}else{return "The " + str.charAt(0).toUpperCase() + str.slice(1) }
}

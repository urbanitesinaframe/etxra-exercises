

function getMiddle(s)
{
  //15/2=7.5 - das heisst der Wert mit Math.round wird genommen.
//wenn 14%2 === 0, dann 14/2 + 14/2+1 oder splice.14/2-1,2
 
 if (s.length%2 !==0){
   return s.slice(Math.floor(s.length/2),Math.round(s.length/2))
 } else {
   return s.slice((s.length/2)-1,(s.length/2)+1)
 }
 
 
  //Code goes here!
}

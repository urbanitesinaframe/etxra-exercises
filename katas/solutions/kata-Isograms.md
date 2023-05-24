<https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript>

---LÖSUNG---
function isIsogram(str){
 let small = str.toUpperCase();
  
  for (let i=0; i<small.length-1; i++){
     if ((small.slice(i+1).includes(small[i]))===true){return false}else{continue} }
return true}
  
  
  
 /* let strToArray = small.split("");
  
  
  
  let count = 0;
  for (let i=0; i<strToArray.length-1; i++){
 if (strToArray(i) === small(i+1))
     count += 1}
 if (count > 0) {return false}else{return true}  }
  
  
  
//for (let j=0; j<small.length-1; j++);

//ich muss schauen, ob CharAt[i] = CharAt[i+1] ist, 
//denn wenn der gleiche Buchstabe an einer anderen Stelle befindet, dann sind die Buchstaben ja doppelt

//indexOf method. wenn index of found character nicht gleich ist index of input dann false

Finaler Lösungsgedanke, der zum Ziel führte:
- str(0) mit slice str(1) vergleichen. und so weiter bis true ist. damit laesst sich pruefen, ob der gesuchte buchstabe noch mal im wort erhalten ist. 
- falls buchstabe nicht im wortabschnitt enthalten ist, dann wird nicht true ausgegeben, sondern mit continue weitergesucht.
- falls nach dem durchiterieren kein selber Buchstabe im Abschnitt gefunden wird, dann return true
/*

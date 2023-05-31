function zipStrings(strA, strB) {
  //Erstellung von Hilfsvariablen
  let count = ""; // Hier kommt der Längere String von den beiden eingegebenen Argumenten rein
  let finalString = []; // Hier kommt der zusammengesetze Array rein, welche beim return in einen String umgewandelt wird

  // Hier werden die Strings in Arrays umgewandelt, damit ich durch iterieren kann
  const arrayA = strA.split("");
  const arrayB = strB.split("");

  //Hier wird die Länge der Strings ausgegeben und verglichen. Der Längere bzw. bei gleicher Größe Länge von strB genommen. Gedanke ist, dass beim Iterieren, fehlende Indexe ignoriert werden.
  if (strA.length > strB.length) {
    count = strA.length;
  } else {
    count = strB.length;
  }

  // Hier werden die Werte an den jeweiligen Indexstellen in das neue Array gepushed. Immer nach einander. Wie beschrieben werden fehlende Indexstellen ignoriert und daher nicht gepushed.
  for (let i = 0; i < count; i++) {
    finalString.push(arrayA[i]);
    finalString.push(arrayB[i]);
  }
  // Da der finalString ein Array ist, wird dieser noch umgewandelt in einen String.
  return finalString.join("");
}

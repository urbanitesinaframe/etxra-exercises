<https://www.codewars.com/kata/59377c53e66267c8f6000027/javascript>

Thoughts:
I iterate through the string which is passed in and see if each character includes on of the left/right side character. 
If yes its value should be passed to the value of either leftPowerCount or rightPowerCount
In the end the powerCounts will be compared and its result defines the result as string

function alphabetWar(fight){
    let leftPowerCount = 0;
    let rightPowerCount = 0;
    for(let i=0; i<fight.length; i++) {
        if (fight[i].includes("w")) {
        leftPowerCount += 4;
        } if (fight[i].includes("p")) {
          leftPowerCount += 3;
        } if (fight[i].includes("b")) {
          leftPowerCount += 2;
        } if (fight[i].includes("s")) {
          leftPowerCount += 1;
        } if (fight[i].includes("m")) {
          rightPowerCount += 4;
        } if (fight[i].includes("q")) {
          rightPowerCount += 3;
        } if (fight[i].includes("d")) {
          rightPowerCount += 2;
        } if (fight[i].includes("z")) {
          rightPowerCount += 1;
        }
      
}
  return leftPowerCount > rightPowerCount ? "Left side wins!" : leftPowerCount < rightPowerCount ? "Right side wins!" : "Let's fight again!"

}

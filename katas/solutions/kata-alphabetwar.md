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

let digClock = document.querySelector(".digClock");
let hoursPointer = document.querySelector(".hour");
let minutesPointer = document.querySelector(".minutes");
let secondsPointer = document.querySelector(".seconds");

function logTime() {
  //get date
  const now = new Date();
  console.log(now);

  //get hours minutes and seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  digClock.innerText =
    zero(hours) + " : " + zero(minutes) + " : " + zero(seconds);
  console.log(hours);
  console.log(minutes);
  console.log(seconds);

  let root = document.querySelector(":root");
  root.style.setProperty("--hour", hours * 30 + "deg");
  root.style.setProperty("--minutes", minutes * 6 + "deg");
  root.style.setProperty("--seconds", seconds * 6 + "deg");
}

function zero(value) {
  return value < 10 ? "0" + value : value;
}

setInterval(logTime, 1000);

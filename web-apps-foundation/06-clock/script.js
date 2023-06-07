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
  hoursPointer.style.transform = "rotate(" + hours * 30 + "deg)";
  minutesPointer.style.transform = "rotate(" + minutes * 6 + "deg)";
  secondsPointer.style.transform = "rotate(" + seconds * 6 + "deg)";
}

function zero(value) {
  return value < 10 ? "0" + value : value;
}

setInterval(logTime, 1000);

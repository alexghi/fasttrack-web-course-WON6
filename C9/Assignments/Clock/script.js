/* 
sa ne gandim
- avem de facut un cerc
- avem de reprezentat valorile orelor, minutelor si secundelor pe acel cerc
- intr-o ora avem 60 de minute
- stim ca avem in Javascript Date
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

- stim ca avem functia setTimeout
https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
care ce face? 
primeste ca prim parametru o functie care se va autoinvoca (se va apela) dupa un interval pe care noi il stabilim
in al doilea parametru
setInterval, se apeleaza la fiecare ms
*/



function setDate(now) {
  //let now = new Date();

  let seconds = now.getSeconds();
  let mins = now.getMinutes();
  let hour = now.getHours();

  let secondHand = document.querySelector(".second");
  let minsHand = document.querySelector(".minute");
  let hourHand = document.querySelector(".hour");

  let secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  let minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  let hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function startStopWatch() {
  var date = new Date ()  ;
  date.setHours(0,0,0);
  
  var startClockId = setInterval(() => {  
    setDate(date);
    date.setSeconds(date.getSeconds() + 1)
  }, 1000);
  let number = parseInt(document.getElementById("number").value);
  setTimeout(function () {
    clearInterval(startClockId);
  }, number * 1000);
  console.log(typeof(number));
  console.log(document.getElementById("number").value);
  console.log(number);
}


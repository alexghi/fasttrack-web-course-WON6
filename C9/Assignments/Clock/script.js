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

// setInterval(() => {
//     d = new Date();
//     hr = d.getHours();
//     min = d.getMinutes();
//     sec = d.getSeconds();

// }
// )



function setDate(){
    let now = new Date();

let secondHand = document.querySelector('.second');
let minsHand = document.querySelector('.minute');
let hourHand = document.querySelector('.hour');



let seconds = now.getSeconds();
let secondsDegrees = ((seconds / 60) * 360) + 90;
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

let mins = now.getMinutes();
let minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
minsHand.style.transform = `rotate(${minsDegrees}deg)`;

let hour = now.getHours();
let hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();

function startStopWatch (){
    let number = document.getElementById("number").value;
    console.log(number);
}

// setTimeout(function() {
//     console.log('aici dupa o secunda')
// }, 1000)

// setInterval(function() {
//     console.log('aici LA FIECARE secunda')
// }, 1000) // valoare exprimata in ms 1000ms = 1s 

// console.log(`acum - `, new Date())

// // functiile din acest fisier se pot inlocui cu cele pe care le veti face voi
// // sunt doar ca sa aveti cateva lucruri de la care sa porniti
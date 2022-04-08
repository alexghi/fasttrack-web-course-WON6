const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondsHand = document.querySelector('.second');

setInterval(() => {
    let day = new Date();
    // 360/12 = 30deg
    // 12 is at 0deg, 1 at 30deg, each hour has a distance of 30deg between each other
    let hour = day.getHours() * 30;
    // 360/60 = 6deg
    let minutes = day.getMinutes() * 6;
    let seconds = day.getSeconds() * 6;

    hourHand.style.transform = `rotateZ(${(hour) + (minutes / 12)}deg)`;
    minuteHand.style.transform = `rotateZ(${minutes}deg)`;
    secondsHand.style.transform = `rotateZ(${seconds}deg)`;
});

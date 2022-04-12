const UIC = {
// clock
    second: document.querySelector('#second'),
    minute: document.querySelector('#minute'),
    hour: document.querySelector('#hour'),
}

function updateClock(){
    
    // Object Time
    const now = new Date();
    
    const seconds = (now.getSeconds()+ now.getMilliseconds()/1000)  / 60 *360;
    const minutes = (now.getMinutes() + now.getSeconds()/60)/ 60 * 360;
    const hours = (now.getHours()+ now.getMinutes()/60) / 12 * 360;

    // Object Update
    UIC.second.style.transform =`rotate(${seconds}deg)`;
    UIC.minute.style.transform =`rotate(${minutes}deg)`;
    UIC.hour.style.transform =`rotate(${hours}deg)`;

    requestAnimationFrame(updateClock) //recursive function
}

requestAnimationFrame(updateClock);

// timer

const timer_el = document.querySelector('.mask .timer');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const restart_btn = document.getElementById('restart');

let timer_seconds = 0;
let interval= null;

// Event listeners
start_btn.addEventListener( 'click', start);
stop_btn.addEventListener( 'click', stop);
restart_btn.addEventListener( 'click', reset);

//Update timer

function timer () {
    timer_seconds++;

    //Format the time
    let hrs = Math.floor(timer_seconds / 3600);
    let mins = Math.floor((timer_seconds - (hrs *3600)) / 60);
    let secs = timer_seconds % 60;
    
    if (secs < 10 ) secs = '0' + secs;
    if (mins < 10 ) mins = '0' + mins;
    if (hrs < 10 ) hrs = '0' + hrs;

    timer_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start () {
    if (interval) {
        return
    }

    interval = setInterval(timer, 1000)
}

function stop () {
    clearInterval(interval);
    interval = null;
}

function reset () {
    stop();
    timer_seconds = 0; 
    timer_el.innerText = '00:00:00';
}




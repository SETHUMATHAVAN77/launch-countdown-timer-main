const daysEl = document.getElementById('days');

const hoursEl = document.getElementById('hours');

const minutesEl = document.getElementById('minutes');

const secondsEl = document.getElementById('seconds');

function countDown(){
  // end date
const date = new Date ('jan 01, 2023 00:00:00');

// current date

const currentDate = new Date().getTime();

// diff

const diff = date - currentDate;


let timeDays = Math.floor(diff/1000/60/60/24);

let timeHours = Math.floor((diff/1000/60/60)%24);

let timeMinutes = Math.floor((diff/1000/60)%60);

let timeSeconds= Math.floor((diff/1000)%60);

daysEl.innerText = timeDays;

hoursEl.innerText = timeHours;

minutesEl.innerText = timeMinutes;

secondsEl.innerText = timeSeconds;


}

setInterval(countDown,1000)


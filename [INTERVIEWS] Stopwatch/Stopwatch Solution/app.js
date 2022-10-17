const timerMilliseconds = document.querySelector('.timer__milliseconds');
const timerSeconds = document.querySelector('.timer__seconds')
const timerMinutes = document.querySelector('.timer__minutes')

let cancelId;
let startTime;
let savedTime = 0;

function startTimer() {
  startTime = Date.now()
  cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer() {
  savedTime = savedTime + Date.now() - startTime;
  cancelAnimationFrame(cancelId);
}

function resetTimer() {
  startTime = Date.now();
  savedTime = 0

  timerMilliseconds.innerHTML = '000';
  timerSeconds.innerHTML = '00';
  timerMinutes.innerHTML = '00';
}

function updateTimer() {
  let millisElapsed = savedTime + Date.now() - startTime
  let secondsElapsed = millisElapsed / 1000;
  let minutesElapsed = secondsElapsed / 60;

  let minutesText = Math.floor(minutesElapsed)
  let secondsText = Math.floor(secondsElapsed % 60)
  let millisText = millisElapsed % 1000

  if (minutesText.toString().length === 1) {
    minutesText = '0' + minutesText;
  }
  if (secondsText.toString().length === 1) {
    secondsText = '0' + secondsText
  }
  if (millisText.toString().length < 3) {
    millisText = millisText.toString().padStart(3, '0');
  }

  timerMilliseconds.innerHTML = millisText;
  timerSeconds.innerHTML = secondsText;
  timerMinutes.innerHTML = minutesText;

  cancelId = requestAnimationFrame(updateTimer)
}
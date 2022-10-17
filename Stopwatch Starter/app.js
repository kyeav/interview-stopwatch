// DOM elements
const timerMinutes = document.querySelector('.timer__minutes')
const timerSeconds = document.querySelector('.timer__seconds')
const timerMilliseconds = document.querySelector('.timer__milliseconds')

// global variables
let cancelId
let startTime 
let savedTime = 0

function startTimer() {
    startTime = Date.now()
    // returns number of ms elapsed since jan 1 1970 00:00:00 UTC
    console.log(startTime)
    cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer() {
    savedTime = savedTime + Date.now() - startTime
    // savedTime = savedTime + Date.now() - Date.now()
    // add savedTime onto previous savedTime
    console.log(savedTime)
    cancelAnimationFrame(cancelId)
}

function resetTimer() {
    startTime = Date.now()
    savedTime = 0

    timerMilliseconds.innerHTML = '000'
    timerSeconds.innerHTML = '00'
    timerMinutes.innerHTML = '00'
}

function updateTimer() {
    let millisElapsed = savedTime + (Date.now() - startTime)
    let secondsElapsed = millisElapsed / 1000
    let minutesElapsed = secondsElapsed / 60

    let secondsText = Math.floor(secondsElapsed % 60)
    let minutesText = Math.floor(minutesElapsed)
    let millisText =  millisElapsed % 1000

    // e.g. 09
    if (secondsText.toString().length === 1) {
        secondsText = '0' + secondsText
    }

    // e.g. 09
    if (minutesText.toString().length === 1) {
        minutesText = '0' + minutesText
    }

    // e.g. 999
    // best practice
    if (millisText.toString().length < 3) {
        millisText = millisText.toString().padStart(3, '0')
    }

    timerMilliseconds.innerHTML = millisText
    timerSeconds.innerHTML = secondsText 
    timerMinutes.innerHTML = minutesText
    cancelId = requestAnimationFrame(updateTimer)
}
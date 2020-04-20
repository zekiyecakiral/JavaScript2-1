"use strict";

const upButton = document.getElementById("up");
const downButton = document.getElementById("down");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");
const minuteTag = document.getElementById("minute");
const secondTag = document.getElementById("second");
const timer = document.getElementById("timer");
const sesionLength = document.getElementById("sesionLength");
const pauseIcon = document.querySelector(".fa-pause");
let clickPause = false;
let pressPlay = false;
let timerId;

//increase the session length 
upButton.addEventListener("click", function () {
   // If starting the timer, you can not the change session length
  if (!pressPlay) {
    const sessionLen = document.getElementById("sesionLength");
    sessionLen.innerText = formatTwoDigit (Number(sessionLen.innerText) + 1) ;
    minuteTag.innerText = formatTwoDigit (Number(minuteTag.innerText) + 1);
  }
});

//decrease the session length 
downButton.addEventListener("click", function () {
  // If starting the timer, you can not the change session length
  if (!pressPlay) {
    const sessionLen = document.getElementById("sesionLength");
    if(Number(sessionLen.innerText) !== 0){
      sessionLen.innerText = formatTwoDigit((Number(sessionLen.innerText) - 1));
      minuteTag.innerText = formatTwoDigit((Number(minuteTag.innerText) - 1));
    }
  }
});

playButton.addEventListener("click", play);

stopButton.addEventListener("click", stop);

pauseButton.addEventListener("click", pause);

// If press play button, starts the timer.
// It hides play button, it shows stop button
function play() {
  pressPlay = true;
  timerId = setInterval(countdown, 1000);
  playButton.hidden = true;
  stopButton.hidden = false;
}

// If press the stop button, it will be reset timer.  make the play button available by changing this flag "pressPlay= false;"
function stop() {
  pressPlay = false;
  playButton.hidden = false;
  stopButton.hidden = true;
  clearTimeout(timerId);
  minuteTag.innerText = sesionLength.innerText;
  secondTag.innerText = "00";
  clickPause = false;
  pauseIcon.style.color = "white";
}

function pause() {
    //If the start button is not pressed,this function will not work 
  if (pressPlay) {

    if (clickPause) {
        // If click the pause button second time, the timer will resume where it left off.
        clickPause = false;
        timerId = setInterval(countdown, 1000);
        pauseIcon.style.color = "white";
    } else {
        // If click the pause button first time, it will stop the setInterval,
        clearTimeout(timerId);
        clickPause = true;
        pauseIcon.style.color = "gray";
    }
  }
}

// this function calculates the timer duration
function countdown() {
  let minutes = Number(minuteTag.innerText);
  let seconds = Number(secondTag.innerText);

  if (seconds === 0) {
    if (minutes === 0) {
      timer.innerText="Time is up!";
      clearTimeout(timerId);
      return;
    }
    seconds = 59;
    minutes--;
  } else {
    seconds--;
  }
  minuteTag.innerText = formatTwoDigit(minutes);
  secondTag.innerText = formatTwoDigit(seconds);
}

function formatTwoDigit(item){
  return item.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
}
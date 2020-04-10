"use strict";


let timeElement = document.createElement("h1");
timeElement.classList.add("box");

function currentTime() {

  timeElement.innerHTML = new Date().toLocaleTimeString(); ;
  document.getElementById("container").appendChild(timeElement); 
}

window.onload = currentTime;
setInterval(currentTime, 1000);

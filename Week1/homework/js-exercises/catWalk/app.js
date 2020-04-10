"use strict";

let cat = document.querySelector("img");

let position = 0;
let completedTour = false;
const middleOfScreenPoint = window.innerWidth / 2 - cat.width / 2;
const endOfWalkingPoint = window.innerWidth;

function catWalk() {
  //after completed the tour
  if (position > endOfWalkingPoint) {
    position = -cat.width;
    completedTour = false;
  }
  //increase the position variable 10 pixels every interval
  position += 10;
  cat.style.left = position + "px";

  //when the position variable reaches the middle of the screen
  if (position > middleOfScreenPoint && !completedTour) {
    completedTour = true;
    // to stop the interval
    clearInterval(interval);
    //dancing cat
    cat.src = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";

    //I just want to stop the interval loop here for 5 seconds
    setTimeout(function () {
      cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";

      //start again the interval after 5 seconds
      interval = setInterval(catWalk, 50);
    }, 5000);
  }
}

//start the interval
let interval = setInterval(catWalk, 50);

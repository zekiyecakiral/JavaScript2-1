"use strict";

document.body.style.fontFamily = "Arial, sans-serif;";
document.getElementById("nickname").innerHTML = "The Chief";
document.getElementById("fav-food").innerHTML = "Pizza";
document.getElementById("hometown").innerHTML = "Istanbul";

const h1 = document.querySelector("h1");
h1.style.paddingLeft="27px";

const elems = document.querySelectorAll("ul li");

elems.forEach(function (item) {
  item.className = "list-item";
});

var myImage = new Image(180, 180);
myImage.style.paddingLeft = "27px";
myImage.src = "img/zekiye.jpg";

const ul = document.querySelector("ul");
document.body.insertBefore(myImage,ul);
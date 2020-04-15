"use strict";

const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];

 const list = document.createElement("ul");
  myHobbies.map(item => {
      const hobby = document.createElement("li");
      hobby.innerHTML = item;
      list.appendChild(hobby);
  });

  
   document.getElementsByClassName("box")[0].appendChild(list);
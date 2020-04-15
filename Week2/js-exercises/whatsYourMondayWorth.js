"use strict";

const mondayTasks = [
  {
    name: "Daily standup",
    duration: 30, // specified in minutes
  },
  {
    name: "Feature discussion",
    duration: 120,
  },
  {
    name: "Development time",
    duration: 240,
  },
  {
    name: "Talk to different members from the product team",
    duration: 60,
  },
];
const hourlyRate = 25;
// firstly using map we get the hourly price as an array, after that we sum this array's all items.
const totalPrice = mondayTasks
  .map((task) => (task.duration / 60 * hourlyRate))
  .reduce((total, price) => total + price, 0)
  .toFixed(2);  

const totalPriceFormat = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
}).format(totalPrice);

console.log(`Your will earn ${totalPriceFormat} on Monday.`);

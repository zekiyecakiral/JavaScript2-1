"use strict";

const quotes = [
  {
    quote:
      "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    author: "Albert Einstein",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },

  {
    quote: "The greatest wealth is to live content with little",
    author: "Plato",
  },

  {
    quote: "Life is a flower of which love is the honey",
    author: "Victor Hugo",
  },

  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    author: "Mark Twain",
  },
  {
    quote:
      "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
  },
];

const author = document.getElementById("author");
const quote = document.getElementById("quote");
let randomNumber = Math.floor(Math.random() * quotes.length);

function createQuote() {
  randomNumber = generateDifferentRandom();
  const randomQuote = quotes[randomNumber];
  quote.innerText = randomQuote.quote;
  author.innerText = `-${randomQuote.author}`;
}

//generate different from the previous random number
function generateDifferentRandom() {
  let newRandomNumber = Math.floor(Math.random() * quotes.length);
  while (newRandomNumber === randomNumber) {
    newRandomNumber = Math.floor(Math.random() * quotes.length);
  }
  return newRandomNumber;
}
window.onload = createQuote;
document.getElementById("newQuoteBtn").addEventListener("click", createQuote);

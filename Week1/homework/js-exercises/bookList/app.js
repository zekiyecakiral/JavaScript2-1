"use strict";

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

const booksImages = [
  "https://img1.od-cdn.com/ImageType-100/4575-1/%7B85EA00CF-F096-4068-8876-960C1075ED20%7DImg100.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg",
  "https://s.s-bol.com/imgbase0/imagebase3/extralarge/FC/5/4/8/7/9200000033027845.jpg",
];

function bookList() {
  const ul = document.createElement("ul");
  ul.style.display = "flex";
  ul.style.padding = "20px";
  ul.style.margin = "10px";
  ul.style.listStyleType = "none";
  ul.style.width = "calc(100% - 41px);";

  books.forEach((item,index) => {
    {
      const li = document.createElement("li");
      li.style.padding = "10px";
      li.style.margin = "10px";
  
      const ptag = document.createElement("p");
      ptag.innerText = `${item.title}-${item.author}`;
      li.appendChild(ptag);
  
      const liImg = document.createElement("img");
      liImg.src = booksImages[index];
      liImg.style.width = "200px";
      liImg.style.height = "250px";
      li.appendChild(liImg);
  
      if (books[index].alreadyRead) {
        li.style.backgroundColor = "green";
      } else {
        li.style.backgroundColor = "red";
      }
  
      ul.appendChild(li);
    }
  });

  document.body.appendChild(ul);
}

bookList();

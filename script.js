let bookBtn = document.querySelector(".addBook");
let newBookInput = document.querySelector(".newBookInput");
let createBookCard = document.querySelector(".addBookToLibrary");

//Library array
let myLibrary = [];

//Object constructor
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function getUserBook() {
  let title = document.querySelector(".title").value;
  let author = document.querySelector(".author").value;
  let pages = document.querySelector(".pages").value;
  let read = document.getElementById("readCheck").checked;
  return new Book(author, title, pages, read);
}

function addBookToLibrary(myLibrary) {
  return myLibrary.push(newUserBook);
}

function createNewBook() {
  let bookDiv = document.createElement("div");
  let title = document.createElement("p");
  let author = document.createElement("p");
  let pages = document.createElement("p");
  let readToggle = document.createElement("button");
  let remove = document.createElement("button");

  bookDiv.classList.add("bookDiv");
  readToggle.classList.add("readToggle");
  remove.classList.add("removeBtn");
}

function addBookInput() {}

bookBtn.addEventListener("click", addBookInput());

let bookBtn = document.querySelector(".addBook");
let newBookInput = document.querySelector(".newBookInput");

newBookInput.style.display = "none";

//Library array
let myLibrary = [];

//Object constructor
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
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
}

function addBookInput() {}

bookBtn.addEventListener("click", addBookInput());

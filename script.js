let bookBtn = document.querySelector(".addBook");
let newBookInput = document.querySelector(".newBookInput");
let createBookCard = document.querySelector(".addBookToLibrary");
let libraryContainer = document.querySelector(".libraryContainer");

//Library array
let myLibrary = [];

let newUserBook = "";

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
  if (title === "" || author === "" || pages === "") {
    alert("Please fill out the form before submitting");
    return;
  }
  myLibrary.push((newUserBook = new Book(author, title, pages, read)));
}

function resetInput() {
  newBookInput.style.display = "none";
  let title = (document.querySelector(".title").value = "");
  let author = (document.querySelector(".author").value = "");
  let pages = (document.querySelector(".pages").value = "");
}

//Creates a new book and adds it to the library container
function createNewBook(book) {
  let bookDiv = document.createElement("div");
  let title = document.createElement("p");
  let author = document.createElement("p");
  let pages = document.createElement("p");
  let readToggle = document.createElement("button");
  let remove = document.createElement("button");

  bookDiv.classList.add("bookDiv");
  title.classList.add("cardText");
  author.classList.add("cardText");
  pages.classList.add("cardText");
  readToggle.classList.add("readToggle");
  remove.classList.add("removeBtn");

  title.textContent = `"${book.title}"`;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;

  if (read.checked === true) {
    readToggle.textContent = "Read";
    readToggle.style.backgroundColor = "green";
  } else {
    readToggle.textContent = "Not read";
    readToggle.style.backgroundColor = "red";
  }

  bookDiv.appendChild(title);
  bookDiv.appendChild(author);
  bookDiv.appendChild(pages);
  bookDiv.appendChild(readToggle);
  bookDiv.appendChild(remove);
  libraryContainer.appendChild(bookDiv);
}

//Show add new book menu
function addBookInput() {
  return (newBookInput.style.display = "block");
}

//When +Add Book is clicked, show hidden menu for new book by user
bookBtn.addEventListener("click", addBookInput);

//When submit is clicked, add new book to library
createBookCard.addEventListener("mousedown", getUserBook);

//Resets inputs
createBookCard.addEventListener("mouseup", resetInput);

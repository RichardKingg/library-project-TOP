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

//Get values from user input to create new book
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
  createNewBook(newUserBook);
  newBookInput.classList.remove("active");
  newBookInput.classList.add("inactive");
}

//Reset book input menu
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
  let read = document.getElementById("readCheck").checked;

  bookDiv.classList.add("bookDiv");
  title.classList.add("cardText");
  author.classList.add("cardText");
  pages.classList.add("cardText");
  readToggle.classList.add("readToggle");
  remove.classList.add("removeBtn");

  title.textContent = `"${book.title}"`;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  remove.textContent = "Remove";

  if (read === true) {
    readToggle.textContent = "Read";
    readToggle.style.backgroundColor = "#90EE90";
  } else if (read === false) {
    readToggle.textContent = "Not read";
    readToggle.style.backgroundColor = "#a26cff";
  }

  readToggle.addEventListener("mouseover", function () {
    if (readToggle.textContent === "Read") {
      readToggle.style.backgroundColor = "#73bd73";
    } else if (readToggle.textContent === "Not read") {
      readToggle.style.backgroundColor = "#885bd5";
    }
  });

  readToggle.addEventListener("mouseout", function () {
    if (readToggle.textContent === "Read") {
      readToggle.style.backgroundColor = "#90EE90";
    } else if (readToggle.textContent === "Not read") {
      readToggle.style.backgroundColor = "#a26cff";
    }
  });

  //removes object from myLibrary array and removes bookDiv from library container
  remove.addEventListener("click", function () {
    let bookIndex = myLibrary.findIndex((b) => b.title === book.title);
    myLibrary.splice(bookIndex, 1);
    libraryContainer.removeChild(bookDiv);
  });

  //changes read status
  readToggle.addEventListener("click", function () {
    if (book.read === true) {
      readToggle.textContent = "Not read";
      readToggle.style.backgroundColor = "#a26cff";
      book.read = false;
    } else if (book.read === false) {
      readToggle.textContent = "Read";
      readToggle.style.backgroundColor = "#90EE90";
      book.read = true;
    }
  });

  bookDiv.appendChild(title);
  bookDiv.appendChild(author);
  bookDiv.appendChild(pages);
  bookDiv.appendChild(readToggle);
  bookDiv.appendChild(remove);
  libraryContainer.appendChild(bookDiv);
}

//Show add new book menu
function addBookInput() {
  newBookInput.classList.remove("inactive");
  newBookInput.classList.add("active");
}

window.addEventListener("load", function () {
  newBookInput.classList.add("inactive");
});

//When +Add Book is clicked, show hidden menu for new book by user
bookBtn.addEventListener("click", addBookInput);

//When submit is clicked, add new book to library
createBookCard.addEventListener("mousedown", getUserBook);

//Resets inputs
createBookCard.addEventListener("mouseup", resetInput);

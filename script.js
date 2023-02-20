import { Book } from './book.js';

const addBookButton = document.querySelector('#add-btn');
const formCloseButton = document.querySelector('#form-close');

/* const libraryContainer = document.querySelector('#library'); */
const popup = document.querySelector('#popup');
const form = document.querySelector('#form');

let library = [];

console.log(library);

function togglePopUp() {
  popup.classList.toggle('hide');
  form.reset();
}

addBookButton.addEventListener('click', togglePopUp);
formCloseButton.addEventListener('click', togglePopUp);

/* class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.displayBook();
    this.deleteBook();
  }

  deleteBook() {
    const bookDeleteButton = document.querySelector('.book-delete');
    const book = document.querySelector('.book-card');
    bookDeleteButton.addEventListener('click', e => {
      book.remove();
      const index = library.indexOf(this);
      index > -1 ? library.splice(index, 1) : null;
    });
  }

  displayBook() {
    const book = `<article class="book-card">
          <h1 class="book-title">${this.title}</h1>
          <h2 class="book-author">${this.author}</h2>
          <h3 class="book-pages">${this.pages} <span>Pages</span></h3>
          <button class="book-delete">&#128465;</button>
          </article>
        `;
    libraryContainer.insertAdjacentHTML('afterbegin', book);
  }
} */

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target).entries());
  library.push(new Book(formData.title, formData.author, formData.pages));
  togglePopUp();
});

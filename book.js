const libraryContainer = document.querySelector('.library-container');
import { library } from './script.js';

export class Book {
  constructor(title, author, pages, bookRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookRead = bookRead;
    this.displayBook();
    this.deleteBook();
    this.changeReadState();
  }

  deleteBook() {
    const bookDeleteButton = document.querySelector('.book-delete');
    const bookCard = document.querySelector('.book-card');
    bookDeleteButton.addEventListener('click', () => {
      bookCard.remove();
      const index = library.indexOf(this);
      index > -1 ? library.splice(index, 1) : null;
    });
  }

  displayBook() {
    const bookCard = `<article class="book-card">
          <h1 class="book-title">${this.title}</h1>
          <h2 class="book-author">${this.author}</h2>
          <h3 class="book-pages">${this.pages} <span>Pages</span></h3>
          <h4 class="book-read">${
            this.bookRead ? "I've finished this book." : 'Not finished yet.'
          }</h4>
          <button class="book-delete">&#128465;</button>
          <button class="book-change">Read it?</button>
          </article>
        `;
    libraryContainer.insertAdjacentHTML('afterbegin', bookCard);
  }

  changeReadState() {
    const bookReadElement = document.querySelector('.book-read');
    const changeReadStateButton = document.querySelector('.book-change');
    changeReadStateButton.addEventListener('click', () => {
      bookReadElement.textContent == "I've finished this book."
        ? (bookReadElement.textContent = 'Not finished yet.')
        : (bookReadElement.textContent = "I've finished this book.");
    });
  }
}

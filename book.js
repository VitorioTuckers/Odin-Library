const libraryContainer = document.querySelector('#library');
let library = [];

export class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.displayBook();
    this.deleteBook();
  }

  deleteBook() {
    const bookDeleteButton = document.querySelector('.book-delete');
    const bookCard = document.querySelector('.book-card');
    bookDeleteButton.addEventListener('click', e => {
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
          <button class="book-delete">&#128465;</button>
          </article>
        `;
    libraryContainer.insertAdjacentHTML('afterbegin', bookCard);
  }
}

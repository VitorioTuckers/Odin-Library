import { Book } from './book.js';

const addBookButton = document.querySelector('#add-btn');
const formCloseButton = document.querySelector('#form-close');

const popup = document.querySelector('#popup');
const form = document.querySelector('#form');

export let library = [];

function togglePopUp() {
  popup.classList.toggle('hide');
  form.reset();
}

addBookButton.addEventListener('click', togglePopUp);
formCloseButton.addEventListener('click', togglePopUp);

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target).entries());
  library.push(new Book(formData.title, formData.author, formData.pages));
  togglePopUp();
});

const body = document.querySelector('body');
const library = document.querySelector('.library');
const newBook = document.querySelector('#new-book');
const form = document.querySelector('#book-form');
const bookTable = document.querySelector('.existing-books')

const myLibrary = [];

newBook.addEventListener('click', () => {
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
    }
});

addBookToLibrary('HP', "Rowling", 300, false);
addBookToLibrary('SP', "Rowling", 300, true);
addBookToLibrary('TWD', "Rowling", 300, false);


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    const readStatus = this.read === true ? 'already read' : 'not read yet';
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}.`
}

myLibrary.forEach(book => {
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.read}</td>
    `;
    bookTable.appendChild(newRow);

});

function addBookToLibrary(...args) {
    const book = new Book(...args);
    myLibrary.push(book);
}


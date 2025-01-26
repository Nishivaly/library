const body = document.querySelector('body');
const library = document.querySelector('.library');
const newBook = document.querySelector('#new-book');
const form = document.querySelector('#book-form');


const myLibrary = [];

newBook.addEventListener('click', () => {
    if (form.classList.contains('hidden')) {

        form.classList.remove('hidden');
    }

});

addBookToLibrary('HP', "Rowling", 300, false);
addBookToLibrary('SP', "Rowling", 300, false);
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
    const item = document.createElement('p');
    item.className = 'book';
    item.textContent = book.info();
    library.appendChild(item);
});

function addBookToLibrary(...args) {
    const book = new Book(...args);
    myLibrary.push(book);
}


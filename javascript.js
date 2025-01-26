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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#book-title').value
    const author = document.querySelector('#book-author').value
    const pages = document.querySelector('#book-pages').value
    const read = document.querySelector('#book-read').checked ? true : false;
    addBookToLibrary(title, author, pages, read);
    addBookToTable();
    form.reset();

    if (!form.classList.contains('hidden')) {
        form.classList.add('hidden');
    }
});

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

function addBookToTable() {
    while (bookTable.firstChild) {
        bookTable.removeChild(bookTable.firstChild);
    };
    myLibrary.forEach(book => {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = book.title;
        row.appendChild(titleCell);

        const authorCell = document.createElement('td');
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        const pagesCell = document.createElement('td');
        pagesCell.textContent = book.pages;
        row.appendChild(pagesCell);

        const readCell = document.createElement('td');
        readCell.textContent = book.read === true ? 'Yes' : 'No';
        row.appendChild(readCell);
       
        bookTable.appendChild(row);
    });
};

function addBookToLibrary(...args) {
    const book = new Book(...args);
    myLibrary.push(book);
}


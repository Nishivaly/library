const library = document.querySelector('.library');
const newBook = document.querySelector('#new-book');
const form = document.querySelector('#book-form');
const existingBooks = document.querySelector('.existing-books');
const bookTable = document.querySelector('.book-table');

const myLibrary = [];

newBook.addEventListener('click', () => {
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.querySelector('#book-title').value
    const author = document.querySelector('#book-author').value
    const pages = document.querySelector('#book-pages').value
    const read = document.querySelector('#book-read').checked ? true : false;
    addBookToLibrary(title, author, pages, read);
    updateBookTable();
    form.reset();

    if (!form.classList.contains('hidden')) {
        form.classList.add('hidden');
    }
});

bookTable.addEventListener('click', event => {
    if (event.target.classList.contains('book-removal')) {
        rowId = event.target.closest('tr').dataset.index;
        myLibrary.splice(rowId, 1);
        updateBookTable();
    }
    if (event.target.classList.contains('toggle-read')) {
        rowId = event.target.closest('tr').dataset.index;
        myLibrary[rowId].toggleRead();
        updateBookTable();
    }
});

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    toggleRead = () => {
        this.read = this.read ? false : true;
    }
}

function updateBookTable() {
    while (existingBooks.firstChild) {
        existingBooks.removeChild(existingBooks.firstChild);
    };
    myLibrary.forEach(book => {
        const row = document.createElement('tr');
        row.dataset.index = myLibrary.indexOf(book);

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
        readCell.textContent = book.read ? 'Yes' : 'No';
        row.appendChild(readCell);

        const changeRead = document.createElement('button');
        changeRead.textContent = 'Toggle read';
        changeRead.classList.add('toggle-read');
        row.appendChild(changeRead);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('book-removal');
        row.appendChild(removeButton);

        existingBooks.appendChild(row);
    });
};

function addBookToLibrary(...args) {
    const book = new Book(...args);
    myLibrary.push(book);
}
const myLibrary = [];

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

function addBookToLibrary(...args) {
    const book = new Book(...args);
    myLibrary.push(book);
}

addBookToLibrary('HP', "Rowling", 300, false);
addBookToLibrary('SP', "Rowling", 300, false);
addBookToLibrary('TWD', "Rowling", 300, false);

const library = document.querySelector('.library');

myLibrary.forEach(book => {
    const item = document.createElement('p');
    item.className = 'book';
    item.textContent = book.info();
    library.appendChild(item);
});
// const book = new Book('HP', "Rowling", 300, false);
// console.log(book.info());
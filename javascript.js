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



// const book = new Book('HP', "Rowling", 300, false);
// console.log(book.info());
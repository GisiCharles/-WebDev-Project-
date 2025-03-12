class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`Book added: ${book.title} by ${book.author}`);
    }

    removeBook(isbn) {
        const bookIndex = this.books.findIndex(book => book.isbn === isbn);
        if (bookIndex !== -1) {
            const removedBook = this.books.splice(bookIndex, 1)[0];
            console.log(`Book removed: ${removedBook.title}`);
        } else {
            console.log(`Book with ISBN: ${isbn} not found`);
        }
    }

    listBooks() {
        console.log("All Books:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} (ISBN: ${book.isbn})`);
        });
    }
}


const library = new Library();
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '12345');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', '67890');

library.addBook(book1);
library.addBook(book2);
library.listBooks();
library.removeBook('12345');
library.listBooks();

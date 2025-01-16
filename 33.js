// Class:

// Q33: Create a class representing a Book with properties like title, author, and year.Add a method to the Book class to get the book's age (current year - year of publication).

class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getAge(){
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year;
        return age;
    }
}

const book1 = new Book ('Begin Again', 'Emma Lord', 2023);

console.log(book1.title);
console.log(book1.author);
console.log(book1.year);

const bookAge = book1.getAge();

console.log(bookAge);


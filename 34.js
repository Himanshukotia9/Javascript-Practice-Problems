// Inheritance and Prototypes:

// Q34: Create a subclass `Magazine` that extends the `Book` class with an additional property `issue`.Add a method to the `Magazine` class to get the magazine's issue number.

class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Magazine extends Book{
    constructor(title, author, year, issue){
        super(title, author, year);
        this.issue = issue;
    }
    getIssueNumber(){
        const issueNumber = `Issue Number: ${this.issue}`;
        return issueNumber;
    }
}

const magazine1 = new Magazine('MyLife', 'Himanshu', 2023, 3);

console.log(magazine1.title);

console.log(magazine1.getIssueNumber());



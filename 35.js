// Prototypal Inheritance:

// Q35: Create an object `person` with properties like name and age. Then, create a new object `student` that inherits from `person` and has an additional property `studentId`.Add a method to the `person` object and demonstrate that `student` also has access to it.

const Person = {
    name: 'Himanshu',
    age: 24,
    introduce: function(){
        return`Hi, I am ${this.name} and I am ${this.age} years old`;
    }
}
const student = Object.create(Person)
student.studentId = 11800125;

console.log(student.name);
console.log(student.studentId);

console.log(Person);

console.log(student.introduce());


// Destructuring:

// Q32: Destructure an object to get its properties.

const person = {
    name: 'Himanshu',
    age: 24,
    occupation: 'Software Engineer',
    city: 'Jalandhar'
}

console.log(person);

const { name, occupation, ...left} = person

console.log(name);
console.log(occupation);
console.log(left);

// Closures

// Q19: Create a counter function using closures that increments and returns the count on each call.

function incCounter(){
    let count = 0;
    return function (){
        return ++count;
    }
}

let counter = incCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

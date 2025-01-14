// Closures

// Q20: Implement a private variable using closures.

function createCounter(){
    let count = 0;
    function increment (){
        count++;
        console.log("count :" + count);
    }
    return{
        incrementCounter: function(){
            return increment();
        },
        getCounter: function(){
            console.log(count);  
        }
    }
}

let counter = createCounter();

counter.incrementCounter();
counter.incrementCounter();
counter.getCounter();
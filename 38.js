// Random Exercise

// Q38: Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number.

function getTotal(groceries){
    let total = 0;
    for(const item of groceries){
        console.log(item);
        const itemPrice = item.qty * item.price;
        total += itemPrice;
    }
    return total;
}

const groceries = [
    {
        product: 'Milk',
        price: 28.50,
        qty: 3
    },
    {
        product: 'Bread',
        price: 55.00,
        qty: 1
    },
    {
        product: 'Maggi',
        price: 10.00,
        qty: 5
    },
]

console.log(getTotal(groceries))
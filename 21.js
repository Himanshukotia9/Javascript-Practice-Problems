// Prototypes:

// Q21: Create a prototype for a Product object with properties like name, price, and quantity. Add a method to the Product prototype to calculate the total value.

function Product(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
Product.prototype.CalculateTotalValue = function(){
    return this.price * this.quantity;
}

const Product1 = new Product("Iphone", 103000, 1);
const totalValue1 = Product1.CalculateTotalValue();

const Product2 = new Product("Adaptor", 1900, 2);
const totalValue2 = Product2.CalculateTotalValue();

const total = totalValue1 + totalValue2;

console.log (`You have bought an ${Product1.name} and ${Product2.name} worth ${Product1.price}rs and ${Product2.price}rs. Your total bill value is ${total}rs.`)
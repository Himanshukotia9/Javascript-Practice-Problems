// Objects

// Q5: Create an object representing a car with properties like make, model, and year.Add a method to the car object to start the engine.

let car = {
    make: "Toyota",
    model: "Hilux",
    year: 2024,
}
// new method created in car object
car.startEngine = () => {
    console.log("Vroom! The car engine is started.");
}
car.startEngine();
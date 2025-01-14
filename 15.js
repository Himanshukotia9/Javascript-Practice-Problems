// Date and Time

// Q15: Create a function that displays the current date and time in a specific format.

function displayCurrentDateTime() {
    let currentDateTime = new Date();
    return currentDateTime.toLocaleString();
}

console.log(displayCurrentDateTime())
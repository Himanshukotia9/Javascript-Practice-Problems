// Basic DOM Manipulation:

// Q7: Create a button dynamically and add it to the webpage.

let container = document.getElementById('root');

let button = document.createElement('button');
button.textContent = 'Click me';

container.appendChild(button);
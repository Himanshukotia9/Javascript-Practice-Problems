// Multidimensional Array:

// Q31: Create a JavaScript function that generates a 2D array with the specified number of rows and columns. Each element in the array should contain the sum of its row index and column index. Once you've created the array, write two additional functions to display the array in its original form and in reverse.

function create2DArray(rows, columns){
    let arr = [];
    for (let i = 0; i < rows; i++){
        arr.push(new Array(columns))
        for (let j = 0; j < columns; j++){
            arr[i][j] = i + j;
        }
    }
    return arr;
}

function display(arr){
    const original = document.getElementById('original')
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i].join('  '))
        original.innerHTML += arr[i].join(' ') + '<br>'
    }
}
function displayReverse(arr){
    const reverse = document.getElementById('reverse')
    for (let i = arr.length - 1; i >= 0; i--){
        console.log(arr[i].reverse().join('  '))
        reverse.innerHTML += arr[i].join(' ') + '<br>'
    }
}

const rows = 3;
const columns = 3;

const multiArray = create2DArray(rows,columns);

console.log('Original Array');
display(multiArray);
console.log('Reverse Array');
displayReverse(multiArray);
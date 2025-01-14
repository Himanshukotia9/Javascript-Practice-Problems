// Async Programming - Callbacks:

// Q22: Implement a function that makes multiple API calls and processes the data using callbacks.

function fetchApi(api, callback) {
    fetch(api)
        .then(res => res.json())
        .then(data => callback(data))
        .catch(err => console.error('Error fetching data:', err.message));
}
function handleData(data){
    console.log('Processed data: ', data)
}

function main() {
    const api1 = 'https://jsonplaceholder.typicode.com/posts/1';
    const api2 = 'https://jsonplaceholder.typicode.com/posts/2';

    fetchApi(api1,handleData);
    fetchApi(api2,handleData);
}

main();
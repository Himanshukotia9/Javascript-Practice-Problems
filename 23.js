// Q23: Implement a function that makes multiple API calls and processes the data using promises.

function fetchApi(api) {
    return fetch(api)
        .then(res => res.json())
}
function handleData(data){
    console.log('Processed data: ', data)
}

function main() {
    const api1 = 'https://jsonplaceholder.typicode.com/posts/1';
    const api2 = 'https://jsonplaceholder.typicode.com/posts/2';

    fetchApi(api1).then(handleData).catch(err => console.error('error processing data'));
    fetchApi(api2).then(handleData).catch(err => console.error('error processing data'));
}

main();
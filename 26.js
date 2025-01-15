// Async Programming - Async/Await:

// Q26: Implement an async function to fetch data from an API and handle errors using try/catch.

const fetchApi = async(url) => {
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Request failed with status ' + response.status)
        }
        else{
            return await(response.json());
        }
    }
    catch(error){
        console.error('Error fetching data:', error);
    }
}

fetchApi('https://jsonplaceholder.typicode.com/posts').then(data => console.log(data));
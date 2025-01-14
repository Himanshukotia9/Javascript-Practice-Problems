// Error Handling:

// Q16: Implement a try-catch block to handle an error that occurs during API data fetching.

const apiFetch = async() =>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}

apiFetch();
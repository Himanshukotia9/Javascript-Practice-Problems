// Set Timeout:

// Q30: Write the JavaScript code to implement the quote-changing feature.

//Quotes API Website => "https://dummyjson.com/docs/quotes"

let quote = document.querySelector('p');
const cite = document.querySelector('cite');

async function updateQuote() {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();
    if(response.ok){
        quote.textContent = data.quote;
        cite.textContent = data.author;
    }
    else{
        quote.textContent = "Error fetching data";
        console.log(data);
    }
}
updateQuote();

function changeQuote(){
    updateQuote();
};
// Set Interval
setInterval(changeQuote, 10000);
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

// Function to fetch a random quote from the DummyJSON API
const fetchQuote = async () => {
    try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        const data = await response.json();

        // Update the DOM with the new quote
        quoteElement.textContent = `"${data.quote}"`;
        authorElement.textContent = `— ${data.author}`;
    } catch (error) {
        quoteElement.textContent = "An error occurred. Please try again!";
        authorElement.textContent = "";
        console.error("Error fetching quote:", error);
    }
};

// Fetch a new quote on button click
newQuoteButton.addEventListener("click", fetchQuote);

// Fetch a quote when the page loads
fetchQuote();

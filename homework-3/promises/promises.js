//fetch data from an API (https://api.quotable.io/quotes?limit=20) using promises
//async function with an API call

async function getQuotables() {
    // API fetch 
    console.log("fetching..");
    const response = await fetch("https://api.quotable.io/quotes?limit=20");

    // Parse into JSON
    const results = await response.json();
    return results;
}

getQuotables()
    .then((data) => {
        // Check our quote data & store in variable
        console.log(data); 
        let quotes = data.results

        //for each quote, generate a a new div 
        quotes.forEach((quote) => {
            let wrapper = document.querySelector(".wrapper"); //grab wrapper

            let quotables = document.createElement("div");
            quotables.textContent = `"${quote.content}"`; // set quote
            quotables.classList.add("quotes"); 
            let author = document.createElement("p");
            author.textContent = `- ${quote.author}`; //set author name
            author.classList.add("author");  

            quotables.appendChild(author); //put authors under quotes
            wrapper.appendChild(quotables); //put quotes inside wrapper
        });
    })
    //catch errors
    .catch((error) => {
        console.log(error, "Failed to fetch data.");
        let errorContainer = document.getElementById("error-container");
        let errorMsg = document.createElement("p");
        errorMsg.classList.add("errors");
        errorMsg.textContent = "API Error: Failed to fetch data.";
        errorContainer.appendChild(errorMsg);
    });


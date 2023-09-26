//creating function to make 3 promises
async function promiseList() {
    const promiseOne = new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("First Promise");
            resolve("First Fufilled");
        }, 1000);
    });
    
    const promiseTwo = new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("Second Promise");
            resolve("Second Fufilled");
        }, 2000);
    });
    
    const promiseThree = new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("Third Promise");
            resolve("Third Fufilled");
        }, 3000);
    });
    
    const combinedPromises = Promise.all([promiseOne, promiseTwo, promiseThree]);
    return combinedPromises; //return all promises
}


async function returnPromises() {
    let resolvedPromises = await promiseList();
    console.log(resolvedPromises);
}

returnPromises();


//async function with an API call

async function goChuck() {
    //API Call
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    //console.log(response);

    //format into JSON
    const results = await response.json();
    return results;
}

goChuck().then((data) => {
    console.log(data); //check our results
    let chuckMsg = document.createElement("p");
    chuckMsg.innerHTML = data.value;
    document.getElementsByTagName("body")[0].appendChild(chuckMsg);

}).catch((error) => {
    console.log("Error!");
});
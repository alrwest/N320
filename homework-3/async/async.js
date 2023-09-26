//API: https://dog.ceo/api/breeds/image/random/20

//function to retrieve dog images, using await
async function getDogImages() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/20");

    //check response
    console.log("Grabbing the images!: " + response);

    //Parse into JSON
    const data = await response.json();
    return data.message;
    
}

//function to display dog images
async function displayDogImages() {
    //wait to retrieve images until we get a response
    getDogImages()
        .then(dogImages => {
            //put images in wrapper
        let dogWrapper = document.querySelector(".dog-wrapper");

        dogImages.forEach(images => {
            let image = document.createElement("img");
            image.src = images;
            dogWrapper.appendChild(image);
        });
    })

    .catch((error) => {
        console.log(error, "Failed to fetch data.");
        let errorContainer = document.getElementById("error-container");
        let errorMsg = document.createElement("p");
        errorMsg.classList.add("errors");
        errorMsg.textContent = "API Error: Failed to fetch data.";
        errorContainer.appendChild(errorMsg);
    });
}

displayDogImages();
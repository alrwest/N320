// create date obj
let date = new Date();
//grab element [h2]
let dateHeader = document.getElementsByTagName("h2")[1];

//display month, day year
let dateSettings = { month: 'numeric', day: 'numeric', year: 'numeric'};
//format date as a string
let formattedDate = date.toLocaleDateString('en-US', dateSettings);

//set date content & update DOM
dateHeader.textContent = formattedDate;
document.body.appendChild(dateHeader);



/*
*** create a simple JavaScript application that will utilize callback functions ***

- create a higher order function that will take in two numeric parameters and a callback function

- higher order function will find the arithmetic values of addition, subtraction, multiplication  and division of the two numbers

- use these values in your callback function and go through the values to find the average of all the values

- Use the data from your functions to display the information listed above
*/


//defining numeric params
let paramOne = 4;
let paramTwo = 7;

//print params in paragraph
let paragraphOne = document.createElement("p"); //create new 'p' tag
paragraphOne.textContent = `${paramOne} ` + `${paramTwo}`;
document.body.appendChild(paragraphOne);


const arithmeticValues = (paramOne, paramTwo, cb) =>  {
    let addition = paramTwo + paramOne;
    let subtraction = paramTwo - paramOne;
    let multiplication = paramOne * paramTwo;
    let division = Math.floor(paramTwo / paramOne);

    cb(addition, subtraction, multiplication, division);
};

const cb = (addition, subtraction, multiplication, division) => {
    let total = addition + subtraction + multiplication + division; //total

    let average = ( total / 4); //average 


    let paragraphTwo = document.createElement("p"); //create new 'p' tag
    paragraphTwo.textContent = `${total}`;
    document.body.appendChild(paragraphTwo);

    let paragraphThree = document.createElement("p"); //create new 'p' tag
    paragraphThree.textContent = `${average}`;
    document.body.appendChild(paragraphThree);
};


//call function
arithmeticValues(paramOne, paramTwo, cb);


/*Working the DOM

- anything you can do with CSS, you can select with querySelector!
- You can grab elements by multiple identifiers, such as ID, className, tagName, etc!

Good for single values: 
-querySelector (non-All)
-getElementByID

Good for lists:
-getElementsByClassName
-getElementsByTagName
-querySelectorAll
*/

//Return one element: querySelector

document.querySelector('div>ul>li:first-child').innerHTML = 'querySelector';
document.querySelector('.my-class').innerHTML = 'This is the leading line!';

//Return all elements: querySelectorAll
document.querySelectorAll('body>ul li')[1].innerHTML = "querySelectorAll!"

//Grabbing by className
document.getElementsByClassName('my-class')[2].innerHTML = "An example of class name, it can be reused on multiple elements!";


/* Call back functions!
    - good practice is to use your callBack function as a parameter for your other function!
*/

function callBack() {
    console.log("This is a callback Function!");
}

function higherOrder(newFn) {
    console.log("Before callback");
    newFn();
    console.log("After calling function!");
}

//callBack();

//higherOrder(callBack);

//A variable to define msg, but you can also set param value when calling the function! i.e functionName("Here is another secret message!");

//let msg = "This is a secret message. Only to be discovered by few!"

function firstFunction(msg) {
    alert(msg);
}

function middleFunction(msg) {
    return confirm(msg);
}

function lastFunction(msg) {
    console.log(msg);
}

firstFunction("What is the secret message?");
middleFunction("What secret message?");
lastFunction("This one!");


//this function/arrow context is the same thing as function startFunction(msg, mFn) !

//use const!
//this => function method is great for sliming code! works like function myFunction() format.

const startFunction = (msg, nFn) => {
    alert(msg);
    nFn(msg, endFunction);
}


const nextFunction = (msg, eFn) => {
        console.log(msg);
        eFn(msg); //no need to call third function; this nextFunction calls it for you!
}

const endFunction = (msg) => {
    return confirm(msg);
}

startFunction('Here is the beginning. Callback message...', nextFunction);

//creating our list
const costList = (subT, tip, total) => {
        let createList = `<ul><li>Subtotal: ${subT} </li> <li>Tip: ${tip} </li> <li> Total: ${total} </li></ul>`;

        document.write(createList); //writing our list in HTML
}

//our callback function is our costList function !
//our default value in this case, is taxRate! if one is not given at call time, use provided 0.07 defined in param!

const calcTotal = (subT, tip, callback, taxRate =0.07) => {
    let total = subT + (subT*taxRate) + tip;
    total = total.toFixed(2); 

    //let dinner = [subT, tip, total];

    callback(subT, tip, total);

}

calcTotal(34.95, 10.50, costList);

//callback function to find middle string
/*
Write a function that will take a string and find the middle character. you will write a higher order function that will find the middle position and the callback function will find what the middle character is and print it out using document.write
*/

//function to find middle position
const cb = (h, m, a) => {
    let mLetter = a[h];
    let mL2 = m[h];
    document.write(`Middle letter: ${mLetter} ${mL2}`);

}

const midPos = (msg, cb) => {
    let sl = msg.length;
    let half = Math.floor(sl/2); //round down our fraction, over 2
    let sArray = msg.split("");  //create an empty array to dump string contents into
    cb(half, msg, sArray); //callback
}

midPos("weewooweewoo", cb);
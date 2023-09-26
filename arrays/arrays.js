//Array methods in JS

//For each
let arr =[1,2,3];

arr.forEach(value => {
    console.log("forEach values:" + value);
});


function doubleValues(arr) {
    var doubledArr =[];
    arr.forEach(value => {
        doubledArr.push(value * 2);
    });
    return doubledArr;
}
console.log("We doubled the values in our array!: ", doubleValues(arr));

// ***** Every & Some only deal with boolean vals! *****

//Every
var everyArr = [-1,-2,-3];

var everyFunction = everyArr.every(value => {
        return value < 0;
});

console.log("Every Function!: ", everyFunction);

var everyFunction2 = everyArr.every(value => {
    return value > -2;
});

console.log("Every Function 2!: ", everyFunction2);

//checking to see if characters are all lowercase
function allLowerCase(str) {
        return str.split("").every(value => {
            return value == value.toLowerCase();
        });
}

console.log("All lowercase 1:", allLowerCase("This is a sentence!"));


//check to see if all array values are arrays
function allArrays(arr) {
    return arr.every(Array.isArray);
}

console.log("All Arrays 1:", allArrays([[1,2,3], [true], ["dog", "cat"]]));

//Some
var someArray=[10,20,30,40];

var someFunction = someArray.some(value => {
    return value < 20;
});

console.log("Some of these vals are true, some false! But, if at least some are true, it's true!:", someFunction);

function hasEvenNum(arr) {
    return arr.some(value => {
        return value % 2 == 0;
    });
}

console.log("Has even number?:", hasEvenNum([1,3,5,7,10]));
//Filter


//Map
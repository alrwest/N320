//Array methods in JS

//For each
let arr =[1,2,3];

arr.forEach(number => {
    console.log("forEach number:" + number);
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
var fArr = [1,2,3];

var firstFilter = fArr.filter(function(value) {
    return value > 2;
})

console.log("first filter", firstFilter);


//only names with 4 letters
var names = ['Carrie-Anne', 'Gabe', 'Brent', 'Abby', 'Matt'];

function fourLetters(arr) {
    return arr.filter(function(value) {
        return value.length === 4;
    })
}
console.log("four letters: ", fourLetters(names));



//filtering classlists
var classList = ['N115', 'N220', 'N320', 'N317', 'N420', 'N223'];

function upperLevel(arr) {
    return arr.filter(function(value) {
        return value.substr(1,3) > 300;
    });
}
console.log("class filter:", upperLevel(classList));

let students = [
    {
        First: "Greg", Last: "Smith", Employed: "true"
    },
    {
        First: "Lucy", Last: "Lubert", Employed: "true"
    },
    {
        First: "Sallie", Last: "Richards"
    },
    {
        First: "Kelcee", Last: "Rodgers"
    }
]

function filterByIndex(arr, key) {
    return arr.filter(function(value) {
        //returning objects that don't contain that specific employed index
        return !value[key];
    })
}
console.log("Not employed!: ", filterByIndex(students,'Employed'));

//Map
let mArr = [1,2,3,4,5,6];

let mapArray = mArr.map(function(value, index) {
        return {
            key: index, value: value*value
        };
})

console.log("Squared:", mapArray);

function firstNames(arr) {
    return arr.map(function(value){
        return value.First;
    })
}

console.log("Only first names", firstNames(students));

function vtIndex(arr) {
    return arr.map(function(value, index) {
        return value * index;
    });
}

console.log("Val * Index:", vtIndex(([2,5,9,7])));

/*** Code Challenges */
function hasAZ(str) {
        //return "true" if string contains a "z"
        return str.split('').some(function(value){
            return value == 'z';
        });
}
console.log("has a z:", hasAZ("hello there"));


function hasOnlyOddNumbers(arr) {
    return arr.every(function(value) {
        return value % 2 != 0;
    })
}

console.log("Only odd: " + hasOnlyOddNumbers([1,3,5,7]), "only even : " + hasOnlyOddNumbers([10,8,4,6]));



//Reduce

//2 parts: a callback and initalValue
//Callback: accumulator, nextValue

let reduceArr = [1,2,3,4,5];

var reduceFn = reduceArr.reduce(function(accumulator, nextValue) {
        return accumulator + nextValue;
}, 10);

console.log("Reduce fn 1", reduceFn);

var reduceFn2 = reduceArr.reduce(function(accumulator, nextValue) {
    return accumulator + nextValue;
});

console.log("Reduce fn 2", reduceFn2);

let family =['Will', 'Abby', 'Richie'];
//Output: my family members are will abby richie

let nameFunction = family.reduce(function(accumulator, nextValue) {
        return accumulator += " " + nextValue;
}, "My family members are");


console.log("Name reduction" + nameFunction);

//obj reduction

let familyMembers = [{
    'first': 'Abby', 'age': 24
}, {
    'first': 'Lenny', 'age': 21
}, {
    'first': 'Richie', 'age': 27
}];

function extractVal(arr, key) {
    return familyMembers.reduce(function(accumulator, nextValue){
        accumulator.push(nextValue[key]);
        return accumulator;
    }, []);
}

console.log("first name array", extractVal(familyMembers, first));

//short/long family names
//using family array

function nameLength(value) {
    return value.length > 4;
}

function parition(arr, callback) {
    return arr.reduce(function(accumulator, nextValue) {
            if(callback(nextValue)) {
                accumulator[0].push(nextValue);
            } else {
                accumulator[1].push(nextValue);
            }
            return accumulator;
    },[[],[]]);
}
console.log(parition(family, nameLength));

//coding challenge
var redArray = [1,2,3,4,5];

var reduceFun = redArray.reduce(function(accumulator, nxVal) {
    let num = nxVal * nxVal;
    console.log(num);
    //if number is even
    if (num % 2 == 0) {
        return accumulator + num;
    }
    return accumulator;
},50);

console.log("our reduce function! here is the result ", reduceFun);
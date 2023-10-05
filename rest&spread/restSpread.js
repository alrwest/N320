;

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

//Rest
//Takes the "Rest" of the values and puts them into an array
function add(...nums) {
    let total = 0;

    for (const n of nums) {
        total+=n;
    }
    console.log(nums);
    return total;
}

console.log("Add function!", add(1,3,2,4,7)); //doesn't work with arrays. it TURNS objects into an array.

function printVal(a,b,...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}


printVal(1,2,3,4,5,6,7);

function cb(num1, num2, ...mValues) {
   let total = mValues.reduce(function(accumulator, next) {
        accumulator += next;
        return accumulator;
    }, 0);
    let myAvg = total/mValues.length;
    console.log("total:", total);
    console.log("average:", Math.round(myAvg));
}

function higherOrder(num1, num2, cb) {
    let a = num1 + num2;
    let s = num1-num2;
    let m = num1*num2;
    let d = num1/num2;
    cb(num1,num2,a,s,m,d);
}   

higherOrder(4,2,cb);

//Spread
//Takes an array and "SPREADS" them out to individual values

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let arr3 = [18,20,22];

let combine = [...arr1, ...arr2, ...arr3];
console.log(combine);
console.log("max value:", Math.max(...combine));


function sumVal(a,b,c) {
    return a + b + c;
}

console.log(sumVal(...arr1));

function inMiddle(arr,vals) {
    let mid = Math.floor(arr.length/2); //midway point
    arr.splice(mid, 0, ...vals);

    return arr;
}

console.log("place in the middle", inMiddle([1,7], [2,3,4,5,6]))
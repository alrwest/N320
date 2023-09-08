//Callback functions || Day 2

//setTimeout()

setTimeout(function () {
    console.log("Time is up!");
}, 2000);

function callback () {
    console.log("Callback function");
}

setTimeout(callback, 1000);

//set interval

function cb() {
    console.log("callback is called continously!")
}

//setInterval(cb, 3000);

var num = 0;
var intervalID = setInterval(function() {
    num++;
    console.log(`Current number: ${num}`);
    if (num === 5) {
        console.log(intervalID);
        clearInterval(intervalID);
    }
}, 2000);


//for each loops

var arr = [1,2,3,4,5];
 function forLoopArray(arr) {
    for (var i = 0; i< arr.length; i++) {
        console.log(arr[i]*2);
    }
 }

 forLoopArray(arr);

 arr.forEach(function(number) {
    console.log(number*2);
 });


 var instruments = ['drums', 'keyboard', 'guitar'];

 //say: drums, guitar, keyboard !!
var results =[];
 
    instruments.forEach(function(item, index, arr) {
        if(arr.length-1 !== index) {
            results+=item + " ";
        } else {
            results+=item + " !! ";
        }
    })

    console.log(results);
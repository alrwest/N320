//Music List

var music = ['Rock', 'Alternative', 'Rap', 'Heavy-metal', 'Pop'];

//one type of loop

/* for (var i = 0; i < music.length; i ++) {
    console.log(music[i]);
}
*/

for (type of music) {
    console.log(type);
}

//favorite genre
document.querySelectorAll('p')[1].innerHTML = "My favorite genre is " + music[1] + ".";


function Animals(breed, color) {
    document.getElementById('animals').innerHTML = "I have a " + breed + " that is " + color + ".";
}

Animals("Lab", "purple");
Animals("Snake", "lemon-yellow");

//color function
function getName() {
    var userName = document.getElementById('myName').value;
    //prompt user for favorite color
    var color = prompt("Welcome " + userName + " What is your favorite color?");
    document.getElementsByTagName('body')[0].style.backgroundColor = color;
}

//document.getElementsByTagName('button')[0].addEventListener('click', getName);

//get input + add button
var numPick = document.createElement('input');
numPick.id = 'numPick';
numPick.placeholder = 'Enter a number';

//submit button
var submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
submitButton.id = 'submitButton';

//add to our HTML
document.body.appendChild(numPick);
document.body.appendChild(submitButton);

//getNum function
function getNum() {
    var userNum = document.getElementById('numPick').value;

    //do while loop 
    do {
        if (userNum >= 7) {
            if (userNum % 7 == 0) {
                alert(userNum + "is the first number divisible by 7!");
                break; //end
            }
            console.log("Not yet...");
            userNum --;
        } else {
            alert("No matches...");
        }
    
    } while (userNum > 7)
}

document.getElementById('submitButton').addEventListener('click', getNum);


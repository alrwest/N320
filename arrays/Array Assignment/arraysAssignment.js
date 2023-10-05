//student Array
const students = [

    { name: 'Alice', grades: [85, 92, 78, 90] },
   
    { name: 'Bob', grades: [75, 88, 95, 100] },
   
    { name: 'Charlie', grades: [60, 72, 68, 74] },
   
    { name: 'David', grades: [92, 88, 95, 98] },
   
    { name: 'Eve', grades: [100, 100, 100, 100] }
   
    ];

    //display names
    const sList = document.getElementsByClassName("sList");

    students.forEach(student => {
        let listElement = document.createElement('p');
        listElement.textContent = student.name;
        sList[0].appendChild(listElement);
    });


    //check to see if students passed using the every function
    var allPass = students.every(students => {
        return students.grades.every(grade => grade >= 60);
    });

    function displayPassingStudents() {
        let pTag1 = document.getElementsByTagName("p")[7];
        pTag1.textContent = allPass;
    }
    displayPassingStudents();


//some method to see if at least one student has a perfect record
var perfectRecord = students.some(students => {
    let perfectGrade = 100;
    return students.grades.some(grade => grade === perfectGrade);
});
//console.log(perfectRecord);

function displayPerfectRecord() {
    let pTag9 = document.getElementsByTagName("p")[9];
    pTag9.textContent = perfectRecord;
}
//displayPerfectRecord();


//create a list of students with an average grade of 90+
const goodGrades = () => {
    let bestStudents = students.filter(function(student) {
        let gradeSum = student.grades.reduce((accumulator, grade) => accumulator + grade, 0);
        let average = gradeSum / student.grades.length;
        return average >= 90;
    });

    //mapping out just the names of students
    return bestStudents.map(student => student.name)
}
console.log("best students:", goodGrades());

//mapping new array to show average of all students and their name in an unordered list 

const getStudentSummaries = () => {
    const studentSummaries = students.map(student => {
        let gradeSum = student.grades.reduce((accumulator, grade) => accumulator + grade, 0);
        let average = gradeSum / student.grades.length;
       return {
        name: student.name,
        average: average
       };
    });  
    return studentSummaries;
}

console.log(getStudentSummaries());
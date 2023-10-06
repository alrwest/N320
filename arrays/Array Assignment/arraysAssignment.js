//students Array
const students = [

    { name: 'Alice', grades: [85, 92, 78, 90] },
   
    { name: 'Bob', grades: [75, 88, 95, 100] },
   
    { name: 'Charlie', grades: [60, 72, 68, 74] },
   
    { name: 'David', grades: [92, 88, 95, 98] },
   
    { name: 'Eve', grades: [100, 100, 100, 100] }
   
    ];

    //forEach loop / display names
    students.forEach(student => {
        const sList = document.getElementsByClassName("sList");
        let studentList = document.createTextNode(student.name + " ");
        sList[0].appendChild(studentList);
    });

    //check to see if every student passed 
    var allPass = students.every(students => {
        return students.grades.every(grade => grade >= 60);
    });

    let passedTag = document.getElementsByTagName("p")[1];
    let passedText = document.createTextNode(allPass);
    passedTag.appendChild(passedText);


//some method to see if at least one student has a perfect record
var perfectRecord = students.some(students => {
    let perfectGrade = 100;
    return students.grades.some(grade => grade === perfectGrade);
});

//console.log(perfectRecord);
let recordTag = document.getElementsByTagName("p")[2];
let recordText = document.createTextNode(perfectRecord);
recordTag.appendChild(recordText);


//create a list of students with an average grade of 90+
 const goodGrades = students.filter((student) => {
            let gradeSum = student.grades.reduce((accumulator, grade) => accumulator + grade, 0);
            let average = gradeSum / student.grades.length;
            return average >= 90;
    });

    //console.log("best students:", goodGrades);
    let bestStudents = goodGrades.map(student => student.name);

let bestStudentsTag = document.getElementsByTagName("p")[3];
let bestStudentsText = document.createTextNode(bestStudents);
bestStudentsTag.appendChild(bestStudentsText);

//mapping new array to show average of all students
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

//console.log(getStudentSummaries());
let studentSummaries = getStudentSummaries();

const displayAverages = (studentSummaries) => {
    studentSummaries.forEach(value => {
        let studentAvgs = document.getElementById('studentAvgs');
        let listEl = document.createElement('li');
        listEl.textContent = "Name: " + value.name + "," + " " + "Grade Average: " + value.average;
        studentAvgs.appendChild(listEl);
    });
}
displayAverages(studentSummaries);

//using reduce to total # of calculate grades
const totalNum = students.reduce((accumulator, student) => {
    return accumulator + student.grades.length;
}, 0);

//console.log(totalNum);

let totalNumPTag = document.getElementsByTagName('p')[5];
let totalNumText = document.createTextNode(totalNum);
totalNumPTag.appendChild(totalNumText);
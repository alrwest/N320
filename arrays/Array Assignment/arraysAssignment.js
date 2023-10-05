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

   

import Teacher from './teacher.js'
import Student from './student.js'

// Button:

let btn = document.createElement("button");
btn.innerHTML = "Click Me";
btn.type = "Generate";
btn.name = "greetingsBtn";
btn.onclick = function () {
   

const students = [];


// Teachers:

let teacher1 = new Teacher("Lindsey Cohen", 786553, "Biology");
let teacher2 = new Teacher("John McAlister", 528930, "Chemestry");
let teacher3 = new Teacher("Marc Rebillet", 647386, "Literature");


//   Students:

let student1 = new Student("Sharleen Rollo", 254, "description");
let student2 = new Student("Della Wally", 567,"description");
let student3 = new Student("Ryana Ami", 572,"description");

students.push(student1, student2, student3);

teacher1.assignStudents(students);

teacher1.assignStudentTasks(student1);
teacher1.assignStudentTasks(student2);
teacher1.assignStudentTasks(student3);
teacher1.greetings();


teacher2.assignStudents(students);

teacher2.assignStudentTasks(student1);
teacher2.assignStudentTasks(student2);
teacher2.assignStudentTasks(student3);
teacher2.greetings();

teacher3.assignStudents(students);

teacher3.assignStudentTasks(student1);
teacher3.assignStudentTasks(student2);
teacher3.assignStudentTasks(student3);
teacher3.greetings();

};

document.body.appendChild(btn);





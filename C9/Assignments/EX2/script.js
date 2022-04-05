import {Task} from "./task.js";
import {Student} from "./student.js";
import {Teacher} from "./teacher.js";

const teacher1 = new Teacher("Mihaela", "Matematica", 1);
const teacher2 = new Teacher("Ioana", "Romana", 2);
const teacher3 = new Teacher("Radu", "Muzica", 3);

const student1 = new Student("Andrei", 1 , "Bun la matematica");
const student2 = new Student("Mihai", 2 , "Bun la romana");
const student3 = new Student("Ionica", 3 , "Bun la desen");

const task1 = new Task("Cantat", 1, "Cantat la vioara", true, " o ora");
const task2 = new Task("Desenat", 2, "Pictat pe panza", true, " o ora");
const task3 = new Task("Construit", 3, "Construit cu caramida", true, " o ora"); 

teacher1.assignStudents([student1 , student2]);
teacher2.assignStudents([student2]);
teacher3.assignStudents([student3]);

teacher1.assignStudentTasks(student1, [task1 , task2]);
teacher1.assignStudentTasks(student2, [task1]);

const teacherList = [teacher1 , teacher2 , teacher3 ];

window.addEventListener('load', function () {
    document.getElementById('generate').addEventListener("click", teachersMessage);
});

function teachersMessage() {
    teacherList.forEach(teacher => {
        console.log(`Hello, my name is Mr. ${teacher.teacherName}, and I am teaching ${teacher.subject}.
I have the following students: ${allStudentsForTeacher(teacher.students)} each with their tasks${studentsWithTheirTasks(teacher.students)}`);
    });
}

function allStudentsForTeacher(studentList) {
    const studentListNames = [];

    studentList.forEach(student => {
        studentListNames.push(student.studentName);
    });

    return studentListNames;
}

function studentsWithTheirTasks(studentList) {
    const studentTasksList = [];

    studentList.forEach(student => {
        const taskList = [];

        student.tasks.forEach(task => {
            taskList.push(task.taskName);
        });

        const studentTasks = ` ${student.studentName}: ${taskList}`;
        studentTasksList.push(studentTasks);
    });

    return studentTasksList;
}



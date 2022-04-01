import {Task} from "./task.js";
import {Student} from "./student.js";
import {Teacher} from "./teacher.js";

const task1 = new Task(1, 'Task1', 'description1', false, '1h');
const task2 = new Task(2, 'Task2', 'description2', true, '1h');
const task3 = new Task(3, 'Task3', 'description3', false, '1h');
const task4 = new Task(4, 'Task4', 'description4', true, '1h');

const student1 = new Student(1, 'Student1', 'description1');
const student2 = new Student(2, 'Student2', 'description2');
const student3 = new Student(3, 'Student3', 'description3');
const student4 = new Student(4, 'Student4', 'description4');

const teacher1 = new Teacher(1, 'Teacher1', 'subject1');
const teacher2 = new Teacher(2, 'Teacher2', 'subject2');
const teacher3 = new Teacher(3, 'Teacher3', 'subject3');

teacher1.assignStudentTasks(student1, [task1, task2]);
teacher1.assignStudentTasks(student2, [task3, task4]);
teacher1.assignStudentTasks(student3, [task3]);
teacher1.assignStudentTasks(student4, [task4]);

teacher1.assignStudents([student1, student2]);
teacher2.assignStudents([student3, student4]);
teacher3.assignStudents([student3]);

const teacherList = [teacher1, teacher2, teacher3];

window.addEventListener('load', function () {
    document.getElementById('generate').addEventListener("click", generateTeachersMessage);
})

function generateTeachersMessage() {
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

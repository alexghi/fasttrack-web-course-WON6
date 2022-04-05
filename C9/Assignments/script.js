

import {Task} from "./task.js";
import {Student} from "./student.js";
import {Teacher} from "./teacher.js";


function getTasksOfAllStudentsOfTeacher(teacher) {
  var studentsList = teacher.students;
  var index;
    for (index in studentsList) {
        console.log(`Studentul`, studentsList[index], `are urmatoarele taskuri:` , studentsList[index].tasks);
    }
  
}

function teacherPresentation(teacher) {
  console.log(
    `Hello, my name is ${teacher.numeTeacher} , and
    I'm teaching ${teacher.materie}. I have the following 
    students:`,
    teacher.students,
    `each with their tasks: `);
    getTasksOfAllStudentsOfTeacher(teacher);
  
}

let mathTeacher = new Teacher("geo", 101, "mate");
let bioTeacher = new Teacher("bob", 102, "bio");
let englishTeacher = new Teacher("Engie", 103, "english")

let firstStudent = new Student("fifi", 1001, "aaa");
let secondStudent = new Student("sisi", 1002, "bbb");
let thirdStudent = new Student("titi", 1003, "ccc");



mathTeacher.assignStudents([firstStudent, secondStudent]);
bioTeacher.assignStudents([firstStudent, secondStudent, thirdStudent]);
englishTeacher.assignStudents([thirdStudent]);

mathTeacher.assignStudentTasks(firstStudent, [Task.Lab, Task.Practica]);
mathTeacher.assignStudentTasks(secondStudent, [Task.Implem, Task.Practica, Task.Teorie]);

bioTeacher.assignStudentTasks(firstStudent, [Task.Lab, Task.Teorie]);
bioTeacher.assignStudentTasks(secondStudent, [Task.Implem, Task.Teorie]);
bioTeacher.assignStudentTasks(secondStudent, [Task.Practica, Task.Implem, Task.Teorie]);


englishTeacher.assignStudentTasks(thirdStudent, [Task.Teorie, Task.Lab, Task.Practica, Task.Implem]);

teacherPresentation(mathTeacher);
teacherPresentation(bioTeacher);
teacherPresentation(englishTeacher);

//console.log(firstStudent.getAssignedTasksByTeacher(mathTeacher));
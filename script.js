class Teacher {
  constructor(numeTeacher, idTeacher, materie) {
    this.numeTeacher = numeTeacher;
    this.idTeacher = idTeacher;
    this.materie = materie;
  }

  assignStudents(studentsList = []) {
    return (this.students = studentsList);
  }

  getStudents() {
    return this.students;
  }

  assignStudentTasks(student, tasks = []) {
    return (student.tasks = tasks);
  }
  getStudentTasks(student) {
    return student.tasks;
  }
}

class Task {
  constructor(numeTask, idTask, taskDescription, isCompleted, orar) {
    this.numeTask = numeTask;
    this.idTask = idTask;
    this.taskDescription = taskDescription;
    this.isCompleted = isCompleted;
    this.orar = orar;
  }

    static Lab = new Task("laborator", 01, "lab1", true, 'marti_10-12');
    static Practica = new Task("practica", 02, "lab2", false, 'miercuri-11 - 12');
    static Teorie = new Task("teorie", 03, "lab3", true, 'joi-12 - 13');
    static Implem = new Task("implementare", 04, "lab4", false, 'vineri-13 - 14');
}

class Student {
  constructor(numeStudent, idStudent, studentDescription) {
    this.numeStudent = numeStudent;
    this.idStudent = idStudent;
    this.studentDescription = studentDescription;
  }
  getAssignedTasksByTeacher(teacher) {
    console.log(`Studentul`, this.numeStudent, `are asignate de catre profesorul`, teacher.numeTeacher, ` urmatoarele taskuri: `, teacher.getStudentTasks(this));
  }
}
function getTasksOfAllStudentsOfTeacher(teacher) {
  var studentsList = teacher.students;
  
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

let mathTeacher = new Teacher("geo", 001, "mate");
let bioTeacher = new Teacher("bob", 002, "bio");
let englishTeacher = new Teacher("Engie", 003, "english")

let firstStudent = new Student("fifi", 0001, "aaa");
let secondStudent = new Student("sisi", 0002, "bbb");
let thirdStudent = new Student("titi", 0003, "ccc");



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
export default class Teacher {
    constructor(teacherName, teacherId, schoolSubject) {
        this.teacherName = teacherName;
        this.teacherId = teacherId;
        this.schoolSubject = schoolSubject;
        this.students = [];
    }
    assignStudents(listOfStudents) {
        this.students = listOfStudents;
    }
    getStudents() {
        return this.students;
    }

    assignStudentTasks(student, listOfTask) {
        student.tasks = listOfTask;
    }

    getStudentTasks(student) {
        return student.tasks;
    }

    describeMe() {
        console.log(`Hello, my name is ${this.teacherName} and I am teaching ${this.schoolSubject}. I have the following students: `)
        for (let student of this.students) {
            console.log(student.studentName + " with their tasks: ");
            for (let task of student.getAssignedTasks()) {
                console.log(task.name);
            }
        }
    }

};


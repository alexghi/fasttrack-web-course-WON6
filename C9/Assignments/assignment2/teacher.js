export class Teacher {
    constructor(idTeacher, teacherName, subject) {
        this.idTeacher = idTeacher;
        this.teacherName = teacherName;
        this.subject = subject;
        this.students = [];
    }

    assignStudents(studentList) {
        this.students = studentList;
    }

    getStudents() {
        return this.students;
    }

    assignStudentTasks(student, taskList) {
        student.tasks = taskList;
    }

    getStudentTasks(student) {
        return student.tasks;
    }
}

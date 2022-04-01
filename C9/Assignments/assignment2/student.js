export class Student {

    constructor(idStudent, studentName, description) {
        this.idStudent = idStudent;
        this.studentName = studentName;
        this.description = description;
        this.tasks = [];
    }

    getAssignedTasks() {
        return this.tasks;
    }
}
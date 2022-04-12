export default class Student {
    constructor(studentName, studentId, studentDescription,) {
        this.studentName = studentName;
        this.studentId = studentId;
        this.studentDescription = studentDescription;
        this.tasks = [];
    }

    getAssignedTasks() {
        return this.tasks;
    }
};
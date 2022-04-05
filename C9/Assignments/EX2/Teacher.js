export class Teacher {
  constructor(teacherName, subject, teacherId) {
    this.teacherName = teacherName;
    this.teacherId = teacherId;
    this.subject = subject;
    this.students = [];
  }

  assignStudentTasks(student, taskList) {
    student.tasks = taskList;
  }

  getStudentTasks(student) {
    return student.tasks;
}

  assignStudents(studentsList) {
    this.students = studentsList;
  }

  getStudents() {
    return this.students;
}
}

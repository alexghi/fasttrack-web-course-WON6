export class Teacher {
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

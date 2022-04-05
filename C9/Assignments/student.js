export class Student {
    constructor(numeStudent, idStudent, studentDescription) {
      this.numeStudent = numeStudent;
      this.idStudent = idStudent;
      this.studentDescription = studentDescription;
    }
    getAssignedTasksByTeacher(teacher) {
      console.log(`Studentul`, this.numeStudent, `are asignate de catre profesorul`, teacher.numeTeacher, ` urmatoarele taskuri: `, teacher.getStudentTasks(this));
    }
  }


export class Student {
  constructor (studentName, studentId, description) {
    this.studentName = studentName;
    this.description = description;
    this.studentId = studentId;
    this.tasks = [];
  }

  getAssignedTasks(){
      return this.tasks ;
}

}

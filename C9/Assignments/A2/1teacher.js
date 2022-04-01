export default class teacher {
  constructor(teacherName, teacherId, subject) {
    this.teacherName = teacherName;
    this.teacherId = teacherId;
    this.subject = subject;
    this.students = [];
  }

  assignStudents(studentsList ) {
    this.students = studentsList;
  }

  getStudents() {
    return this.students;
  }

  describeMe(){
    console.log(`Hello, my name is ${this.teacherName} and I’m teaching ${this.subject}. I have the following students: `)
    for ( let student of this.students){
      console.log(student.studentName + " with their tasks: ");
      for (let task of student.getTasks()){
        console.log(task.taskName);
      }
    }
  }

 
}

export default class student{
    constructor(studentName, studentId, description ){
        this.studentName = studentName;
        this.studentId = studentId;
        this.description = description;
        this.tasks = [];
    }

    assignTasks(tasks){
        this.tasks = tasks;
  
    }
  
    getTasks() {
        return this.tasks;
    }

    
}
export class Task {
    constructor(numeTask, idTask, taskDescription, isCompleted, orar) {
      this.numeTask = numeTask;
      this.idTask = idTask;
      this.taskDescription = taskDescription;
      this.isCompleted = isCompleted;
      this.orar = orar;
    }
  
      static Lab = new Task("laborator", 1, "lab1", true, 'marti_10-12');
      static Practica = new Task("practica", 2, "lab2", false, 'miercuri-11 - 12');
      static Teorie = new Task("teorie", 3, "lab3", true, 'joi-12 - 13');
      static Implem = new Task("implementare", 4, "lab4", false, 'vineri-13 - 14');

       
  }
  
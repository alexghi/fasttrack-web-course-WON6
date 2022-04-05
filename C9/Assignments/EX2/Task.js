export class Task {
  constructor( taskName, taskId, taskDescription, isStatusCompleted, availableTime) {
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.taskId = taskId;
    this.isStatusCompleted = isStatusCompleted;
    this.availableTime = availableTime;
  }
}


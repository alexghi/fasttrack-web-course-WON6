export class Task {

    constructor(idTask, taskName, description, isStateCompleted, availabilityRangeDate) {
        this.idTask = idTask;
        this.taskName = taskName;
        this.description = description;
        this.isStateCompleted = isStateCompleted;
        this.availabilityRangeDate = availabilityRangeDate;
    }
}
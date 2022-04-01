export default class Task {
    constructor(taskName, taskId, state, startHour, endHour){
        this.taskName = taskName;
        this.taskId = taskId;
        this.state = state;
        this.startHour = startHour;
        this.endHour = endHour;
    }

}
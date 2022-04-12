export default class Task {
    constructor(name, id, description, completeState, hour) {
        this.name = name
        this.id = id
        this.description = description
        this.completeState = completeState
        this.hour = hour
    }

    assignHour(hour){
        let schedule = new Date()
        let setSchedule = schedule.setHours()
    }
}

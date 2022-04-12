export default class Student {

    constructor(name, id, description) {
        this.name = name
        this.id = id
        this.description = description
        this.tasks = []
    }

    getAssignedTasks() {
        return this.tasks
    }
}




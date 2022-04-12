export class Task {
    constructor(name, id, description, completeState, availableDateTime) {
        this.name = name;
        this.id = id;
        this.description = description;
        this.completeState = completeState;
        this.availableDateTime = availableDateTime;
    }
};
import Task from './task.js'

export default class Teacher {

    constructor(name, id, subject){
        this.name = name
        this.id = id
        this.subject = subject
        this.students = []   
    }

    assignStudents(students) {
        this.students = students
    }

    getStudents () {
        return this.students
    }

    greetings () {

        let studentsName= [];
        let studentsTask = [];
        
        // this.students.map(student => console.log(student.name))

        for (let i = 0; i < this.students.length; i++) {
            studentsName.push(this.students[i].id + " " + this.students[i].name)
        }


        for (let i = 0; i < this.students.length; i++) {
            for (let j = 0; j < this.students[i].tasks.length; j++) {
                studentsTask.push(this.students[i].id + " " + this.students[i].tasks[j].name)
            }
        }
        console.log( `Hello, my name is Mr./Mrs. ${this.name} and I'm teaching ${this.subject}. I have the following students: ${studentsName} each with their tasks: ${studentsTask} `)
    }

    assignStudentTasks (student) {

        let task1Time = new Date(0)
        task1Time.setHours(10)

        let task2Time = new Date(0)
        task2Time.setHours(11)

        let task3Time = new Date(0)
        task3Time.setHours(14)

        let task4Time = new Date(0)
        task4Time.setHours(15)


        let task1 = new Task("homework1", 1, "", false, task1Time.toLocaleTimeString()) ;
        let task2 = new Task("homework2", 2, "", false, task2Time.toLocaleTimeString());
        let task3 = new Task("homework3", 3, "", false, task3Time.toLocaleTimeString());
        let task4 = new Task("homework4", 4, "", false, task4Time.toLocaleTimeString());

        if( this.students.includes( student)){

        student.tasks = [task1, task2, task3, task4]
        }
    }

    getStudentTasks (student) {
        return student.tasks
    }

}



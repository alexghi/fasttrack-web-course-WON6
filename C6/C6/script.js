 let Students = [ {

    NameStudent: 'Sharleen Rollo',
    phone_number: '000443445',
    age: 27,
    hobbies: ['swimming']
  
  }, {
    NameStudent:'Della Wally',
    phone_number: '64645',
    age: 19,
    hobbies: ['Book']
  
  }, {
    NameStudent:'Adalyn Goddard',
    phone_number:'4893943',
    age: 25,
    hobbies:['Book']
  
  }, {
    NameStudent:'Natille Nigellus',
    phone_number:'40934985',
    age: 25,
    hobbies:['music']
  
  }, {
    NameStudent:'Danette Luanna',
    phone_number:'34856432',
    age: 28,
    hobbies:['swimming']
  }
  ]
//   console.log(Students);
    let allStudents = [];
    class Student {
          constructor (NameStudent, phone_number, age) {
        this.NameStudent = NameStudent;
        this.phone_number = phone_number;
        this.age = age;
        this.hobbies = [];
    }

    setHobbies (hobbies) {
        this.hobbies = hobbies;
    }

    getHobbies () {
        return this.hobbies;
    }

    greetings () {
        return `Hello, my name is ${this.NameStudent} and I am ${this.age} of age.`
    }
}


     for ( let i = 0; i <Students.length; i++) {
         let student =  new Student (Students[i].NameStudent, Students[i].phone_number, Students[i].age);
         student.setHobbies(Students[i].hobbies);
        allStudents[allStudents.length] = student; 
     }
     
     for (let i = 0; i < allStudents.length; i++){
        if (allStudents[i].getHobbies().includes('music') || allStudents[i].getHobbies().includes('book'))
         {
        console.log(allStudents[i].greetings())
         }
} 

     console.log(allStudents);


    

     
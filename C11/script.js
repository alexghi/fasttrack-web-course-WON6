// const b = 3;
// const fullName = "Alex";
// const anotherName = fullName;
// const age = 27;

// let person = {
//   name: "tony",
//   age: 20,
//   driver: null,
// };

let x = 10;
let y = 20;

// console.log(x)
// console.log(y)

// setTimeout(() => {
//     [y, x] = [x, y]
//     console.log(`x = ${x}, y = ${y}`);
// }, 1000)


const [a, b, ...restNumbers] = [1, 2, 3, 4, 5];

// console.log({ a, b, restNumbers });


const myCompleteDetails = ( { hobby, ...rest } ) => {
    const myBasicDetails = {
        name: 'Alex',
        age: 27
    }


    return {
        ...myBasicDetails,
        hobby: hobby
    }
}


const someOtherDetails = {
    hobby: 'cycling',
    car: 'opel'
}

console.log(myCompleteDetails(someOtherDetails))

function getStudents() {
  return ["Filip Eduard", "Ioana Mara", "Tabita M", "Elena", "Sergiu"];
}

function getStudentDetails() {
  return {
    name: "Filip",
    age: 20,
    hobby: "driving",
  };
}

let person = {
  firstName: "Daniel",
  lastName: "Smith",
  address: {
    city: "Oradea",
  },
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  cars: [],
};

const students = getStudents();
const [filip, ioana, ...rest] = getStudents();
// console.log(filip)

// const filip = students[0];
// const ioana = students[1];

// console.log(filip, ' - ', ioana)

const { name: studentName, hobby: studentsHobby } = getStudentDetails();

// console.log(studentName);
// console.log(studentsHobby);
// const studentObj = getStudentDetails()
// console.log(name, age, hobby)
// console.log( studentObj.name, studentObj.age, studentObj.hobby)

// console.log(true && age && fullName && console.log("printed"))

// console.log(0 ?? console.log("not printed"));

// if( person.age > 18) {
//     person.driver = true;
// }
// else {
//     person.driver = false;
// }

// person.age > 18 ? person.driver = true : person.driver = false

// console.log( person.age )

// function f2(a, b) {
//   console.log(a);
//   return a + 100 - b;
// }

// console.log(f2(12, 20));

// const f1 = (a) => a + 100 - b;

// f1(2);

// function myTag(strings, personExp, ageExp) {
//   let str0 = strings[0]; // "That "
//   let str1 = strings[1]; // " is a "

//   let ageStr = ageExp > 99 ? "centenarian" : "youngster";

//   return `${str0}${personExp}${str1}${ageStr}`;
// }

// console.log(myTag`This ${fullName} age ${age}`);

// function something(param1, param2) {
//   const a = 2;

//   const altfel = () => {
//     console.log(arguments);
//   };

//   altfel(12);
// }

// console.log(something());

let Name = prompt('What is your name?');
let Age = prompt('What is your age?');
let current_year = new Date().getFullYear();

let born_year = current_year - Age;
console.log(`Hello ${Name}, I am only a console but it is nice to meet you.I have heard you are ${Age} of age, that means you were born in ${born_year}`);
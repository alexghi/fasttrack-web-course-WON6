const test = param => {
  console.log(param);
};

export class Teacher {
  constructor(name) {
    this.name = name;
  }

  getTeacherName() {
    return `Mr ${this.name}`;
  }

}
export default test;
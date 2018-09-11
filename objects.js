// let person = {
//   firstName:"Rembert",
//   lastName:"Boom",
// }
// console.log(`Hello, I am ${person.firstName} ${person.lastName}`);

let student={
  firstName:"Alessandro",
  age:31,

  printAgeInMonths: function(){
    return this.age*12;
  },

  printAgeInDays: function(){
    return (this.printAgeInMonths()*30);
  },
}

//console.log(student.PrintAgeInMonths);
console.log(`I am ${student.firstName} and I am ${student.age} years or ${student.printAgeInMonths()} months old`);
console.log(`I am ${student.printAgeInDays()} days old`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CLASS SYNTAX:
// class Student {
// constructor(firstName, lastName, year){
//this points towards the specific instance like firstStudent, secondStudent
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.grade = year;
//     }
// }

// let firstStudent = new Student("Colt", "Steele",1);
// let secondStudent = new Student("Blue", "Steele",2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //INSTANCE METHODS:
// class Student {
//     constructor(firstName, lastName, year){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.grade = year;
//         this.tardies = 0;
//         this.scores = [];
//     }
//     //instance methods:
//     fullName(){
//         return `Your full name is ${this.firstName} ${this.lastName}`;
//     }
//     markLate(){
//         this.tardies += 1;
//         if(this.tardies >= 3) {
//             return "YOU ARE EXPELLED!!!!"
//         }
//         return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
//     }
//     addScore(score){
//         this.scores.push(score);
//         return this.scores
//     }
//     calculateAverage(){
//         let sum = this.scores.reduce(function(a,b){return a+b;})
//         return sum/this.scores.length;
//     }
// }

// let firstStudent = new Student("Colt", "Steele",1);
// let secondStudent = new Student("Blue", "Steele",2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CLASS METHODS: use static keyword
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   //this method is not tied to any instance p1 and p2 because it is a utility method and it should be used with p1,p2...pn both
//   //thats why declared with static keyword
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;

//     return Math.hypot(dx, dy);
//   }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);
//distance is accessed by className.methodName because it is static.
// console.log(Point.distance(p1, p2)); // 7.0710678118654755

////////////////////////////////////////////////////////////////////////////////////////////////////////////

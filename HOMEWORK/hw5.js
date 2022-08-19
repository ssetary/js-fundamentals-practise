// task1
    // function propsCount(currentObject) {
    //     return Object.keys(mentor).lenght;
    // }

    // let mentor = { 
    //     course: "JS fundamental", 
    //     duration: 3,
    //     direction: "web-development" 
    // };

    // // console.log(mentor); // виводить всі елементи обєкту
    // console.log(Object.keys(mentor));

// task2
// function showProps(laptop) {
//     return Object.keys(laptop);    
// };

// let laptop = {
//     model: "HP 250 G8 2W8Y9EA",
//     display: "15.6 inch",
//     processor: "Intel Core i5",
//     hardDrive: "256 GB SSD",
//     memory: "8 GB"
// };

// console.log(Object.keys(laptop));
// console.log(Object.values(laptop));


// task3
// class Person  {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//     showFullName(){
//       return this.name + " " + this.surname;  
//   }
// }
//   class Student extends Person {
//     constructor(name, surname, year) {
//       super(name,surname);
//       this.year = year;
//     }
//     showFullName(midleName) {
//       return super.showFullName() + " " + midleName;  
//   }

//   showCourse() {
//     let date = new Date();
//     let currentYear = date.getFullYear();
//     return currentYear = this.year;
//   }
// }


// let stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych")); 
// console.log("Current course: " + stud1.showCourse());
// let stud2 = new Student("Ivan", "Ivanov", 2018);
// console.log(stud2.showFullName("Ivanovich")); 
// console.log("Current course: " + stud2.showCourse());


// task4
// const workersList = [];

//   class Worker {
//     #experience = 1.2;
//     constructor(fullName, dayRate, workingDays) {
//       this.fullName = fullName;
//       this.dayRate = dayRate;
//       this.workingDays = workingDays;
//       workersList.push(this);
//     }
//     showSalary() {
//       console.log('${this.fullName} salary: ${this.dayRate * this.workingDays}');
//     }
//     showSalaryWithExperience() {
//       console.log('${this.fullName} salary: ${this.dayRate * this.workingDays * this.#experience}');
//     }
//     showSalaryWorker() {
//       return '${this.dayRate * this.workingDays * this.#experience}';
//   }
//     getShowExp() {
//       return this.#experience;
//     }
//     set setExp(experience) {
//       this.#experience = experience;
//     }
//     sortSalaries(workersArray) {
//       let sortedSalary = workersArray.sort(function(a, b) {
//         return a.showSalaryWorker() - b.showSalaryWorker();
//       })
//       // console.log(sortedSalary);
//       for (let i = 0; i < sortedSalary.lenght; i++) {
//         console.log(sortedSalary[i].fullName + ": " + sortedSalary[i].showSalaryWorker());
//       }
//     }
// }

// const worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName); 
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// console.log("-------------------");


// const worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName); 
// worker2.showSalary();
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// console.log("-------------------");


// const worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName); 
// worker3.showSalary();
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();
// console.log("-------------------");

// const worker4 = new Worker("Andy2 Ander2", 19, 13);
// // const workersArray = [worker1, worker2, worker3];
// worker3.sortSalaries(workersList);


// task5
// class GeometricFigure {
//   getArea() {
// return 0;
// }
// toString() {
//  return Object.getPrototypeOf(this).constructor.name;
// }
//  }

//  class Triangle extends GeometricFigure {
//   constructor(a, b) {
    // super(); 
//     this.base = b;
//     this.height = h;
//   }
//   getArea() {
//     return this.base * this.height;
//   }
//  }

//  class Square extends GeometricFigure {
//   constructor(a) {
//     super();
//     this.side = a;
//   }

//   getArea() {
//     return this.side ** 2;
//   }
//  }

//  class Circle extends GeometricFigure {
//   constructor(r) {
//     super();
//     this.radius = r;
//   }
//   getArea() {
//     return Math.PI * this.radius ** 2;
//   }
//  }

//  function handleFigures(figures) {
//   return figures.reduce(function(sum, figure) {
//     if (figure instanseof GeometricFigure) {
//       console.log('Geometric figure: ${figure.toString()} - area: ${figure.getArea()}')
//       return sum + figure.getArea()
//     }
//     throw Error('Bad argument figure.')  
//   }, 0);
//  }

// 	const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
//     	console.log(handleFigures(figures));
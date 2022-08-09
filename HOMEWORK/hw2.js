// task1
// let x = 1;
// let y = 2;

    // let res1 = ("x"+"y"); // other version + x + y
    // console.log(res1); 
    // console.log(typeof res1); 

    // let res2 = (Boolean("x")+"2"); // other version  + Boolean(x) + 2
    // console.log(res2); 
    // console.log(typeof res2);

    // let res3 = (x==x < y); // other version !!x
    // console.log(res3); 
    // console.log(typeof res3);

    // let res4 = ("x"*"y");
    // console.log(res4); 
    // console.log(typeof res4);
    

// task2 
// const a = 0;

// if (a %2 == 0) {
//     console.log("Number is even positive");
// } else if (a % 7 == 0) {
//     console.log("Number is multiple of 7");
// } else {
//     console.log("Is not number");
// };



// task3 
// const arr = [];
// arr.push[2, "apple", false, null]
// console.log(arr.length);
// arr[4] = prompt("Please, enter any value");
// console.log(arr.length[4]);
// arr.shift();
// console.log(arr);


// task4
// let cities = ["Rome", "Lviv", "Warsaw"]; 
// console.log(cities.join("*")); 


// task5
// let age = prompt("Are you over 18 years old?");
// let res = (age>=18) ? "You have reached the age of majority" : "You are still too young";
// console.log(res);


// task6 
// let a = Number(prompt("Enter the length of first side"));
// let b = Number(prompt("Enter the length of second side"));
// let c = Number(prompt("Enter the length of third side"));

// determining the area of ​​a triangle - formula gerona
// Логічний оператор AND ( && ) повертає значення true якщо обидва операнда є і повертаються true false в іншому випадку.
// if(a > 0 && b > 0 && c > 0) {
//     let p = (a+b+c) / 2; 
//     let s = Math.sqrt(p*(p-a)*(p-b)*(p-c)); 
//     console.log("Triangle area is: " + s.toFixed(3));
// } else {
//     alert("Incorrect data");
// }


// check if this triangle is right triangle - teorema piphagora

// if ((a*a + b*b === c*c) || (b*b + c*c === a*a) || (c*c + a*a === b*b)) {
//     console.log*("The triangle is right triangle");
//     } else {
//         console.log*("The triangle isn't right triangle");
//     }


// task7 
// let date = new Date();
// let currentHour = date.getHours();

// if (currentHour >= 23 || currentHour <= 5) {
//     alert("Доброї ночі"); 
// } else if (currentHour > 5 && currentHour <= 11) {
//     alert("Доброго ранку");
// } else if (currentHour > 11 && currentHour <= 17) {
//     alert("Доброго дня");
// } else if (currentHour > 17 && currentHour < 23) {
//     alert("Доброго вечора");
// } 



// switch (time) {
//     case (currentHour >= 23 || currentHour <= 5):
//         alert("Доброї ночі");
//     break;
//     case (currentHour > 5 && currentHour <= 11):
//         alert("Доброго ранку");
//     break;
//     case (currentHour > 11 && currentHour <= 17):
//         alert("Доброго дня");
//     break;  
//     case (currentHour > 17 && currentHour < 23):
//         alert("Доброго вечора");
//     break; 
// };
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
// prompt -displaying a dialog box with a message Ok or Cancel

// a.
// version1
// const number = prompt("Please, enter number");
// let check = number => ["even number", "odd number"][parseInt(number) & 1]; // even number or odd number
// console.log(check(number));

// version2
// const number = prompt("Please, enter number");
// let x = number;
// let res = (number%2==0);
// console.log(res);

// b.
// const number = prompt("Please check if the entered number is a multiple of 7");
// let x = number;
// let res = (number%7==0);
// console.log(res);


// task3
// const arr = [[2], ["Apple"], [2==2], [{}]];
// arr.push(["Mango"]);
// arr.shift([0]);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// prompt("Please, enter any value");


// task4
// let cities = ["Rome", "Lviv", "Warsaw"]; 
// console.log(cities.join("*")); // I dont know how added "" in start and end


// task5
// let age = prompt("Are you over 18 years old?");
// let res = (age>=18) ? "You have reached the age of majority" : "You are still too young";
// console.log(res);


// task6
// prompt("Enter the length of the side of the triangle - 3");
// prompt("Enter the length of the side of the triangle - 4");
// prompt("Enter the length of the side of the triangle - 5");

// const number = prompt("Enter the length of the side 'a' of the triangle", 3);
// let a = number; 
// let res = number==3; 
// console.log(res);   //value input validation 3

// const number = prompt("Enter the length 'b' of the side of the triangle", 4);
// let b = number2; 
// let res = number2==4; 
// console.log(res);  //value input validation 4

// const number = prompt("Enter the length 'c' of the side of the triangle", 5);
// let с = number3; 
// let res = number3==5; 
// console.log(res);  //value input validation 5


// let a = 3; //Cathet
// let b = 4; //Cathet
// let c = 5; //Hypotenuse


// let p = (a*b*c) / 2; 
// let s = Math.sqrt(p*(p-a)*(p-b)*(p-c)); //formula gerona
// console.log(s); 
// console.log(s.toFixed(3));


// let multiplyHypotenuse = 5**2;
// let multiplyCathetus = ((3**2)+(4**2));
// let rez = (multiplyHypotenuse === multiplyCathetus); 
// console.log(rez); //teorema piphagora


// task7
// const time = 23;
// switch (time) {
//     case 23: case 24: case 1: case 2: case 3: case 4: case 5:
//     console.log('Доброї ночі');   
//     case 5: case 6: case 7: case 8: case 9: case 10: case 11:
//     console.log('Доброго ранку');
//     case 11: case 12: case 13: case 14: case 15: case 16: case 17:
//     console.log('Доброго дня'); 
//     case 17: case 18: case 19: case 20: case 21: case 22: case 23:
//     console.log('Доброго вечора');   
//     break;
//     default:
//     //    
// };


// let time = 2;
// if (time < 5) {
//     console.log('Доброї ночі');
// } else if (time < 11) {
//     console.log('Доброго ранку');
// } else if (time < 17) {
//     console.log('Доброго дня'); 
// } else if (time < 23) {
//     console.log('Доброго вечора');    
// } else {
//     console.log('Доброї ночі');
// };
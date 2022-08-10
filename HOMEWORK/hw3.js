// task1
// let num = [2, 3, 4, 5];
// for(let i=0; i < num.length; i++) {
//     res = num[0]*num[1]*num[2]*num[3];
//     console.log(res);
// };


// let num = [2, 3, 4, 5];
// let i = 0;
// while(i < num.length) {
//     i++; 
//     res = num[0]*num[1]*num[2]*num[3];  
// }
// console.log(res);


// function multiplying(a,b,c,d) {
//     let result = a*b*c*d;
//     return result;
// }

// console.log(multiplying(2,3,4,5));


// task2
// let num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// for(let i = 0; i <= num.length; i+=2) {
//     console.log(num[i] + ": is even");
// };
// for(let i = 1; i <= num.length; i+=2) {
//     console.log(num[i] + ": is odd");
// };


// task3 - Getting a random integer in a given interval, inclusive
// function getRandomInt(min, max) {
//     min = Math.ceil(1);
//     max = Math.floor(500);
//     return Math.floor(Math.random() * (max - min) + min);
//   }

//   console.log(getRandomInt(5));

// task4 - function that turns the result of substituting a number a to the power b.
// function pow(a, b) {
//     let result = a;
//     for (let i = 1; i < b; i++) {
//     result *= a;
//     }
//     return result;
//     }
//     console.log(pow(3, 4));


//     console.log(Math.pow(3, 4));


// task5
// function multiplication() {
//     let result = 1;
//     for (let i = 0; i < arguments.length; i++) {
//               result *= arguments[i];
//     }
//     console.log(result);
//  }
 
//  multiplication(3,45,0,90); 
 

//  console.log(Math.min(40, 20, 42, 100, 67)); //Maths.min returns a significant number from groups of numbers passed as parameters
//  console.log(Math.min(-1, -100, -30, -25, 40));


// task6
// function findUnique(a) {   
//     let num = a.length;
//     for (let i = 0; i <= num-1; i++)
//      { for (let b = i+1; b < num; b++)
//         { if (a[ i ] === a[b]) return false; }
//      }
//     return true;
// }


// console.log(findUnique([1, 2, 3, 5, 3]));
// console.log(findUnique([1, 2, 3, 5, 11]));


// task7
// let arr = [3, 4, 10, -5];

// function returnLastElem(arr) {
//     return arr[arr.length - 1];
// }

// console.log(returnLastElem(arr));


// task8
// let str = "i love java script"; 
// function capitalize(str) {
//  return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
// }
// console.log(capitalize(str));


// function capitalize(str) {
// let n = "";
// for (i = 0; i < str.length; i++) {
//     if (str[i - 1] === " " || i === 0) {
// n += str[i].toUpperCase();
// } else {
//     n += str[i];
// }
// }
//     return n;
// }


//     console.log(capitalize(str));
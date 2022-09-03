// ----------------------------------------task1

// function.upperCase(str) {
//     regexp = /^[A-Z]/;
//     if (regexp.test(str)) {
//         console.log("String's starts with uppercase character");
//     } else {
//         console.log("String's not starts with uppercase character");
//     }
// }
// upperCase('regexp');
// upperCase('RegExp');


// ----------------------------------------task2

// function checkEmail (data) {
//     const regexp = /\S+@\S+\.\S+/;
//     console.log(regexp.test(data));
// }

// checkEmail("Qmail2@gmail.com");

// -----------------------------------------task3

// const myRe = /d(b+)(d)/i;
// const myArray = myRe.exec ("cdbBdbsbz");
// console.log(myArray);

// -----------------------------------------task4

// const re = /(\w+)\s(\w+)/;
// const str = "Java Script";
// const newstr = str.replace(re, "$2, $1"); //special replasement patterns
// console.log(newstr);

// ----------------------------------------task5

// function checkBankCard (str) {
//     const regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
//     const rezult = regExp.test(str);
//     if (rezult) {
//         console.log("validation successful");
//     } else {
//         console.log("Try again, please. Incorrect bank card number");
//     }
// 
// checkBankCard('2342-6745-9862-7980');
// checkBankCard('2342v-6745-9862-7980');
// checkBankCard('2234-6745-9862-7980');

// -----------------------------------------task6

// function checkEmail(str) {
//     const mailPattern = /^[a-zA-Z0-9]+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
//     if (mailPattern.test(str)) {
//         console.log("Email is correct!");
//     } else {
//         console.log("Email is not correct!");
//     }
// }

// checkEmail('my_mail@gmail.com');

// -----------------------------------------task7

// function checkLogin(data) {
//     const re = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
//     const reqNumber = /[0-9\.]+/g;
//     const resultNumber = data.match(reqNumber);
//     const result = re.test(data);
//     console.log('${data} is ${result} - ${resultNumber}');
// }
// checkLogin('e1.88ret3');
// checkLogin('ee1.1ret3');
// checkLogin('1.1e1ret3');
// checkLogin('sse1r55555et3');
// const currentDate = new Date();
// module.exports.date = currentDate;

// module.exports.showMessage = function(name) {
//   const hour = currentDate.getHours(); 

   
//   switch (true) {
//     case hour >= 5 && hour < 11:
//       return 'good morning, $(name)';
//       case hour >= 11 && hour < 17:
//         return 'good day, $(name)';
//         case hour >= 17 && hour < 23:
//           return 'good evening, $(name)';
//           case hour >= 23 && hour < 5:
//             return 'good night, $(name)';

//   }
// }

// const http = require('http');
// const greeting = require('./personalmodule');
// const os = require("os");

// http.createServer(function (request, response) {
//     res.writeHead(200, {'Content-Type': 'text/html'});

//     let username = os.userInfo().username;
//     res.write('date of request: ${greeting.date}<br>');
//     res.write(greeting.showMessage(username));
//     res.end();
//   }).listen(8000);
//   console.log('Server running at http://localhost:8000/');
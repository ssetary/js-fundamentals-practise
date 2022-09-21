// const http = require("http");
// const os = require("os");
// const path = require("path");

// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/html'});

//   response.write('<h1>System Information</h1>');
//   response.write("Currernt user name: " + os.userInfo().username);
//   response.write("<br>");
//   response.write("os type: " + os.type());
//   response.write("<br>");
//   response.write("System work time: " + (os.uptime()/60).toFixed(2) + " minutes");
//   response.write("<br>");
//   response.write("Currernt work directory: " + path.dirname(__filename));
//   response.write("<br>");
//   response.write("Server file name: " + path.basename(__filename));

// }).listen(5000);
// console.log('Server running at http://localhost:5000/ ...');
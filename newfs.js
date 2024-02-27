// // const fs = require("fs");
// fs.writeFileSync("filename.txt", 'Content of File');
// fs.appendFileSync("filename.txt", 'Newly added Content');



// fs.readFile("filename.txt", 'utf8', readFile);

// // var http = require('http');
// // var fs = require('fs');
// // http.createServer(function (req, res) {
// //   fs.readFile('filename.txt', function(err, data) {
// //     res.writeHead(200, {'Content-Type': 'utf8'});
// //     res.write(data);
// //     return res.end();
// //   });
// // }).listen(8080);

// fs.rename('filename.txt', 'myrenamedfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
//   });


  const os = require('node:os');
  console.log(os.arch());

//   const mem = os.freemem();
//   console.log(mem);

const mem = os.totalmem();
console.log(mem);
  
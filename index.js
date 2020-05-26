const express = require('express')
const app = express()

function ourMiddleWare(req, res, next){
    console.log(__dirname);
    next();
}


app.use(ourMiddleWare);
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/views/about.html');
})


app.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000/`);
})


 



//--------------Express Routes ----------------------- 

// app.get('/', function (req, res) {
//     res.send('Heyyyyy Works')
//   })
  
//   app.get('/student/:studentName', function (req, res) {
//       let params = req.params
//       res.send(`Hey ${params.studentName} !!!!!`)
//     })
  
//   app.get('/home/', function (req, res) {
//       res.send('I\'m at home');
//   })
  
//   app.get('/bootcamp', function (req, res) {
//       res.send('Node is fun!!!');
//   })
  
//   app.get('/tuesday', function (req, res) {
//       res.send('Heyyyyy its Tuesday')
//   })
   



// ---------------- Node server --------------------
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.end('Hello World Manish');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



// -----------------Using Chalk-------------------------------
// const chalk = require('chalk');
// console.log(chalk.green(
//     'I am a green line ' +
//     chalk.blue.underline.bold('with a blue substring') +
//     ' that becomes green again!'
// ));

// let {mentor, student, sumFunc} = require('./data.js')
// let bootcampName = require('./bootcamp') 

// console.log(sumFunc(4, 5));

// console.log(bootcampName)

// -----------------Using Faker-------------------------------
// var faker = require('faker');

// for (let i=0 ; i< 10; i++) {
//     var randomProdName = faker.commerce.productName(); 
//     var randomPrice = faker.commerce.price(); 
//     console.log(randomProdName+ ' $' + randomPrice);
// }

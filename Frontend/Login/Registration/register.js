// const axios = require("axios");

// endpoint = "https://course-eater.clei4w6g4nki.us-west-1.rds.amazonaws.com";

// const response = await axios({
//     url: endpoint,
//     method: "post",
//     data: {
//       query: 
//     },
//   });
console.log("hi");
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'course-eater.clei4w6g4nki.us-west-1.rds.amazonaws.com',
  user     : 'member', //'admin',
  password : 'S%Rj3E[PP??U~.J',//'8YOpDpknHFz1iKEbKXpl',
  port     : '3306',
  database: "course-eater"
});

connection.connect(

  (err) => {
    if (err) {
      console.log("errror: ", err.stack);
      return 
    }
    console.log("in connect");
    connection.query("", (err, result) => {
        console.log(result)
    });
  }
);

connection.query()

console.log("ran sussyily");

// connection.connect(function(err) {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }

//   console.log('Connected to database.');
// });

connection.end();
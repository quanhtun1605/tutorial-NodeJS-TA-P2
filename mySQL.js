var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "node_TUT"
});

con.connect(function(err){
  if(err){
    console.log(err);
    console.log("connect fail");
    return;
  }
  console.log("successfully");
});
module.exports = con;

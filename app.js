var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var db = require('./mySQL');

var crU = require('./User/createUser.js');
var sU  = require('./User/showAllUser.js');
var upU = require('./User/updateUser.js');
var delU= require('./User/deleteUser.js');
var sbID= require('./User/showByID.js');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//-----------------------------USER----------------------------------------
//CREATEV USER
app.post("/createuser", function(req, res){
  console.log("create user");
  var userName = req.body.userName;
  var email = req.body.email;
  crU.createUser(userName, email, function(err, result){
    console.log(result);
    res.send(result);
  });
});

//SHOW ALL USER
app.get("/showAllUser", function(req, res){
  console.log("show all user");
  sU.showAllUser(function(err, result){
    console.log(result);
    res.send(result);
  });
});

//UPDATE USER
app.post("/updateUser", function(req, res){
  console.log("update");
  var id = req.body.UserID;
  var userName = req.body.UserName;
  var email = req.body.UserEmail;
  upU.updateUser (id, userName, email, function(err, result){
    console.log(result);
    res.send(result);
  });
});

//DELETE USER
app.post("/deleteUser", function(req, res){
  console.log("del user");
  var id = req.body.UserID;
  delU.deleteUser (id, function(err, result){
    console.log(result);
    res.send(result);
  });
});

//SHOW BY ID
app.post("/showByID", function(req, res){
  console.log("show user by ID");
  var id = req.body.UserID;
  sbID.showUserByID (id, function(err, result){
    console.log(result);
    res.send(result);
  });
});
//-----------------------------USER----------------------------------------

module.exports = app;

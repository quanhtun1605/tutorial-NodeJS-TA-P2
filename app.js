var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var db = require('./mySQL');

var crU = require('./User/createUser.js');
var sU  = require('./User/showAllUser.js');
var upU = require('./User/updateUser.js');
var delU= require('./User/deleteUser.js');
var sbID= require('./User/showByID.js');

var crD = require('./device/createDevice.js');
var sD  = require('./device/showAllDevice.js');
var upD = require('./device/updateDevice.js');
var delD= require('./device/deleteDevice.js');
var sbDID= require('./device/showDeviceByID.js');
var sbUID= require('./device/showDeviceByUserID.js');

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

//-----------------------------DEVICE--------------------------------------

//CREATE DEVICE
app.post("/createDevice", function(req, res){
  console.log("create device");
  var deviceName = req.body.DeviceName;
  var userID = req.body.UserID;
  crU.createDevice(deviceName, userID, function(err, result){
    console.log(result);
    res.send(result);
  });
});

//SHOW ALL DEVICE
app.get("/showAllDevice", function(req, res){
  console.log("show all device");
  sD.showAllDevice(function(err, result){
    console.log(result);
    res.send(result);
  });
});

//UPDATE DEVICE
app.post("/updateDevice", function(req, res){
  console.log("update");
  var id = req.body.DeviceID;
  var deviceName = req.body.DeviceName;
  var userID = req.body.UserID;
  upD.updateDevice (id, deviceName, userID, function(err, result){
    console.log(result);
    res.send(result);
  });
});

//DELETE DEVICE
app.post("/deleteDevice", function(req, res){
  console.log("del device");
  var id = req.body.DeviceID;
  delD.deleteDevice (id, function(err, result){
    console.log(result);
    res.send(result);
  });
});

//SHOW BY ID
app.post("/showDeviceByID", function(req, res){
  console.log("show Device by ID");
  var id = req.body.DeviceID;
  sbDID.showDeviceByID (id, function(err, result){
    console.log(result);
    res.send(result);
  });
});

//SHOW BY USER ID
app.post("/showDeviceByUserID", function(req, res){
  console.log("show Device by user ID");
  var id = req.body.UserID;
  sbUID.showDeviceByUserID (id, function(err, result){
    console.log(result);
    res.send(result);
  });
});

//-----------------------------DEVICE--------------------------------------

module.exports = app;

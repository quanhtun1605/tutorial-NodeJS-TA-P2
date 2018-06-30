var con = require('../mySQL.js');

function RandomID(low, high){
  return Math.floor(Math.random() * (high - low) + low);
}
exports.createDevice = function creteDevice(deviceName, userID, callback){
  var id = RandomID(10000,999999);
  var sql = "INSERT INTO 'node_TUT'.`device` (`DeviceID`, `DeviceName`, `UserID`)" +
            "VALUES ('" + id + "','" + deviceName + "','" + userID + "')";
  con.query(sql, function(err, rows){
    var result = {};
    if(rows.affectedRows = 1){
      result = {status : done};
    }
    else
      result = {status : fail};
    callback(null, result);
  })
}

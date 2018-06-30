var con = require('../mySQL.js');

function sendDeviceByID(deviceID, deviceName, userID){
  return{
    deviceID       : deviceID,
    deviceName     : deviceName,
    userID         : userID
  };
}
exports.showDeviceByID = function showDeviceByID(id, callback){
  var sql = "SELECT * from `node_TUT`.`device`" +
            "WHERE `DeviceID` = '" + id + "'";
  con.query(sql, function(err, rows) {
    callback(null, JSON.stringify(sendDeviceByID(
    rows[0].DeviceID,
    rows[0].DeviceName,
    rows[0].UserID)))
  });
}

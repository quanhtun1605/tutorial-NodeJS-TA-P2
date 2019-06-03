var con = require('../mySQL.js')

function sendDeviceByUserID(deviceID, deviceName, userID){
  return{
    deviceID       : deviceID,
    deviceName     : deviceName,
    userID         : userID
  };
}
exports.showDeviceByUserID = function showDeviceByUserID(id, callback){
  var sql = "SELECT * from `node_TUT`.`device`" +
            "WHERE `UserID` = '" + id + "'";
  con.query(sql, function(err, rows) {
    callback(null, JSON.stringify(sendDeviceByUserID(
    rows[0].DeviceID,
    rows[0].DeviceName,
    rows[0].UserID)))
  });
}

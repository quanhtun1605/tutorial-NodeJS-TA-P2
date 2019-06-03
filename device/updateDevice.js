var con = require('../mySQL.js');

exports.updateDevice = function updateDevice(id, deviceName, userID, callback){
  var deviceID = parseInt(id);
  var sql = "UPDATE `node_TUT`.`device`" +
            "SET `DeviceName` = '" + deviceName + "' , `UserID` = '" + userID + "' " +
            "WHERE `DeviceID` = '" + deviceID + "'";
  con.query(sql, function(err, rows) {
       var result = {};
       if (rows.affectedRows = 1) result = {'status' : 'done'};
        else result = {'status' : 'fail'};
        callback(null, result);
  });
}

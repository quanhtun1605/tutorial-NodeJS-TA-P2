var con = require('../mySQL.js');

exports.deleteDevice = function deleteDevice(deviceID, callback){
  var  id = parseInt(deviceID);
  var sql = "DELETE FROM 'node_TUT'.`device`" +
            "WHERE `DeviceID` = '" + id + "'";
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

var con = require('../mySQL.js')

function AnswerShowAllDevice(Rows){
  var result = [];
  for(var i=0; i < Rows.length; i++){
    result.push({
      deviceID      :Rows[i].DeviceID,
      deviceName    :Rows[i].DeviceName,
      UserID        : Rows[i].UserID
    })
    return result;
  }
}
exports.showAllDevice = function showAllDevice(callback){
  var sql = "SELECT * from `node_TUT`.`device`";
  con.query(sql, function(err, rows){
      callback(null, JSON.stringify(AnswerShowAllDevice(rows)));
  })
}

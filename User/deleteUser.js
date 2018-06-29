var con = require('../mySQL.js');

exports.deleteUser = function deleteUser(id, callback){
  var userID = parseInt(id);
  var sql = "DELETE from `node_TUT`.`user`" +
       " WHERE `UserID` = '" + userID + "'";
  con.query(sql, function(err, rows) {
       var result = {};
       if (rows.affectedRows = 1) result = {'status' : 'done'};
        else result = {'status' : 'fail'};
        callback(null, result);
  });
}

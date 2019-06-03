var con = require('../mySQL.js');

exports.updateUser = function updateUser(id, userName, email, callback){
  var userID = parseInt(id);
  var sql = "UPDATE `node_TUT`.`user`" +
            "SET `Username` = '" + userName + "' , `UserEmail` = '" + email + "' " +
            "WHERE `UserID` = '" + userID + "'";
  con.query(sql, function(err, rows) {
       var result = {};
       if (rows.affectedRows = 1) result = {'status' : 'done'};
        else result = {'status' : 'fail'};
        callback(null, result);
  });
}

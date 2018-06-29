var con = require('../mySQL.js');

function sendUserByID(id, userName, Email){
  return{
    userID     : id,
    useName  : userName,
    userEmail  : Email
  };
}
exports.showUserByID = function showUserByID(id, callback){
  var sql = "SELECT * from `node_TUT`.`user`" +
            "WHERE `UserID` = '" + id + "'";
  con.query(sql, function(err, rows) {
    callback(null, JSON.stringify(sendUserByID(
    rows[0].UserID,
    rows[0].UserName,
    rows[0].UserEmail)))
  });
}

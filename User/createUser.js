var con = require('../mySQL.js');

function randomID(low, high){
  return Math.floor(Math.random() * (high - low) + low);
}

exports.createUser = function createUser(userName, email, callback){
  var userID = randomID(11000,100000);
  var sql = "INSERT INTO `node_TUT`.`user` (`UserID`, `UserName`, `UserEmail`)" +
            "VALUES ('" + userID + "','" + userName + "','" + email + "')";

  con.query(sql, function(err, rows){
    var result = {};
    if(rows.affectedRows = 1) result = {'status' : 'done'};
    else result = {'status' : 'fail'};
    callback(null, result);
  });

}

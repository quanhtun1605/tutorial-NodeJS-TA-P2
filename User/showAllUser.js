var con = require('../mySQL.js');

function serverAnswerShowAllUser(rows){
  var result = [];
  for(var i=0; i < rows.length; i++){
      result.push({
          id        : rows[i].UserID,
          UserName  : rows[i].UserName,
          Email     : rows[i].UserEmail,
      })
  }
  return result;
}
exports.showAllUser = function showAllUser(callback){
  var sql = "SELECT * from `node_TUT`.`user`";
  con.query(sql, function(err, rows){
      callback(null, JSON.stringify(serverAnswerShowAllUser(rows)));
  })
}

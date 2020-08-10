var pool = require('../db/connect');

module.exports = function () {
  return {
    select: function(callback){
      pool.getConnection(function(err, con){
        var sql = 'SELECT table_name FROM information_schema.tables';
        con.query(sql, function (err, result, fields) {
          con.release();
          if (err) return callback(err);
          callback(null, result);
        });
      });
    },
    pool: pool
  }
};
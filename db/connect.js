var mariadb = require('mariadb');

module.exports = function () {
  var config = require('./info');
  var pool = mariadb.createPool({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
  });

  return {
    getConnection: function (callback) {
      pool.getConnection(callback);
    },
    end: function(callback){
      pool.end(callback);
    }
  }
}();
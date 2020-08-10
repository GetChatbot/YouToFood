var sql = require('./select')();

console.log('** Started');

sql.select(function(err, data){
  if (err) console.log(err);
  else console.log(data);

  sql.pool.end(function(err){
    if (err) console.log(err);
    else {
      console.log('** Finished');
    }
  });
});
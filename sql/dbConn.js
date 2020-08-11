/*** models/mariaDBConn.js ***/

var mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: '211.186.44.249',
    port: '13306',
    user: 'root',
    password: 'dbsskdud',
    database: 'yyy'
});

async function getChatList() {
  let conn, rows;
  try {
    conn = await pool.getConnection();
    conn.query('yyy'); // 사용할 DB 명시
    rows = await conn.query('SELECT table_name FROM information_schema.tables'); // 쿼리 실행
  }catch (err) { 
    throw err; 
  }finally {
    if (conn) conn.end();
    return rows;
  }
}

module.exports = { getChatList, }
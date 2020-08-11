const express = require('express');
const mariadb = require('mariadb');
var dbConn = require('./sql/dbConn');
const app = express()
const port = 3000


app.get('/', (req, res) => {
    dbConn.getChatList()
    .then((rows) => { res.json(rows) }) // 쿼리 결과가 JSON 형태로 출력됨
    .catch((err) => { console.error(err); });

    // res.json({
    //     results: "success"
    // })
})

app.listen(port, () => {
    console.log(`Example app http://localhost:${port}`)
})
const mysql = require('mysql2')
// const config = require('../config/config.json')
const pool= mysql.createConnection({
  "host": process.env.CLEARDB_DATABASE_URL,
  "user":"b5d998ac4308b6",
  "database":"heroku_cad49eea5459fbb",
  "password":"81a67508"
})
module.exports = pool.promise();

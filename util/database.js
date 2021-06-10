const mysql = require('mysql2')
// const config = require('../config/config.json')
const pool= mysql.createPool({
  process.env.CLEARDB_DATABASE_URL
})
module.exports = pool.promise();

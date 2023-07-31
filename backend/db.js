const mysql = require("mysql")
const pool = mysql.createPool({
    host: 'mysql',
    user: 'root',
    password: '1234',
    database: 'myapp'
});
exports.pool = pool;
const dotenv = require('dotenv')
const path = require('path')
const { MY_SQL_CONN } = require("../src/GlobalVariables");

if (!MY_SQL_CONN.host) {
  dotenv.config({
    path: path.join(__dirname, "..", ".env")
  })
}

const development = {
  host: MY_SQL_CONN.host,
  username: MY_SQL_CONN.username,
  password: MY_SQL_CONN.password,
  port: MY_SQL_CONN.port,
  database: MY_SQL_CONN.database,
  dialect: MY_SQL_CONN.dialect
};

module.exports = {development};

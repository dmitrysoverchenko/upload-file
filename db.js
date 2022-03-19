const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "none",
  host: "localhost",
  port: "5432",
  database: "uploads",
});

module.exports = pool;

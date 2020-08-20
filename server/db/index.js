const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "yelp",
  password: "Emma@nuel1",
  port: 5432,
});

// const pool = new Pool({
//   user: "postgres",
//   host: "yelp.cgegxl9wteno.us-east-1.rds.amazonaws.com",
//   database: "yelp",
//   password: "Emma1Nuel",
//   port: 5432,
// });

module.exports = {
  query: (text, params) => pool.query(text, params),
};

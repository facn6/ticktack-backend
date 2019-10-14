const pg = require("pg");
const Pool = pg.Pool;
const url = require("url");

require("env2")("config.env");

pg.defaults.ssl = true;
let options = { max: process.env.DB_MAX_CONNECTIONS || 5 };
module.exports = new Pool(options);

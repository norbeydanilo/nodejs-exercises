// config.js

// npm i custom-env
require('custom-env').env()
const dotenv = require('dotenv');

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'desarrollo',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 3000
}
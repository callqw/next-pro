'use strict';
const configs = require('../config.js')
const mysql = require('mysql2/promise');
const config = mysql.createPool({
    host: configs.mysql.host,
    user: configs.mysql.user,
    password: configs.mysql.pass,
    database: configs.mysql.db,
    port: 3306
});

module.exports = { config: config };
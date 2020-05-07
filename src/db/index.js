const nano = require('nano');

const config = require('../config');

const nanoDB = nano(config.db.DB_HOST);

const db = nanoDB.use(config.db.DB_NAME);

module.exports = db;

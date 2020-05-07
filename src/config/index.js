require('dotenv').config();

module.exports = {
  server: {
    PORT: parseInt(process.env.PORT, 10),
  },
  db: {
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
  },
};

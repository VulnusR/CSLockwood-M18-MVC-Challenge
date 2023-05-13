const Sequelize = require('sequelize');
require('dotenv').config();

const sequelizeProcess = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      password: "startmySQL",
      port: 3306
    });

module.exports = sequelizeProcess;
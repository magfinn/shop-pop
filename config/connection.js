// require('dotenv').config();
const Sequelize = require('sequelize');

// //another way to set up server
const sequelize = new Sequelize('ecommerce_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

module.exports = sequelize;

require("dotenv").config();

module.exports = {
  HOST: "127.0.0.1",
  User: "root",
  Password: "mypass123",
  DB: "translationdb",
  dialect: "mysql",
  port: "3030",
  pool: {
    max: 25,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

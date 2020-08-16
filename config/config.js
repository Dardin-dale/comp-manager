require('dotenv-safe').config();

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        host: "localhost",
        port: 3306,
        dialect: "mysql"
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        host: "127.0.0.1",
        port: 3306,
        dialect: "mysql"
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        host: "127.0.0.1",
        port: 3306,
        dialect: "mysql"
    }
};
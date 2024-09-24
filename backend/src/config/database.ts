import { Sequelize } from "sequelize";

const db = new Sequelize('test-db', 'user', 'pass', {
    dialect: "sqlite",
    host: "APC",
    storage: "./database.sqlite",
    logging: false
});

export default db;
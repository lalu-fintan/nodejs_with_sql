"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("postgres", "postgres", "12345678", {
    host: "localhost",
    dialect: "postgres",
});
sequelize
    .authenticate()
    .then(() => {
    console.log("Connection has been established successfully.");
})
    .catch((error) => {
    console.error("Unable to connect to the database:", error);
});
exports.default = sequelize;
//# sourceMappingURL=db.config.js.map
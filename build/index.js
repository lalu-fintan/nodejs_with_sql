"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const main_config_1 = require("./config/main.config");
const db_config_1 = __importDefault(require("./config/db.config"));
const mainRouter_1 = __importDefault(require("./router/mainRouter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, main_config_1.mainConfig)(app);
(0, mainRouter_1.default)(app);
const port = process.env.PORT || 5000;
db_config_1.default
    .sync({ force: false })
    .then(() => {
    console.log("Database created  successfully!");
})
    .catch((error) => {
    console.error("Unable to create detabase : ", error);
});
app.listen(port, () => {
    console.log(`server running on ${port}`);
});
//# sourceMappingURL=index.js.map
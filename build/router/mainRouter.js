"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = require("../middleware/errorHandler");
const user_router_1 = __importDefault(require("./user.router"));
const category_router_1 = __importDefault(require("./category.router"));
const question_router_1 = __importDefault(require("./question.router"));
const mainRouter = (app) => {
    app.use("/api/user", user_router_1.default);
    app.use("/api/category", category_router_1.default);
    app.use("/api/question", question_router_1.default);
    app.use(errorHandler_1.errorHandler);
    app.use(errorHandler_1.notFound);
};
exports.default = mainRouter;
//# sourceMappingURL=mainRouter.js.map
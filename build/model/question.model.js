"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../config/db.config"));
const sequelize_1 = require("sequelize");
const category_model_1 = __importDefault(require("./category.model"));
const Question = db_config_1.default.define("Question", {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    question: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    answers: {
        type: sequelize_1.DataTypes.JSON,
    },
}, { timestamps: true });
Question.belongsTo(category_model_1.default, { foreignKey: "CategoryId" });
Question.sync();
exports.default = Question;
//# sourceMappingURL=question.model.js.map
import sequelize from "../config/db.config";
import { DataTypes } from "sequelize";
import Category from "./category.model";

const Question = sequelize.define(
  "Question",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    answers: {
      type: DataTypes.JSON,
    },
  },
  { timestamps: true }
);

Question.belongsTo(Category, { foreignKey: "CategoryId" });

Question.sync();

export default Question;

import { DataTypes } from "sequelize";
import sequelize from "../config/db.config";

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.TEXT,

      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    totalMarks: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: true }
);

Category.sync();

export default Category;

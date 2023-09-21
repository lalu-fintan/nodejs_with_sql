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
      type: DataTypes.STRING,

      allowNull: false,
      validate: {
        notEmpty: true,
        max: 800,
      },
    },
  },
  { timestamps: true }
);

Category.sync();

export default Category;

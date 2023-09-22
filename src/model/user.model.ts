import { DataTypes } from "sequelize";
import sequelize from "../config/db.config";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },

      // want to store the username toUppercase in database use this...
      get() {
        const rawValue = this.getDataValue("userName");
        return rawValue ? rawValue.toUpperCase() : null;
      },
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "participates",
    },
  },
  { timestamps: true }
);

User.sync();

export default User;

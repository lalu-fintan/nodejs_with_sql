import { Sequelize } from "sequelize";
import Express, { Request, Response } from "express";
import dotenv from "dotenv";
import { mainConfig } from "./config/main.config";
import sequelize from "./config/db.config";
import mainRouter from "./router/mainRouter";

dotenv.config();

const app = Express();
mainConfig(app);
mainRouter(app);

const port = process.env.PORT || 5000;

sequelize
  .sync()
  .then(() => {
    console.log("Database created  successfully!");
  })
  .catch((error) => {
    console.error("Unable to create detabase : ", error);
  });

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

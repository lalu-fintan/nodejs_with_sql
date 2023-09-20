import Express, { Request, Response } from "express";
import dotenv from "dotenv";
import { mainConfig } from "./config/main.config";
import Connection from "./config/db.config";

dotenv.config();

const app = Express();
mainConfig(app);
Connection;

const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.json("hello world");
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

import Express, { urlencoded } from "express";
import cors from "cors";

const corsOptions = {
  origin: "*",
};

export const mainConfig = (app: any): any => {
  app.use(cors(corsOptions));
  app.use(Express.json());
  app.use(urlencoded({ extended: true }));
};

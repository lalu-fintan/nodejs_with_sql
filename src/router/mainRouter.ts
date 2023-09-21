import { errorHandler, notFound } from "../middleware/errorHandler";
import userRouter from "./user.router";
import categoryRouter from "./category.router";

const mainRouter = (app: any) => {
  app.use("/api/user", userRouter);
  app.use("/api/category", categoryRouter);

  app.use(errorHandler);
  app.use(notFound);
};

export default mainRouter;

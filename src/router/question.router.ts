import {
  createQuestion,
  deleteQuestion,
  getAllQuestion,
  getQuestionByCategory,
  updateQuestion,
} from "../controller/question.controller";
import { Router } from "express";

const router = Router();

router.post("/", createQuestion);
router.get("/", getAllQuestion);
router.get("/:CategoryId", getQuestionByCategory);
router.put("/:id", updateQuestion);
router.delete("/:id", deleteQuestion);

export default router;

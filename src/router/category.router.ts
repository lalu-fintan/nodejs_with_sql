import {
  createCategory,
  deleteCategoriesById,
  findCategories,
  findCategoriesById,
  updateCategoriesById,
} from "../controller/category.model";
import { Router } from "express";

const router = Router();

router.post("/", createCategory);
router.get("/", findCategories);
router.get("/:id", findCategoriesById);
router.put("/:id", updateCategoriesById);
router.delete("/:id", deleteCategoriesById);

export default router;

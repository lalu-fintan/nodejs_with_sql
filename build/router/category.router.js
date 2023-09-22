"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_model_1 = require("../controller/category.model");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", category_model_1.createCategory);
router.get("/", category_model_1.findCategories);
router.get("/:id", category_model_1.findCategoriesById);
router.put("/:id", category_model_1.updateCategoriesById);
router.delete("/:id", category_model_1.deleteCategoriesById);
exports.default = router;
//# sourceMappingURL=category.router.js.map
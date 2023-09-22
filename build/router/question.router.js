"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question_controller_1 = require("../controller/question.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", question_controller_1.createQuestion);
router.get("/", question_controller_1.getAllQuestion);
router.get("/:CategoryId", question_controller_1.getQuestionByCategory);
router.put("/:id", question_controller_1.updateQuestion);
router.delete("/:id", question_controller_1.deleteQuestion);
exports.default = router;
//# sourceMappingURL=question.router.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuestion = exports.updateQuestion = exports.getAllQuestion = exports.getQuestionByCategory = exports.createQuestion = void 0;
const category_model_1 = __importDefault(require("../model/category.model"));
const question_model_1 = __importDefault(require("../model/question.model"));
const createQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { question, answers, category } = req.body;
    try {
        const findCategory = yield category_model_1.default.findOne({ where: { category } });
        if (findCategory) {
            const createquestion = yield question_model_1.default.create({
                question,
                answers,
                CategoryId: findCategory.dataValues.id,
            });
            res.status(200).json(createquestion);
        }
        else {
            res.status(400).json("category is not avilable");
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.createQuestion = createQuestion;
const getQuestionByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CategoryId } = req.params;
    try {
        const question = yield question_model_1.default.findAll({
            where: { CategoryId: CategoryId },
            // include: [Category], // if we want estaplish the category on questions,like cat.id and name,description
        });
        res.status(200).json(question);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getQuestionByCategory = getQuestionByCategory;
const getAllQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const question = yield question_model_1.default.findAll({});
        res.status(200).json(question);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllQuestion = getAllQuestion;
const updateQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const question = yield question_model_1.default.findOne({
            where: { id },
        });
        if (question) {
            const update = yield question_model_1.default.update(req.body, { where: { id } });
            res.status(200).json(update);
        }
        else {
            res.status(301).json("no data found");
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateQuestion = updateQuestion;
const deleteQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const question = yield question_model_1.default.findOne({
            where: { id },
        });
        if (question) {
            const deletd = yield question_model_1.default.destroy({ where: { id } });
            res.status(200).json("question deleted successfully");
        }
        else {
            res.status(301).json("no data found");
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteQuestion = deleteQuestion;
//# sourceMappingURL=question.controller.js.map
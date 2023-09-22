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
exports.deleteCategoriesById = exports.updateCategoriesById = exports.findCategoriesById = exports.findCategories = exports.createCategory = void 0;
const category_model_1 = __importDefault(require("../model/category.model"));
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, description } = req.body;
    try {
        const newCategory = yield category_model_1.default.create({
            category,
            description,
        });
        console.log({ newCategory });
        res.status(200).json(newCategory);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.createCategory = createCategory;
const findCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield category_model_1.default.findAll({}); //get all the attribute
        // const category = await Category.findAll({  // get the specific attributes
        //   attributes: ["category"],
        // });
        res.status(200).json(category);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.findCategories = findCategories;
const findCategoriesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // const category = await Category.findByPk(id);one method
        const category = yield category_model_1.default.findOne({ where: { id } }); // second method (prefered)
        res.status(200).json(category);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.findCategoriesById = findCategoriesById;
const updateCategoriesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { category, description } = req.body;
    try {
        const update = yield category_model_1.default.update(req.body, 
        // { category, description },//2nd method
        { where: { id } });
        res.status(200).json(update);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateCategoriesById = updateCategoriesById;
const deleteCategoriesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const category = yield category_model_1.default.destroy({ where: { id } });
        res.status(200).json("category deletd successfully");
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteCategoriesById = deleteCategoriesById;
//# sourceMappingURL=category.model.js.map
import Category from "../model/category.model";
import Question from "../model/question.model";
import { Request, Response } from "express";

export const createQuestion = async (req: Request, res: Response) => {
  const { question, answers, category } = req.body;
  try {
    const findCategory = await Category.findOne({ where: { category } });
    if (findCategory) {
      const createquestion = await Question.create({
        question,
        answers,
        CategoryId: findCategory.dataValues.id,
      });
      res.status(200).json(createquestion);
    } else {
      res.status(400).json("category is not avilable");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getQuestionByCategory = async (req: Request, res: Response) => {
  const { CategoryId } = req.params;
  try {
    const question = await Question.findAll({
      where: { CategoryId: CategoryId },
      // include: [Category], // if we want estaplish the category on questions,like cat.id and name,description
    });
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllQuestion = async (req: Request, res: Response) => {
  try {
    const question = await Question.findAll({});
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateQuestion = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const question = await Question.findOne({
      where: { id },
    });
    if (question) {
      const update = await Question.update(req.body, { where: { id } });
      res.status(200).json(update);
    } else {
      res.status(301).json("no data found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteQuestion = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const question = await Question.findOne({
      where: { id },
    });
    if (question) {
      const deletd = await Question.destroy({ where: { id } });
      res.status(200).json("question deleted successfully");
    } else {
      res.status(301).json("no data found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

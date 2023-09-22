import { Request, Response } from "express";
import Category from "../model/category.model";

export const createCategory = async (req: Request, res: Response) => {
  const { category, description } = req.body;
  try {
    const newCategory = await Category.create({
      category,
      description,
    });
    console.log({ newCategory });
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const findCategories = async (req: Request, res: Response) => {
  try {
    const category = await Category.findAll({}); //get all the attribute

    // const category = await Category.findAll({  // get the specific attributes
    //   attributes: ["category"],
    // });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const findCategoriesById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    // const category = await Category.findByPk(id);one method
    const category = await Category.findOne({ where: { id } }); // second method (prefered)
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateCategoriesById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { category, description } = req.body;
  try {
    const update = await Category.update(
      req.body,
      // { category, description },//2nd method
      { where: { id } }
    );

    res.status(200).json(update);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteCategoriesById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const category = await Category.destroy({ where: { id } });
    res.status(200).json("category deletd successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

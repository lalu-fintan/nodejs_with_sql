import jwt from "jsonwebtoken";
import User from "../model/user.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  const { userName, Email, password } = req.body;

  try {
    const hashPassowrd = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      userName,
      Email,
      password: hashPassowrd,
    });

    const refreshToken = jwt.sign({ Email }, process.env.SECRET_TOKEN || "", {
      expiresIn: "3d",
    });

    const accessToken: string = jwt.sign(
      { newUser },
      process.env.SECRET_TOKEN || "",
      {
        expiresIn: "1d",
      }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });

    res.status(200).json({ newUser, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  const { Email, password } = req.body;
  try {
    const user = await User.findOne({ where: { Email } });

    if (
      user &&
      (await bcrypt.compare(password, user.dataValues.password as string))
    ) {
      const refreshToken = jwt.sign({ Email }, process.env.SECRET_TOKEN || "", {
        expiresIn: "3d",
      });

      const accessToken: string = jwt.sign(
        { user },
        process.env.SECRET_TOKEN || "",
        {
          expiresIn: "1d",
        }
      );

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000,
      });
      res.status(200).json({ user, accessToken });
    } else {
      res.status(400).json("User not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const logOut = async (req: Request, res: Response) => {
  const cookie = req.cookies;
  try {
    if (!cookie.refreshToken) {
      res.status(400).json("you don't have a token");
    }
    res.clearCookie("refreshToken", { httpOnly: true, secure: true });
    res.status(200).json({ message: "logout successfully" }); //forbitten
  } catch (error) {
    res.status(500).json(error);
  }
};

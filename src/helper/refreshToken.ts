import jwt, { Secret } from "jsonwebtoken";

export const generateAccessToken = (user: object): string => {
  return jwt.sign({ user }, process.env.SECRET_TOKEN || "", {
    expiresIn: "1d",
  });
};

export const generateRefreshToken = (user: object): string => {
  return jwt.sign({ user }, process.env.SECRET_TOKEN || "", {
    expiresIn: "3d",
  });
};

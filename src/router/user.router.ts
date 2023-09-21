import { register, login, logOut } from "../controller/user.controller";
import { Router } from "express";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logOut);

export default router;

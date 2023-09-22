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
exports.logOut = exports.login = exports.register = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../model/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, Email, password } = req.body;
    try {
        const hashPassowrd = yield bcrypt_1.default.hash(password, 10);
        const newUser = yield user_model_1.default.create({
            userName,
            Email,
            password: hashPassowrd,
        });
        const refreshToken = jsonwebtoken_1.default.sign({ Email }, process.env.SECRET_TOKEN || "", {
            expiresIn: "3d",
        });
        const accessToken = jsonwebtoken_1.default.sign({ newUser }, process.env.SECRET_TOKEN || "", {
            expiresIn: "1d",
        });
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        });
        res.status(200).json({ newUser, accessToken });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, password } = req.body;
    try {
        const user = yield user_model_1.default.findOne({ where: { Email } });
        if (user &&
            (yield bcrypt_1.default.compare(password, user.dataValues.password))) {
            const refreshToken = jsonwebtoken_1.default.sign({ Email }, process.env.SECRET_TOKEN || "", {
                expiresIn: "3d",
            });
            const accessToken = jsonwebtoken_1.default.sign({ user }, process.env.SECRET_TOKEN || "", {
                expiresIn: "1d",
            });
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                maxAge: 72 * 60 * 60 * 1000,
            });
            res.status(200).json({ user, accessToken });
        }
        else {
            res.status(400).json("User not found");
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.login = login;
const logOut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cookie = req.cookies;
    try {
        if (!cookie.refreshToken) {
            res.status(400).json("you don't have a token");
        }
        res.clearCookie("refreshToken", { httpOnly: true, secure: true });
        res.status(200).json({ message: "logout successfully" }); //forbitten
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.logOut = logOut;
//# sourceMappingURL=user.controller.js.map
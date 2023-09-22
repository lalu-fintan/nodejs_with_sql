"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controller/user.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/register", user_controller_1.register);
router.post("/login", user_controller_1.login);
router.get("/logout", user_controller_1.logOut);
exports.default = router;
//# sourceMappingURL=user.router.js.map
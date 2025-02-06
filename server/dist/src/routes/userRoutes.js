"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get("/", userController_1.getUsers);
router.get("/:user_id", userController_1.getUserById);
router.post("/", userController_1.createUser);
router.put("/:user_id", userController_1.updateUser);
exports.default = router;

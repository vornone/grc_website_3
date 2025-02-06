import { Router } from "express";

import { getUsers, getUserById, createUser, updateUser} from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.get("/:user_id", getUserById);
router.post("/create", createUser);
router.put("/:user_id", updateUser);
export default router;

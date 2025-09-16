import express from "express";
import { getUsers, register } from "./controller.js";
const router = express();

router.post("/register", register);
router.get("/users", getUsers);

export default router;

import { Router } from "express";
import { buscar } from "../controllers/users.controller.js";

const router = Router()

router.get("/", buscar)

export default router
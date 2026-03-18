import { Router } from "express";
import { getAllLoans } from "../controllers/loanController";

const router = Router();

router.get("/loans", getAllLoans);

export default router;
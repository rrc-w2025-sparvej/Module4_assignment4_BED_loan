import { Router } from "express";
import { getAllLoans } from "../controllers/loanController";
import { createLoan } from "../controllers/loanController";
import { updateLoan } from "../controllers/loanController";

const router = Router();

router.get("/loans", getAllLoans);
router.post("/loans", createLoan);
router.put("/loans/:id", updateLoan);

export default router;

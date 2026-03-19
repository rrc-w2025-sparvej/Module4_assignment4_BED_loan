import { Router } from "express";
import { getAllLoans } from "../controllers/loanController";
import { createLoan } from "../controllers/loanController";
import { updateLoan } from "../controllers/loanController";
import { deleteLoan } from "../controllers/loanController";
import { authenticate } from "../middleware/authMiddleware";
import { authorize } from "../middleware/roleMiddleware";


const router = Router();

// admin + analyst = can view
router.get(
  "/loans",
  authenticate,
  authorize(["admin", "analyst"]),
  getAllLoans
);

// admin only = create
router.post(
  "/loans",
  authenticate,
  authorize(["admin"]),
  createLoan
);

// admin only = update
router.put(
  "/loans/:id",
  authenticate,
  authorize(["admin"]),
  updateLoan
);

// admin only = delete
router.delete(
  "/loans/:id",
  authenticate,
  authorize(["admin"]),
  deleteLoan
);
export default router;

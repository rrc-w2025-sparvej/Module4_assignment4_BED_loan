import { Request, Response } from "express";
import { loans } from "../models/loanModel";

export const getAllLoans = (req: Request, res: Response) => {
  res.json(loans);
};

export const createLoan = (req: Request, res: Response) => {
  const newLoan = {
    id: loans.length + 1,
    ...req.body,
    createdAt: new Date().toISOString(),
  };

  loans.push(newLoan);
  res.status(201).json(newLoan);
};

export const updateLoan = (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = parseInt(req.params.id);

  const loan = loans.find((l) => l.id === id);

  if (!loan) {
    return res.status(404).json({ message: "Loan not found" });
  }

  Object.assign(loan, req.body);

  res.json(loan);
};

export const deleteLoan = (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = parseInt(req.params.id);

  const index = loans.findIndex((l) => l.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Loan not found" });
  }

  const deletedLoan = loans.splice(index, 1);

  res.json(deletedLoan[0]);
};
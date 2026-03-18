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
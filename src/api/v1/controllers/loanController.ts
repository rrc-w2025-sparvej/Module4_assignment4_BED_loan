import { Request, Response } from "express";
import { loans } from "../models/loanModel";

export const getAllLoans = (req: Request, res: Response) => {
  res.json(loans);
};
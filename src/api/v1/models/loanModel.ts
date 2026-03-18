export interface Loan {
  id: number;
  applicant: string;
  amount: number;
  status: string;
  createdAt: string;
}

// temporary in-memory data
export const loans: Loan[] = [
  {
    id: 1,
    applicant: "John Smith",
    amount: 50000,
    status: "pending",
    createdAt: new Date().toISOString(),
  },
];
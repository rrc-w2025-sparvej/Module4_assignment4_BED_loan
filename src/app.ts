import express from "express";
import loanRoutes from "./api/v1/routes/loanRoutes";
import { errorHandler } from "./api/v1/middleware/errorMiddleware";

const app = express();

// middleware to parse JSON
app.use(express.json());

//loan routes 
app.use("/api/v1", loanRoutes);

app.use(errorHandler);

export default app;
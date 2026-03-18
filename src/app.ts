import express from "express";
import loanRoutes from "./api/v1/routes/loanRoutes";

const app = express();

// middleware to parse JSON
app.use(express.json());

//loan routes 
app.use("/api/v1", loanRoutes);


export default app;
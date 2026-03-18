import express from "express";

const app = express();

// middleware to parse JSON
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API is running");
});

export default app;
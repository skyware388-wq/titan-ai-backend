const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "TITAN AI",
    status: "Online",
    message: "TITAN AI Backend is running!"
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    ai: "TITAN",
    status: "ready"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`TITAN AI running on port ${PORT}`);
});

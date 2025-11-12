const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome, User Service");
});

app.listen(3000, () => {
  console.log("Server is working on port 3000");
});

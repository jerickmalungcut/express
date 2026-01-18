import express from "express";
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});
app.post("/register", (req, res) => {
  res.sendStatus(201);
});
app.put("/user/jerick", (req, res) => {
  res.sendStatus(200);
});
app.patch("/user/jerick", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

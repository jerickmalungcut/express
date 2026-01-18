import express from "express";
import morgan from "morgan";
const app = express();
const PORT = 3000;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Morgan Logger Example!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

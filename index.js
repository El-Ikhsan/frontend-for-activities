import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 5000;


app.use(express.static(path.join('./public')));

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
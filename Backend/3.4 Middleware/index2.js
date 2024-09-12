import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(morgan("tiny"));  //using "tiny" we get small output after using postman(get mein localhost:3000 then search)
//using "combined" we get full combined output

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

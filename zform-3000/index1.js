import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var note = "";

app.use(bodyParser.urlencoded({ extended: true }));

function submission(req, res, next) {
  console.log(req.body);
  note = req.body["name"] + req.body["email"];
  next();
}

app.use(submission);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h2>${note}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

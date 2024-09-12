import express from "express";  //for using import go to package.json and ensure to add "type": "module", 
                                // most probably under "main":"index.js"
const app = express();
const port = 3000;

app.get("/", (req, res) => {       //"/" means home page
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Angela</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

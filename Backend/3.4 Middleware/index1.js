import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;//

app.use(bodyParser.urlencoded({ extended: true}));  //body parser is the middleware , install body-parser package from www.npm.js.com
//as we are using a html form so urlencoded         //with this body-parser we can use req 
app.get("/", (req, res) => {
  //req is defined after using body-parser and it is not written under get as get is meant to send back a resource that
  //the user wants not meant with things coming in
  // console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html"); //if you console log this dirname and as it is under get so go to postman and search localhost:3000 enter you'll see that automatically full path will be visible
});
app.post("/submit", (req, res) => {
  console.log(req.body);
  
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

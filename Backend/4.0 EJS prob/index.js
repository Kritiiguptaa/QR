import express from "express";

import { dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.post("/check", (req, res) => {
    if(userAuthorised){
    res.sendFile(__dirname + "/public/secret.html");
  }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
import express from "express";  //for using import go to package.json and ensure to add "type": "module", 
                                // most probably under "main":"index.js"
const app= express();

app.get("/",(req,res)=>{    //"/" means home page(localhost:3000); get means to send request ; request and response as annonymous funtions
    res.send("<h2>hello<h2>");
});
app.get("/about",(req,res)=>{  //"/about" means localhost:3000/about page opens About Me
    res.send("<h1> About Me <h1>")
})
app.listen(3000,()=>{
    console.log("running");
});
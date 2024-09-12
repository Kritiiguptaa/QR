import express from "express";
const app=express();
const port=3000;   //localhost 3000 i.e 

app.listen(port,()=>{                         //listen(port,callback)
    console.log(`Server running on port ${port}`);
});

//localhost means making our own computer server of backend 
//when we don't have server on internet and we make the server locally  
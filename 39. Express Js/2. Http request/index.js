import express from "express";
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.get('/home',(req,res)=>{
    res.send("<h1>Home</h1>");
});
app.get('/about',(req,res)=>{
    res.send("<h1>About</h1><p>I am Nitesh Kumar.</p>");
   
});
app.listen(port,()=>{
    console.log(`server has started ${port}.`);
});
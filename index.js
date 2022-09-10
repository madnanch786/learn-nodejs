const express=require('express');

const app=express();

app.get("/adnan",(req,resp)=>

{
    resp.send("server is working")
})
app.listen(5000)
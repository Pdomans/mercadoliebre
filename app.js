const { application } = require("express");

const express = require ("express"); 
const path= require("path");

const app=express();

app.listen(8081,()=>{
    console.log('escuchando el puerto 8081')
})

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'));
})
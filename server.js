const express = require("express");
const path = require("path");

const app = express();
 app.use(express.static(__dirname +'/dist/'));
 app.get('/*',(req,res,next)=>{
 
 res.sendFile(path.join(__dirname, '/dist/index.html'));
 });
 
 app.listen(process.env.PORT || 8080, () =>{
           console.log('Server ecoute sur le port %s' , process.env.PORT || 8080)
 });
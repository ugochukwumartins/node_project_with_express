const express = require("express");
const bodyParser= require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
   // console.log(request);
    res.sendFile(__dirname + "/index.html");


}),
app.post("/", function(req, res){
    // console.log(request);
   
var num1=req.body.num1;
var num2= req.body.num2;
var result= num1 * num2;
res.send(`${result}`);

 
 
 }),
app.get("/contact", function(req, res){
    // console.log(request);
     res.send('contact me at: uokorocha72@gmail.com');
 
     
 }),

 app.get("/about", function(req, res){
    // console.log(request);
     res.send('about: uokorocha72@gmail.com');
 
 }),

 app.get("/hobies", function(req, res){
    // console.log(request);
     res.send('hobies of: uokorocha72@gmail.com');
 
 }),
app.listen(3000, function(){ console.log("server started at port 3000") });
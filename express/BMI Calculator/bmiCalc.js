const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    const height = Number(req.body.height);
    const weight = Number(req.body.weight);
    const bmi = weight/height;
    res.send("Your BMI is " + bmi);
});
app.listen(4000);
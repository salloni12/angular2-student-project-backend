const express = require("express");

const app=express();

const bodyParser=require("body-parser");

const login=require('./login/controllers/login');
const student=require('./student-list/controller/student');
const config_db=require('./config/db');

//var cors=require("cors");

config_db();

var port=3000;

//app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});



var port=3000;

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

//student(app);
login(app);
student(app);


app.get('/api', (req, res) => {
    
   return res.send("call get method");
});





app.listen(port, () => {
   console.log(`Server started on :`+port);
});

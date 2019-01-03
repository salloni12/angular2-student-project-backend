var loginService=require('../services/login');

const express=require('express');
const app=express();

module.exports = (app)=>{

    app.post('/login',(req,res)=>{
        loginService().login(req,res);
    });

    app.post('/register',(req,res)=>{
        loginService().register(req,res);
    });
}
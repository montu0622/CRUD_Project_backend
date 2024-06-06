// const express = require ('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const mongoDB = require('mongodb');
// const cors = require('cors');
// const PostRouter = require('./routes/post');
// const UserRouter = require('./routes/user');



import  express  from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRouter from './routes/user.js';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true}));
app.use(cors());



app.use('/user', UserRouter);



const URL = 'mongodb+srv://montukumar:montu0622@montu0622.7ngab1v.mongodb.net/?retryWrites=true&w=majority'
const port = process.env.PORT || 8080;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(port, ()=>{
    console.log(`Server is running  ${port}`);
}))
.catch((err)=>{
    
    console.log(err.message, "err from ");
})



// import { Express } from "express";


// Read Eval print Loop

//Wrapper moduele


// function(exports, require, moduele, __filename,  __dirname):{

//} 
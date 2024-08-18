const express = require('express');
const cors = require('cors');
const app=express();
const cookieParser = require('cookie-parser');
require('dotenv').config()
// const mongoose = require('mongoose');

const userRouter=require('./routes/userRouter');
const eventRouter = require('./routes/eventRouter');


app.use(cors({
    origin: `${process.env.VITE_FRONTEND_URL}`, // Replace with your frontend URL
    methods: ['GET', 'POST'],
    credentials: true, // Allow credentials (cookies)
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use('/api/user',userRouter)
app.use('/api/events',eventRouter)

module.exports = app
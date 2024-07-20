const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const dotenv =require('dotenv');
const protectedRouter = require('./routes/protected');
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to database successfully!!!');
}).catch((err)=>{
    console.log(`cannot connect to database:${err}`);
});
//'/users' is the mount path. This means that any requests to routes that start with /users will be handled by the userRouter middleware.

// Routes
app.use('/users', userRouter);
app.use('/users', protectedRouter);

module.exports = app;

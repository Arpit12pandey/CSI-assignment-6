const express = require('express');
const userRouter = require('./routers/user');
const protectedRouter = require('./routers/protected');

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(protectedRouter);

module.exports = app;

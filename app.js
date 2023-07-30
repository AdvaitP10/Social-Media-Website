const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors')
// const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const userRouter = require('./routes/api/user');
const postRouter = require('./routes/api/post');

dotenv.config();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use("/user", userRouter);
app.use("/post", postRouter);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
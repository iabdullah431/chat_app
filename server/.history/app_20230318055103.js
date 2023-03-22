require('dotenv').config();

var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const createError = require('http-errors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/auth', require('./routes/auth'));

app.use((err, req, res, next) => {
  if (req.get('accept').includes('json')) {
    return next(createError(404));
  }
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((err, req, res, next) => {
  if (err.name === 'MongoError' || err.name === 'ValidationError' || err.name === 'CastError') {
    err.status = 422;
  }
  res.status(err.status || 500).join({ message: err.message || 'some error eccured.' });
});

const connect_to_db = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Could not connect to MongoDB');
    console.log('error');
  }
};
connect_to_db();

module.exports = app;

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = require('./routes/index.js');
// const bodyParser = require('body-parser');
// const unirest = require('unirest');
// const { Storage } = require('@google-cloud/storage');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


const db = require('./Firebase.js');
const storage =require('./CloudStorage.js');
 
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/', router);
// app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/', (req, res, next) => {
  req.db = db;
  next ();
});

app.locals.db = db;
app.locals.storage = storage;

app.use(function(req, res, next) {
  
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

module.exports = app;

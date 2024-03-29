var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var acoesRouter = require('./routes/acoesRouter');
var utilizadoresRouter = require('./routes/utilizadoresRouter');



var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/acoes', acoesRouter);
app.use('/api/utilizadores', utilizadoresRouter);



module.exports = app;

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./config/routes');
var app = express(); //Create the Express app

//connect to our database
//Ideally you will obtain DB details from a config file
var dbName = 'SimpleMEANApi';
var connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString);

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//Enabled cors for all origins and all routes; Probably want to restrict this more
app.use(cors());

//This is our route middleware
app.use('/', routes);

module.exports = app;

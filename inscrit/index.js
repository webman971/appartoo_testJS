var express = require('express'),
    session = require('express-session'),
    pangoose = require('mongoose'),
    request = require('request');

var inscriptionchemin = require('./JS/test_JS/inscrit/inscriptionchemin');
var inscriptionconfig = require('./JS/test_JS/inscrit/inscriptionconfig');

pangoose.connect(config.getDBString());

var app = express();

app.incription(config.API_PATH, inscriptionchemin());

app.listen(config.PORT); 
console.log('Server started at - '+ config.URL+ ":" +config.PORT);
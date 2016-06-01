var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/piano', function(res,req){
	res.send('piano');
});

app.get('/guitar', function(res,req){
	res.send('guitar');
});

app.listen(3000);
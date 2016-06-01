var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/chordAPI');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/piano', function(req,res){
	res.json('piano');
});

app.get('/guitar', function(req,res){
	res.send('guitar');
});

app.listen(3000);
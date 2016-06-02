var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/chordsAPI');

var Guitarchord = require('./models/guitarchord.js');
var Pianochord = require('./models/pianochord.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req,res){
	res.json({'info':'please refer to the documentation on how to utilize this api.'});
});

app.get('/piano/:note', function(req,res){
	var redirectURL = '/piano/' + req.params.note + '/major';
	res.redirect(redirectURL);
});

app.get('/guitar/:note', function(req,res){
	var redirectURL = '/guitar/' + req.params.note + '/major';
	res.redirect(redirectURL);
});

app.get('/piano/:note/:mod', function(req,res){
	console.log('get#piano');
	var note = req.params.note;
	var mod = req.params.mod;

	Pianochord.findOne({type:mod}, function(err, data){
		if(!err){
			console.log(data);
			res.json(data.data[note]);
		}
		else{
			console.log(err);
		}
	});
});

app.get('/guitar/:note/:mod', function(req,res){
	console.log('get#guitar');
	var note = req.params.note;
	var mod = req.params.mod;

	if(req.params.mod === 'minor'){mod = 'minor'};
	console.log(mod);

	Guitarchord.findOne({type:mod}, function(err, data){
		if(!err){
			console.log(data);
			res.json(data.data[note]);
		}
		else{
			console.log(err);
		}
	});
});

app.listen(process.env.PORT || 3000);
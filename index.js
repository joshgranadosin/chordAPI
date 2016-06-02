var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var mongodbURI = process.env.MONGODB_URI || 'mongodb://localhost/chordsAPI';

mongoose.connect(mongodbURI);

var Guitarchord = require('./models/guitarchord.js');
var Pianochord = require('./models/pianochord.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var badrequest = {'status':400, 'err':'default',
		'message':"requests must be made in the following format: " +
		"https://chords-api-app.herokuapp.com/:type/:note/:modifier where " +
		":type is either 'piano' or 'guitar', " +
		":note is the note letter (A-G) with a flat(Ab) or a sharp(B%23), " +
		":modifier is either 'major' or 'minor'"}

app.get('/piano/:note', function(req,res){
	console.log('get#piano#default');
	var note = req.params.note.toUpperCase();
	var mod = 'major';

	Pianochord.findOne({type:mod}, function(err, data){
		if(!err && data != null){
			console.log(data);
			res.json(data.data[note]);
		}
		else{
			console.log(err);
			badrequest.err = err;
			res.status(400).json(badrequest);
		}
	});
});

app.get('/guitar/:note', function(req,res){
	console.log('get#guitar#default');
	var note = req.params.note.toUpperCase();
	var mod = 'major'

	Guitarchord.findOne({type:mod}, function(err, data){
		if(!err && data != null){
			console.log(data);
			res.json(data.data[note]);
		}
		else{
			console.log(err);
			badrequest.err = err;
			res.status(400).json(badrequest);
		}
	});
});

app.get('/piano/:note/:mod', function(req,res){
	console.log('get#piano');
	var note = req.params.note.toUpperCase();
	var mod = req.params.mod;

	Pianochord.findOne({type:mod}, function(err, data){
		if(!err && data != null){
			console.log(data);
			res.json(data.data[note]);
		}
		else{
			console.log(err);
			badrequest.err = err;
			res.status(400).json(badrequest);
		}
	});
});

app.get('/guitar/:note/:mod', function(req,res){
	console.log('get#guitar');
	var note = req.params.note.toUpperCase();
	var mod = req.params.mod;

	if(req.params.mod === 'minor'){mod = 'minor'};
	console.log(mod);

	Guitarchord.findOne({type:mod}, function(err, data){
		if(!err && data != null){
			console.log(data);
			res.json(data.data[note]);
		}
		else{
			console.log(err);
			badrequest.err = err;
			res.status(400).json(badrequest);
		}
	});
});

app.get('/*', function(req,res){
	res.status(400).json(badrequest);
});

app.listen(process.env.PORT || 3000);


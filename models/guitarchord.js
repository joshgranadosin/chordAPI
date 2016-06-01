var mongoose = require('mongoose');

var guitarchordSchema = new mongoose.Schema({
	type: String,
	data: Object
});

var Guitarchord = mongoose.model('Guitarchord', guitarchordSchema);

module.exports = Guitarchord;
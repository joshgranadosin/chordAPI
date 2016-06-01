var mongoose = require('mongoose');

var pianochordSchema = new mongoose.Schema({
	type: String,
	data: Object
});

var Pianochord = mongoose.model('Pianochord', pianochordSchema);

module.exports = Pianochord;
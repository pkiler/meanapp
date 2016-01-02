// Modules required
var mongoose = require('mongoose');

// Create the movieschema
var MovieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}
});

// Export the model schema.
module.exports = MovieSchema;